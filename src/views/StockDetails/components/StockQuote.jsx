import React from 'react';

const StockQuote = ({ quoteHeadContent,quoteBodyContent,handleClosePannel }) => {
    
    return(
       <div className='StockQuote'>
           <div>
               <p>Quote</p>
                <button onClick={handleClosePannel}>Setting</button>
            </div>
           <div>
               {quoteHeadContent.map(item => <p>{item.columnData}</p>)}
            </div>
            <div>
               {quoteBodyContent.map(item => <p>{item.columnTitle}{item.columnData}</p>)}
            </div>
        </div>
    );
};

StockQuote.defaultProps = {
    quoteHeadContent:[],
    quoteBodyContent:[],
}

export default StockQuote;