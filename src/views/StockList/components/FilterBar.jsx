import React from 'react';

const FilterBar = ({selectedFilter,filterOptions,onSetVisibleFilter}) => {
    return(
        <div className='FilterBar'>
            <p>Stock List</p>
            {filterOptions.map(filter => 
                <button value={filter}
                        key={filter} 
                        onClick={onSetVisibleFilter}
                        style={{opacity: filter===selectedFilter ? 0.5 : 1}}>
                    {filter}
                </button>)
            }
        </div>
    );
};

FilterBar.defaultProps = {
    filterOptions:[],
}

export default FilterBar;