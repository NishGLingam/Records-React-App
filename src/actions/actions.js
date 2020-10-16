const deleteRecord = (i) => ({
    type: 'DELETE_RECORD',
    i,
});

const editRecord = (i) => ({
    type: 'EDIT_RECORD',
    i,
})

export { deleteRecord, editRecord };