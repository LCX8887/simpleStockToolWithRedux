import React from 'react';

const StockNewsRow = ({ newItem,index,newsRowClassName,handleShowSummary }) => {

    const datetime = newItem.datetime.slice(0,10);
    const headline = newItem.headline;
    const summary = newItem.summary;
    const source = newItem.source;

    return(
        <div className={newsRowClassName} onClick={handleShowSummary}>
            <p id='index'>{index+1}</p>
            <p id='headline'>{headline}</p>
            <p id='summary'>{summary}</p>
            <p id='datetime'>{datetime}</p>
            <p id='source'>{source}</p>
        </div>
    );
};

export default StockNewsRow;