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
            <div>
                <div className="modal-overlay"></div>
                <form className = 'edit-modal' onSubmit = {addHandler}> 
                    <span className='close-modal' onClick={modalHandler}> &#10006; </span> 
                    <div> NI Number: <input type = 'text'  id='ninumber' onChange={event => setNinumber(event.target.value)}/> </div>
                    <div> Full Name: <input type = 'text'  id='fullname' onChange={event => setFullname(event.target.value)}/> </div>
                    <div> Phone No: <input type = 'text'  id='phone' onChange={event => setPhone(event.target.value)}/> </div>
                    <div> Address:  <input type = 'text'  id='address' onChange={event => setAddress(event.target.value)}/> </div>
                    <div> Department:  <input type = 'text'  id='department' onChange={event => setDepartment(event.target.value)}/> </div>
                    <input type = 'submit' value = 'Submit' />        
                </form>
            </div>
            }
        </div>
    )
}

export default AddRecord