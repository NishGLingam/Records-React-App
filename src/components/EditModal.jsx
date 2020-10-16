import React, { useState } from 'react';

const EditModal = ( { record }) => { 

    const [niInput, setNiInput] = useState(record.ninumber);
    const [nameInput, setNameInput] = useState(record.fullname);
    const [phoneInput, setPhoneInput] = useState(record.phone);
    const [addressInput, setAddressInput] = useState(record.address);
    const [departmentInput, setDepartmentInput] = useState(record.department);

    const submitHandler = (e) => {
        e.preventDefault();
        
    }



    return (
        <div className = 'edit-modal' onSubmit = {submitHandler}>
            <form> 
                NI Number: <input type = 'text' defaultValue = {record.ninumber} id='ninumber' onChange={event => setNiInput(event.target.value)}/>
                Full Name: <input type = 'text' defaultValue = {record.fullname} id='fullname' onChange={event => setNameInput(event.target.value)}/>                 
                Phone No: <input type = 'text' defaultValue = {record.phone} id='phone' onChange={event => setPhoneInput(event.target.value)}/>                 
                Address:  <input type = 'text' defaultValue = {record.address} id='address' onChange={event => setAddressInput(event.target.value)}/>                 
                Department:  <input type = 'text' defaultValue = {record.department} id='department' onChange={event => setDepartmentInput(event.target.value)}/> 
                <input type = 'submit' value = 'Submit' />                
            </form>
        </div>
    )
}

export default EditModal;