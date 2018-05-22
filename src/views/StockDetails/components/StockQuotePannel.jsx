import React from 'react';

const StockQuotePannel = ({ availabelColumnArr,tempColumnArr,handleColumnArrSetting,handleColumnArrSelect,handleClosePannel,className }) => {
    
    return(
        <div className={className}>
            <div>
                <p>Setting</p>
                <button onClick={handleClosePannel}>Close</button>
            </div>
            <table>
                {availabelColumnArr.map(item => <tr onClick={handleColumnArrSelect}><td>{item}</td></tr>)}
            </table>
            <table>
                {tempColumnArr.map(item => <tr><td>{item}</td></tr>)}
            </table>
            <div>
                <button onClick={handleColumnArrSetting}>Save&Close</button>
            </div>
        </div>
    );

};
StockQuotePannel.defaultProps = {
    selectedColumnArr:[],
    tempColumnArr:[],
}
export default StockQuotePannel;