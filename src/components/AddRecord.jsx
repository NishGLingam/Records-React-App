import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { addRecord } from '../actions/actions';

const AddRecord = () => {

    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false)
    const [ninumber, setNinumber] = useState('');
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [department, setDepartment] = useState('');

    const modalHandler = () => {
        setShowModal(!showModal)
    }

    const addHandler = (e) => {
        
        e.preventDefault();

        dispatch(addRecord({
            ninumber,
            fullname,
            phone,
            address,
            department,
        }))

        modalHandler();
    }

    return (
        <div className = 'add-record-container'>
            <button className = 'add-record' onClick = {modalHandler}>
                Add a record
            </button>
            {showModal && 
            <form className = 'edit-modal' onSubmit = {addHandler}> 
                NI Number: <input type = 'text'  id='ninumber' onChange={event => setNinumber(event.target.value)}/>
                Full Name: <input type = 'text'  id='fullname' onChange={event => setFullname(event.target.value)}/>                 
                Phone No: <input type = 'text'  id='phone' onChange={event => setPhone(event.target.value)}/>                 
                Address:  <input type = 'text'  id='address' onChange={event => setAddress(event.target.value)}/>                 
                Department:  <input type = 'text'  id='department' onChange={event => setDepartment(event.target.value)}/> 
                <input type = 'submit' value = 'Submit' />       
                <div onClick={modalHandler}> &#10006; </div>         
            </form>}
        </div>
    )
}

export default AddRecord