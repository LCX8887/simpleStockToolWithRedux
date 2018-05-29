import React from 'react';
import StockNewsRow from './StockNewsRow';

const StockNews = ({stockNews,newsClassName,newsRowClassName,handleCompactView,handleShowSummary }) => {
    return(
        <div className={newsClassName}>
            <div>
                <p>News</p>
                <button onClick={handleCompactView}>compact view</button>
            </div>
            {stockNews.map((newItem,index) => <StockNewsRow 
                                                    newItem={newItem} 
                                                    key={index} 
                                                    index={index} 
                                                    newsRowClassName={newsRowClassName} 
                                                    handleShowSummary={handleShowSummary} />)}
        </div>
        
    );
};
StockNews.defaultProps = {
    stockNews:[],
}
export default StockNews;