import React from 'react';

import Filters from './Filters';
import AddRecord from './AddRecord';



const Topsection = () => {
    return (
        <div className="top-section">
            <h1> Shafeeq's Records Database </h1>
            <div className = "space-between">
                <Filters />
                <AddRecord  />
            </div>
        </div>
    )

}

export default Topsection