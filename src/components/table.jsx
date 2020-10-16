import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRecord } from '../actions/actions';

import TableRow from './TableRow';

const Table = () => {

    const dispatch = useDispatch();

    const records = useSelector(state => state.records);

    return (
        <div className="table-style">
            <div className="table-header">
                <div>
                    NI Number
                </div>
                <div>
                    Full Name
                </div>
                <div>
                    Phone Number
                </div>
                <div>
                    Address
                </div>
                <div>
                    Department
                </div>
                <div>
                Edit
            </div>
            <div>
                Delete
            </div>
            </div>
            {records.map((x, index) => <TableRow key={index}  record={x} deleter={() => dispatch(deleteRecord(x))}/>)}
            <button onClick={() => console.log(records)}> Tester </button>
        </div>
    )
};
  
export default Table;