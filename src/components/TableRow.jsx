import React, { useState } from 'react';

import EditModal from './EditModal';

const TableRow = ({ record, edit, deleter, submitHandler }) => {

    const [modalActive, setModalActive] = useState(false)

    const showModal = () => setModalActive(true);

    return (
        <div>
            <div>
                {modalActive && <EditModal record = {record} submitHandler = {submitHandler}/>}
            </div>
            <div className="table-row">
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
                <div onClick = {showModal}>
                    Edit
                </div>
                <div onClick = {deleter}>
                    Delete
                </div>
            </div>
        </div>
    )
}

export default TableRow;