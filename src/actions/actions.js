const deleteRecord = (i) => ({
    type: 'DELETE_RECORD',
    i,
});

const editRecord = (editedRecords) => ({
    type: 'EDIT_RECORD',
    editedRecords,
})

const addRecord = (newRecord) => ({
    type: 'ADD_RECORD',
    newRecord,
})

export { deleteRecord, editRecord, addRecord };