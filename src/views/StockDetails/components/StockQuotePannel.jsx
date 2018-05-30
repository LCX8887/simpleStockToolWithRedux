import React from 'react';

const StockQuotePannel = ({ availabelColumnArr,tempColumnArr,handleColumnArrSetting,handleColumnArrSelect,handleClosePannel,className }) => {
    
    return(
        <div className={className}>
            <div>
                <p>Setting</p>
                <button onClick={handleClosePannel}>Close</button>
            </div>
            <div>
            <table>
                <thead>
                <tr><th>Avalable Items</th></tr>
                </thead>
                <tbody>
                {availabelColumnArr.map((item,index) => <tr key={index} onClick={handleColumnArrSelect}><td>{item}</td></tr>)}
                </tbody>
            </table>
            <table>
                <thead>
                <tr><th>Selected Items</th></tr>
                </thead>
                <tbody>
                {tempColumnArr.map((item,index) => <tr key={index}><td>{item}</td></tr>)}
                </tbody>
            </table>
            </div>
            
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