import React from 'react';
import StockNewsRow from './StockNewsRow';

const StockNews = ({stockNews,newsClassName,newsRowClasName,handleCompactView,handleShowSummary }) => {
    return(
        <div className={newsClassName}>
            <div>
                <p>News</p>
                <button onClick={handleCompactView}>compact view</button>
            </div>
            <div>
            {stockNews.map((newItem,index) => <StockNewsRow 
                                                    newItem={newItem} 
                                                    key={index} 
                                                    index={index} 
                                                    newsRowClasName={newsClassName} 
                                                    handleShowSummary={handleShowSummary} />)}
            </div>
        </div>
        
    );
};
StockNews.defaultProps = {
    stockNews:[],
}
export default StockNews;