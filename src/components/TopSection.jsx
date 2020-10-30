import React from 'react';

import Filters from './Filters';
import AddRecord from './AddRecord';



const Topsection = () => {
    return (
        <div>
            <h1> Shafeeq's Records Database </h1>
            <Filters />
            <AddRecord  />
        </div>
    )

}

export default Topsection;