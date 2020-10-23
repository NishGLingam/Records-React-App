import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, removeFilter } from '../actions/actions';

const Filters = () => {

    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters);

    const filterHandler = (filter) => {
        if (filters.indexOf(filter) === -1){
            dispatch(addFilter(filter));
        } else {
            dispatch(removeFilter(filter));
        }
        
    }

    return (
        <div>
            Filters 
            <button onClick={() => filterHandler("Sales")} className = {filters.indexOf("Sales") === -1 ? 'inactive-filter' : 'active-filter'}> Sales </button>
            <button onClick={() => filterHandler("IT")}> IT </button>
            <button onClick={() => filterHandler("HR")}> HR </button>
        </div>
    )

}

export default Filters