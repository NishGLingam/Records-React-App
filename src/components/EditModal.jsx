import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editRecord } from '../actions/actions';

const EditModal = ( { record, modalActive, modalHandler }) => {

    
    const dispatch = useDispatch();
    const records = useSelector(state => state.records);
    const originalNI = record.ninumber;
    const [ninumber, setNinumber] = useState(record.ninumber);
    const [fullname, setFullname] = useState(record.fullname);
    const [phone, setPhone] = useState(record.phone);
    const [address, setAddress] = useState(record.address);
    const [department, setDepartment] = useState(record.department);

    const submitHandler = (e) => {
        e.preventDefault();
        const editedRecord = 
        {
            ninumber,
            fullname,
            phone,
            address,
            department,
        }

        const updatedRecords = records.map(rec => rec.ninumber === originalNI ? editedRecord : rec)

        dispatch(editRecord(updatedRecords));
        modalHandler();
    }

    return (
            modalActive && <form className = 'edit-modal' onSubmit = {submitHandler}> 
                NI Number: <input type = 'text' defaultValue = {record.ninumber} id='ninumber' onChange={event => setNinumber(event.target.value)}/>
                Full Name: <input type = 'text' defaultValue = {record.fullname} id='fullname' onChange={event => setFullname(event.target.value)}/>                 
                Phone No: <input type = 'text' defaultValue = {record.phone} id='phone' onChange={event => setPhone(event.target.value)}/>                 
                Address:  <input type = 'text' defaultValue = {record.address} id='address' onChange={event => setAddress(event.target.value)}/>                 
                Department:  <input type = 'text' defaultValue = {record.department} id='department' onChange={event => setDepartment(event.target.value)}/> 
                <input type = 'submit' value = 'Submit' /> 
                <div onClick={modalHandler}> &#10006; </div>                  
            </form>
    )
}

export default EditModal;