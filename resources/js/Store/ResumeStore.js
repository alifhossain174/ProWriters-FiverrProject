export class ResumeStore {
    getFieldValues(state, orderStoreHelper) {
        state.form.work_type_id = orderStoreHelper.workType();
        state.form.assignment_id = orderStoreHelper.assignment();
        state.form.quantity = 1;
    }

    getBasicPrice(state) {
        return parseFloat(state.assignmentModel.price);
    }
}
