import React, { useState } from 'react';

import EditModal from './EditModal';

const TableRow = ({ record, deleter, index }) => {

    const [modalActive, setModalActive] = useState(false)
    
    const modalHandler = () => setModalActive(!modalActive);

    return (
        <div>
            <div>
               <EditModal record = {record} modalActive ={modalActive} modalHandler={modalHandler}/>
            </div>
            <div className={index % 2 === 0 ? "table-row white-row" : "table-row blue-row"}>
                <div>
                    {record.ninumber}
                </div>
                <div>
                    {record.fullname}
                </div>
                <div>
                    {record.phone}
                </div>
                <div>
                    {record.address}
                </div>
                <div>
                    {record.department}
                </div>
                <div>
                    <button className = "table-button" onClick = {modalHandler}>
                        Edit
                    </button>
                </div>              
                <div>
                    <button className = "table-button" onClick = {deleter}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TableRow;