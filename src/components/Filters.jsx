import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, removeFilter, clearFilter } from '../actions/actions';

const Filters = () => {

    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters);
    const records = useSelector(state => state.records);

    const departments = new Set(records.map(x => x.department));

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

            {[...departments].map(dept  => <button className = {filters.indexOf(dept) === -1 ? 'inactive-filter filter' : 'active-filter filter'} onClick={() => filterHandler(dept) }> {filters.indexOf(dept) !== -1 && <span> x </span>} {dept} </button>)}
            <button onClick ={() => dispatch(clearFilter())}> Clear </button>
        </div>
    )

}

export default Filters