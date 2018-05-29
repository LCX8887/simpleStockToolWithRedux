import React from 'react';
import Chart from './Chart';

const StockRecentTrend = ({stockChart}) => {      
  
    const dataArray = stockChart.map(item => item.volume);
    const labelsArray = stockChart.map(item => item.date)
    const chart = {
        type: 'line',
        data: {
            labels: labelsArray,
            datasets: [{
                label: '# of Volume',
                backgroundColor: 'rgb(239, 189, 206)',
                borderColor: 'rgb(243, 137, 173)',
                data: dataArray
            }]}
        
    };
    return(
        <div className='StockTrend'>
            <canvas id="myChart" width="400" height="400"></canvas>
            <Chart chart={chart}/>
      </div>
    );
}
StockRecentTrend.defaultProps = {
    stockChart:[],
}
export default StockRecentTrend;