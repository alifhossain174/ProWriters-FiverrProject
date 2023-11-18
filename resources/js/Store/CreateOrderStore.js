import { reactive, watch, nextTick } from "vue";
import { OrderStoreHelper } from "./OrderStoreHelper.js";
import { AcademicStore } from "./AcademicStore.js";
import { ResumeStore } from "./ResumeStore.js";
import { ContentWritingStore } from "./ContentWritingStore.js";

const config = {
    services: {
        content_writing: 1,
        academic_writing: 2,
        resume_writing: 3,
    },
};

const state = reactive({
    is_on_bidding_mode: false,
    serviceModel: {},
    subjectModel: {},
    assignmentModel: {},
    urgencyModel: {},
    workLevelModel: {},
    authorLevelModel: {},
    academicLevelModel: {},
    serviceLevelModel: {},
    languageModel: {},

    errors: {},
    number_of_words_per_page: 275,
    base_price: 0,
    urls: {},
    data: {},
    form: {},
    initial_records: null,
});

const methods = {
    async setInitial(initial_records) {
        state.initial_records = initial_records;
        var inputs = {
            budget: null,
            is_on_bidding_mode: state.is_on_bidding_mode,
            id: null,
            customer_id: null,
            project_id: null,
            service_id: state.data.services[0].id,
            added_services: [],
            title: null,
            instruction: null,
            files_data: [],
            dead_line: "",
            author_level_id: null,
            service_level_id: null,
            is_total_overridden: false,
            updated_total: 0,
        };
        //let academicStore = new AcademicStore();

        //inputs = { ...inputs, ...academicStore.getFields() };
        if (initial_records.service_id) {
            inputs.service_id = initial_records.service_id;
            delete initial_records.service_id;
        }
        state.form = inputs;

        await nextTick();

        for (let key in initial_records) {
            state.form[key] = initial_records[key];
        }

        // if (initial_records) {
        //     inputs = { ...inputs, ...initial_records };
        // }
        // state.form = inputs;
    },

    // async getAuthorLevelById(payload) {
    //     return axios
    //         .post(state.data.urls["author_level_by_id"], {
    //             preferred_author_code: payload,
    //         })
    //         .then(function (response) {
    //             return { status: 1, data: response.data };
    //         })
    //         .catch(function (error) {
    //             if (error.toJSON().message === "Network Error") {
    //                 alert("no internet connection");
    //             }

    //             return { status: 2 };
    //         });
    // },

    addError(payload) {
        state.errors[payload.field] = payload.message;
        // Vue.set(state.errors, payload.field, [payload.message]);
    },

    setError(payload) {
        state.errors = payload;
    },
    removeError(payload) {
        if (state.errors[payload]) {
            delete state.errors[payload];
        }
    },
};

const getters = {
    constants: {
        style: {
            formGroup: "mb-3",
            formLabel: "form-label",
            formElement: "col-md-8",
        },
        priceType: {
            fixed: 1,
            perWord: 2,
            perPage: 3,
        },
    },

    findInDb($data, columnName, value) {
        for (var row of $data) {
            if (row[columnName] == value) {
                return row;
            }
        }
        return {};
    },
    convertQuantity(quantity, convert_unit_from, convert_unit_to) {
        if (convert_unit_from == "word" && convert_unit_to == "page") {
            return Math.ceil(quantity / state.number_of_words_per_page);
        } else if (convert_unit_from == "page" && convert_unit_to == "word") {
            return quantity * state.number_of_words_per_page;
        } else {
            return quantity;
        }
    },
    getQuantityInLargestUnitOfMeasurement() {
        let serviceId = state.serviceModel.id;

        if (
            serviceId == config.services.content_writing ||
            serviceId == config.services.academic_writing
        ) {
            if (state.form.unit_name == "word") {
                return getters.convertNumberOfWordsToPages();
            }
        }
        return state.form.quantity;
    },
    getNumberOfWordsBySpacingType(spacingTypeId) {
        for (var row of state.data.spacings_types) {
            if (row["id"] == spacingTypeId) {
                return row.number_of_words;
            }
        }
        return 275;
    },

    convertNumberOfPagesToWords: function () {
        return state.form.quantity * state.number_of_words_per_page;
    },
   
    convertNumberOfWordsToPages: function () {
        return Math.ceil(state.form.quantity / state.number_of_words_per_page);
    },

    getBasicPrice() {
        let serviceId = parseInt(state.serviceModel.id);
        let store = null;
        if (serviceId) {
            if (serviceId == config.services.academic_writing) {
                store = new AcademicStore();
            }

            if (serviceId == config.services.content_writing) {
                store = new ContentWritingStore();
            }

            if (serviceId == config.services.resume_writing) {
                store = new ResumeStore();
            }
            let base_price = store.getBasicPrice(state);
            state.base_price = base_price;
            return base_price;
        }
        return 0;
    },
};

