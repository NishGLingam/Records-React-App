const deleteRecord = (i) => ({
    type: 'DELETE_RECORD',
    i,
});

const editRecord = (editedRecords) => ({
    type: 'EDIT_RECORD',
    editedRecords,
});

const addRecord = (newRecord) => ({
    type: 'ADD_RECORD',
    newRecord,
});

const addFilter = (newFilter) => ({
    type: 'ADD_FILTER',
    newFilter
});

const removeFilter = (oldFilter) => ({
    type: 'REMOVE_FILTER',
    oldFilter,
});


const clearFilter = () => ({
    type: 'CLEAR_FILTER'
});

export { deleteRecord, editRecord, addRecord, addFilter, removeFilter, clearFilter };