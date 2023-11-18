export class OrderStoreHelper {
    constructor(state, getters, serviceModel, previousServiceId) {
        this.state = state;
        this.getters = getters;
        this.serviceModel = serviceModel;
        this.previousServiceId = previousServiceId;
        this.initialRecords = null;

        if (this.state.initial_records) {
            this.initialRecords = this.state.initial_records;
        }
    }
    getInitialValue(field, default_value) {
        if (this.initialRecords && this.initialRecords.hasOwnProperty(field)) {
            default_value = this.initialRecords[field];
        }
        return default_value;
    }

    workType() {
        let work_type_id = null;
        if (this.previousServiceId) {
            let work_types =
                this.state.data.work_types[this.state.form.service_id];

            if (work_types) {
                work_type_id = this.getInitialValue(
                    "work_type_id",
                    work_types[0].id
                );
            }
        } else {
            // loading for the first time
            if (this.state.form.work_type_id == null) {
                let work_types =
                    this.state.data.work_types[this.state.form.service_id];

                if (work_types) {
                    work_type_id = this.getInitialValue(
                        "work_type_id",
                        work_types[0].id
                    );
                }
            }
        }
        return work_type_id;
    }

    assignment() {
        let assignment_id = null;

        if (this.previousServiceId) {
            assignment_id = this.serviceModel.assignments[0].id;
        } else {
            // loading for the first time
            if (this.state.form.assignment_id == null) {
                assignment_id = this.getInitialValue(
                    "assignment_id",
                    this.serviceModel.assignments[0].id
                );
            }
        }

        return assignment_id;
    }

    subject() {
        let subject_id = null;
        if (this.previousServiceId) {
            subject_id = this.serviceModel.subjects[0].id;
        } else {
            // loading for the first time
            if (this.state.form.subject_id == null) {
                subject_id = this.getInitialValue(
                    "subject_id",
                    this.serviceModel.subjects[0].id
                );
            }
        }
        return subject_id;
    }
    academicLevel() {
        let academic_level_id = null;
        if (this.previousServiceId) {
            academic_level_id = this.state.data.academic_levels[0].id;
        } else {
            // loading for the first time
            if (this.state.form.academic_level_id == null) {
                academic_level_id = this.getInitialValue(
                    "academic_level_id",
                    this.state.data.academic_levels[0].id
                );
            }
        }
        return academic_level_id;
    }
    urgency() {
        let urgency_id = null;
        let urgencies = this.state.data.urgencies;
        // if there was any service before the current one
        if (this.previousServiceId) {
            urgency_id = urgencies[urgencies.length - 1].id;
        } else {
            // loading for the first time
            if (this.state.form.urgency_id == null) {
                urgency_id = this.getInitialValue(
                    "urgency_id",
                    urgencies[urgencies.length - 1].id
                );
            }
        }
        return urgency_id;
    }
    paperFormat() {
        let paper_format_id = null;
        if (this.previousServiceId) {
            paper_format_id = this.state.data.paper_formats[0].id;
        } else {
            // loading for the first time
            if (this.state.form.paper_format_id == null) {
                paper_format_id = this.getInitialValue(
                    "paper_format_id",
                    this.state.data.paper_formats[0].id
                );
            }
        }
        return paper_format_id;
    }
    spacingType() {
        let spacing_type_id = null;
        let spacingTypes = this.state.data.spacings_types;
        if (this.previousServiceId) {
            spacing_type_id = spacingTypes[0].id;
        } else {
            // loading for the first time
            if (this.state.form.spacing_type_id == null) {
                spacing_type_id = this.getInitialValue(
                    "spacing_type_id",
                    spacingTypes[0].id
                );
            }
        }
        return spacing_type_id;
    }

    numberOfSources() {
        let number_of_sources = 0;
        if (this.previousServiceId) {
            number_of_sources = this.state.form.number_of_sources;
        } else {
            // loading for the first time
            if (this.state.form.number_of_sources == null) {
                number_of_sources = this.getInitialValue(
                    "number_of_sources",
                    0
                );
            }
        }
        return number_of_sources;
    }
    quantity() {
        //return this.serviceModel.minimum_order_quantity;
        let quantity = null;

        if (this.previousServiceId) {
            quantity = this.serviceModel.minimum_order_quantity;
        } else {
            // loading for the first time
            if (this.state.form.quantity == null) {
                quantity = this.getInitialValue(
                    "quantity",
                    this.serviceModel.minimum_order_quantity
                );
            }
        }

        return quantity;
    }
    unit() {
        let unit_name = null;
        if (this.previousServiceId && this.state.form.unit_name) {
            unit_name = this.state.form.unit_name;
        } else {
            // loading for the first time
            if (this.state.form.unit_name == null) {
                unit_name = this.getInitialValue(
                    "unit_name",
                    this.state.data.units_for_writing_services[0].id
                );
            }
        }
        return unit_name;
    }

    authorLevel() {
        let author_level_id = this.state.form.author_level_id;

        // loading for the first time
        if (this.state.form.author_level_id == null) {
            author_level_id = this.getInitialValue(
                "author_level_id",
                this.state.data.author_levels[0].id
            );
        }
        return author_level_id;
    }

    grammaticalPerson() {
        let grammatical_person_id = this.state.form.grammatical_person_id;

        // loading for the first time
        if (this.state.form.grammatical_person_id == null) {
            grammatical_person_id = this.getInitialValue(
                "grammatical_person_id",
                this.state.data.grammatical_people[0].id
            );
        }
        return grammatical_person_id;
    }

    language() {
        let language_id = this.state.form.language_id;

        // loading for the first time
        if (this.state.form.language_id == null) {
            let language = null;
            if (
                (language = this.getters.findInDb(
                    this.state.data.content_writing_languages,
                    "is_default_for_content_writing",
                    true
                ))
            ) {
                language_id = language.id;
            } else {
                language_id = null;
            }

            language_id = this.getInitialValue("language_id", language_id);
        }
        return language_id;
    }

    serviceLevel() {
        let service_level_id = this.state.form.service_level_id;
        let serviceLevels = this.state.data.service_levels;
        let default_value = serviceLevels[0].id;
        // loading for the first time
        if (this.state.form.service_level_id == null) {
            for (let index = 0; index < serviceLevels.length; index++) {
                const serviceLevel = serviceLevels[index];

                if (serviceLevel.is_default) {
                    default_value = serviceLevel.id;
                }
            }

            service_level_id = this.getInitialValue(
                "service_level_id",
                default_value
            );
        }
        return service_level_id;
    }
}
