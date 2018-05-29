import React from 'react';
import myChart from 'chart.js';

class Chart extends React.Component {
    
    componentDidMount() {
        var ctx = document.getElementById("myChart");
        this.test = new myChart(ctx, this.props.chart);
    }
    componentWillUpdate(){
        this.test.data.labels = this.props.chart.data.labels;
        this.test.data.datasets = this.props.chart.data.datasets;
        this.test.update();
    }
  render() {
    return (
        <div>
        </div>
        );
  }
}

export default Chart;