function setServiceModel(serviceId, previousServiceId) {
    
    var serviceModel = getters.findInDb(state.data.services, "id", serviceId);
    state.serviceModel = serviceModel;

    let orderStoreHelper = new OrderStoreHelper(
        state,
        getters,
        serviceModel,
        previousServiceId
    );

    let store = null;

    if (serviceId == config.services.content_writing) {
        store = new ContentWritingStore();
    }

    if (serviceId == config.services.academic_writing) {
        store = new AcademicStore();
    }

    if (serviceId == config.services.resume_writing) {
        store = new ResumeStore();
    }

    store.getFieldValues(state, orderStoreHelper);

    state.form.author_level_id = orderStoreHelper.authorLevel();
    state.form.service_level_id = orderStoreHelper.serviceLevel();

    if (previousServiceId) {
        flushAddedAdditionalServices();
    }
}

// function resetUnit(serviceModel) {
//     // Reset Quantity
//     state.form.quantity = serviceModel.minimum_order_quantity;
//     // Reset Unit Name
//     state.unit_name = serviceModel.unit_name;

//     // Reset number of words per page
//     if (serviceModel.type == "writing") {
//         setNumberOfWordsBySpacingType(state.form.spacing_type_id);
//     }
// }

function setNumberOfWordsBySpacingType(spacing_type_id) {
    state.number_of_words_per_page =
        getters.getNumberOfWordsBySpacingType(spacing_type_id);
}

function flushAddedAdditionalServices() {
    state.form.added_services = [];
}

function setAuthorLevelModel(newAuthorLevelId, oldAuthorLevelId) {
    state.authorLevelModel = getters.findInDb(
        state.data.author_levels,
        "id",
        newAuthorLevelId
    );
}
function setServiceLevelModel(newServiceLevelId, oldServiceLevelId) {
    state.serviceLevelModel = getters.findInDb(
        state.data.service_levels,
        "id",
        newServiceLevelId
    );
}

function setLanguageModel(newLanguageId, oldLanguageId) {
    state.languageModel = getters.findInDb(
        state.data.content_writing_languages,
        "id",
        newLanguageId
    );
}

function setSubjectModel(newSubjectId, oldSubjectId) {
    if (state.serviceModel.subjects) {
        state.subjectModel = getters.findInDb(
            state.serviceModel.subjects,
            "id",
            newSubjectId
        );
    } else if (!newSubjectId || newSubjectId == 0 || newSubjectId == "") {
        state.subjectModel = {};
    } else {
        state.subjectModel = {};
    }
}

function setAcademicLevelModel(newAcademicLevelId, oldAcademicLevelId) {
    state.academicLevelModel = getters.findInDb(
        state.data.academic_levels,
        "id",
        newAcademicLevelId
    );
}

function setAssignmentModel(newAssignmentId, oldAssignmentId) {
    if (state.serviceModel.assignments) {
        state.assignmentModel = getters.findInDb(
            state.serviceModel.assignments,
            "id",
            newAssignmentId
        );

        // if the service type is resume writing pick the urgency from the urgency model
        if (state.serviceModel.id == config.services.resume_writing) {
            state.form.urgency_id = state.assignmentModel.urgency_id;
            state.form.author_level_id =
                state.assignmentModel.author_level_id;
        }
    } else {
        state.assignmentModel = null;
    }
}

