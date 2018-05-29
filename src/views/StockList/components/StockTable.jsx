import React from 'react';
import StockTableRow from './StockTableRow';

const StockTable = ({ tableHead, stockListData, currentTime, onSelectItem }) => {
    return(
        <table className='StockTable'>
            <thead>            
                <tr>
                    {tableHead.map(head => <th key={head}>{head}</th>)}
                </tr>
            </thead>
            <tbody>
                {stockListData.map((stock,index) => 
                    <StockTableRow stock={stock} key={index} index={index+1} onSelectItem={onSelectItem}/>
                )}
            </tbody>
            <tfoot>            
                <tr>
                    <td colSpan={7}>Updating on {currentTime}</td>
                </tr> 
            </tfoot>   
        </table>
    );
};

StockTable.defaultProps = {
    tableHead:[],
    stockListData:[],
}

export default StockTable;