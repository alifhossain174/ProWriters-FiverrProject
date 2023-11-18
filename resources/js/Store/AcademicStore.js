import  WorkType from "../Enums/WorkType.js";

export class AcademicStore {
    getFieldValues(state, orderStoreHelper) {
        state.form.work_type_id = orderStoreHelper.workType();
        state.form.assignment_id = orderStoreHelper.assignment();
        state.form.subject_id = orderStoreHelper.subject();
        state.form.academic_level_id = orderStoreHelper.academicLevel();
        state.form.urgency_id = orderStoreHelper.urgency();
        state.form.quantity = orderStoreHelper.quantity();
        state.form.paper_format_id = orderStoreHelper.paperFormat();
        state.form.unit_name = orderStoreHelper.unit();
        state.form.spacing_type_id = orderStoreHelper.spacingType();
        state.form.number_of_sources = orderStoreHelper.numberOfSources();
    }

    getBasicPrice(state) {
        let per_word_price = getPerWordPrice(
            state.form.work_type_id,
            state.authorLevelModel
        );

        let base_price = per_word_price * getQuantity(state);
        let price = base_price;

        let costFactors = [
            state.assignmentModel,
            state.academicLevelModel,
            state.subjectModel,
            state.urgencyModel,
        ];

        for (const costFactor of costFactors) {
            price += getPriceFromPercentage(base_price, costFactor);            
        }

        return price;
    }
}

function getQuantity(state) {
    let quantity = 0;

    if (state.form.unit_name == "page") {
        quantity = state.number_of_words_per_page * state.form.quantity;
    } else {
        quantity = state.form.quantity;
    }
    return quantity;
}

function getPerWordPrice(work_type, authorLevel) {
    let price = 0;

    if (work_type == WorkType.WRITING) {
        price = authorLevel.customer_price_per_word_writing;
    } else if (work_type == WorkType.EDITING) {
        price = authorLevel.customer_price_per_word_editing;
    } else if (work_type == WorkType.PROOFREADING) {
        price = authorLevel.customer_price_per_word_proofreading;
    }

    return parseFloat(price);
}

function getPriceFromPercentage(base_price, costFactor) {
    if (costFactor.percentage) {
        return (base_price * parseFloat(costFactor.percentage)) / 100;
    }
    return 0;
}
