import React from 'react';

const StockQuote = ({ quoteHeadContent,quoteBodyContent,handleClosePannel }) => {
    
    return(
       <div className='StockQuote'>
           <div className='SettingBar'>
               <p>Quote</p>
                <button onClick={handleClosePannel}>Setting</button>
            </div>
           <div className='QuoteHead'>
               {quoteHeadContent.map(item => <p>{item.columnData}</p>)}
            </div>
            <div className='QuoteBody'>
               {quoteBodyContent.map(item => <p><span>{item.columnTitle}</span><span>{item.columnData}</span></p>)}
            </div>
        </div>
    );
};

StockQuote.defaultProps = {
    quoteHeadContent:[],
    quoteBodyContent:[],
}

export default StockQuote;