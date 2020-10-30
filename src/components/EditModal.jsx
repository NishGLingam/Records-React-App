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
            modalActive && 
            <div>
                <div className='modal-overlay'> 
                </div>
                <form className = 'edit-modal' onSubmit = {submitHandler}> 
                    <span className = 'close-modal' onClick={modalHandler}> &#10006; </span>    
                    <div> NI Number: <input type = 'text' defaultValue = {record.ninumber} id='ninumber' onChange={event => setNinumber(event.target.value)}/> </div>
                    <div> Full Name: <input type = 'text' defaultValue = {record.fullname} id='fullname' onChange={event => setFullname(event.target.value)}/> </div>                 
                    <div> Phone No: <input type = 'text' defaultValue = {record.phone} id='phone' onChange={event => setPhone(event.target.value)}/> </div>                 
                    <div> Address:  <input type = 'text' defaultValue = {record.address} id='address' onChange={event => setAddress(event.target.value)}/>                  </div>
                    <div> Department:  <input type = 'text' defaultValue = {record.department} id='department' onChange={event => setDepartment(event.target.value)}/>  </div>
                    <input className='add-record' type = 'submit' value = 'Submit' />               
                </form>
            </div>
    )
}

export default EditModal;