function getDeadline(number_to_add, type) {
    let current_date = new Date();
    let dateTime = null;
    if (type == "days") {
        dateTime = current_date.setDate(current_date.getDate() + number_to_add);
    }
    if (type == "hours") {
        dateTime = current_date.setHours(
            current_date.getHours() + number_to_add
        );
    }
    if (dateTime) {
        dateTime = new Date(dateTime).toLocaleString();
    }
    return dateTime;
}

function setUrgencyModel(newUrgencyId, oldUrgencyId) {
    state.urgencyModel = getters.findInDb(
        state.data.urgencies,
        "id",
        newUrgencyId
    );
    state.form.dead_line = getDeadline(
        state.urgencyModel.value,
        state.urgencyModel.type
    );
    // var dateTime = moment().add(payload.value, payload.type);
    // var monthName = dateTime.format("MMM");
    // var translatedMonthName = translate(dateTime.format("MMM"));

    // state.form.dead_line = dateTime
    //     .format("DD MMM YYYY, H:MM")
    //     .replace(monthName, translatedMonthName);
}

// function setAdditionalServicesModel(addedServices) {
//     let data = [];
//     for (const property in state.data.additional_services) {
//         let row = state.data.additional_services[property];
//         if (addedServices.indexOf(row.id) > -1) {
//             data.push(row);
//         }
//     }
//     state.addedServicesModel = data;
// }

watch(
    () => state.form.service_id,
    (newVal, oldVal) => {
        setServiceModel(newVal, oldVal);
    },
    { deep: true }
);

watch(
    () => state.form.assignment_id,
    (newVal, oldVal) => {
        setAssignmentModel(newVal, oldVal);
    },
    { deep: true }
);

watch(
    () => state.form.author_level_id,
    (newVal, oldVal) => {
        setAuthorLevelModel(newVal, oldVal);
    },
    { deep: true }
);

watch(
    () => state.form.urgency_id,
    (newVal, oldVal) => {
        setUrgencyModel(newVal, oldVal);
    },
    { deep: true }
);

watch(
    () => state.form.spacing_type_id,
    (newVal, oldVal) => {
        setNumberOfWordsBySpacingType(newVal);
    },
    { deep: true }
);

watch(
    () => state.form.unit_name,
    (newUnit, oldUnit) => {
        if (newUnit != oldUnit) {
            if (newUnit == "page" && !state.form.spacing_type_id) {
                state.form.spacing_type_id = state.data.spacings_types[0].id;
            }

            if (
                (newUnit == "word" || newUnit == "page") &&
                (oldUnit == "word" || oldUnit == "page")
            ) {
                state.form.quantity = getters.convertQuantity(
                    state.form.quantity,
                    oldUnit,
                    newUnit
                );
            }
        }
    },
    { deep: true }
);

watch(
    () => state.form.quantity,
    (newVal, oldVal) => {
        var quantity = newVal;
        var minimum_order_quantity = state.serviceModel.minimum_order_quantity;

        if (state.form.unit_name == "page") {
            quantity = getters.convertNumberOfPagesToWords();
        }

        if (quantity < minimum_order_quantity) {
            methods.addError({
                field: "quantity",
                message: "Minimum quantity" + " " + minimum_order_quantity,
            });
        } else {
            methods.removeError("quantity");
        }
    },
    { deep: true }
);

watch(
    () => state.form.service_level_id,
    (newVal, oldVal) => {
        setServiceLevelModel(newVal, oldVal);
    },
    { deep: true }
);

watch(
    () => state.form.academic_level_id,
    (newVal, oldVal) => {
        setAcademicLevelModel(newVal, oldVal);
    },
    { deep: true }
);

watch(
    () => state.form.subject_id,
    (newVal, oldVal) => {
        setSubjectModel(newVal, oldVal);
    },
    { deep: true }
);
watch(
    () => state.form.language_id,
    (newVal, oldVal) => {
        setLanguageModel(newVal, oldVal);
    },
    { deep: true }
);

// watch(
//     () => state.form.added_services,
//     (newVal, oldVal) => {
//         setAdditionalServicesModel(newVal, oldVal);
//     },
//     { deep: true }
// );

export default {
    state,
    methods,
    getters,
};
