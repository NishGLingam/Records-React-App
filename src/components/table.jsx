import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRecord } from '../actions/actions';

import TableRow from './TableRow';

const Table = () => {

    const dispatch = useDispatch();

    const records = useSelector(state => state.records);
    const filters = useSelector(state => state.filters);

    return (
        <div className="table-container">
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
                    </div>
                    <div>
                    </div>
                </div>
                <div className="table-row-container">
                {records.map((x, index) => {
                    if (filters.length === 0) {
                        return <TableRow key={index} index={index} record={x} deleter={() => dispatch(deleteRecord(x))}/>
                    }
                    else if (filters.indexOf(x.department) !== -1) {
                        return <TableRow key={index}  index={index}  record={x} deleter={() => dispatch(deleteRecord(x))}/>
                    }
                })
                }
                </div>
            </div>
        </div>
    )
};
  
export default Table;