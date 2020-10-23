import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, removeFilter, clearFilter } from '../actions/actions';

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
            <button onClick={() => filterHandler("IT")} className = {filters.indexOf("Sales") === -1 ? 'inactive-filter' : 'active-filter'}> IT </button>
            <button onClick={() => filterHandler("HR")} className = {filters.indexOf("Sales") === -1 ? 'inactive-filter' : 'active-filter'}> HR </button>
            <button onClick ={() => dispatch(clearFilter())}> Clear </button>
        </div>
    )

}

export default Filters