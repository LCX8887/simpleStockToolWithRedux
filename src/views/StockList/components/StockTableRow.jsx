import React from 'react';


const StockTableRow = ({ stock,index,onSelectItem }) => {
        return(
            <tr id={stock[2]} onClick={onSelectItem}>
                {stock.map((stockValue,index) => 
                    <td key={index}>{stockValue}</td>
                )}
             </tr>
        );
    
}
StockTableRow.defaultProps = {
    stock:[],
}
export default StockTableRow;