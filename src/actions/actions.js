const deleteRecord = (i) => ({
    type: 'DELETE_RECORD',
    i,
});

const editRecord = (editedRecords) => ({
    type: 'EDIT_RECORD',
    editedRecords,
})

export { deleteRecord, editRecord };