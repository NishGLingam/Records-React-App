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
        <div className = 'filters-container'>
            Filters:
            <button onClick={() => filterHandler("Sales")} className = {filters.indexOf("Sales") === -1 ? 'inactive-filter filter' : 'active-filter filter'}> Sales </button>
            <button onClick={() => filterHandler("IT")} className = {filters.indexOf("IT") === -1 ? 'inactive-filter filter' : 'active-filter filter'}> IT </button>
            <button onClick={() => filterHandler("HR")} className = {filters.indexOf("HR") === -1 ? 'inactive-filter filter' : 'active-filter filter'}> HR </button>
            <button onClick ={() => dispatch(clearFilter())}> Clear </button>
        </div>
    )

}

export default Filters