import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StockQuote from '../components/StockQuote';
import StockQuotePannel from '../components/StockQuotePannel';
import StockNews from '../components/StockNews';
import StockTrend from '../components/StockTrend';
import { fetchPost } from '../flow/actions';
import classNames from 'classnames';
import './index.css';

class StockDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            headColumnArr:[{variableName:"companyName"},{variableName:"close"},{variableName:"change"},{variableName:"changePercent"}],
            columnArr:[{columnTitle: "LAST",variableName:"close"},{columnTitle:"CHANGE",variableName:"change"},
            {columnTitle:"%CHANGE",variableName:"changePercent"},{columnTitle:"VOLUME",variableName:"avgTotalVolume"},
            {columnTitle:"AVG TOTAL VOLUME",variableName:"avgTotalVolume"},{columnTitle:"OPEN",variableName:"open"},
            {columnTitle:"HIGH",variableName:"high"},{columnTitle:"LOW",variableName:"low"},{columnTitle:"CLOSE",variableName:"close"},
            {columnTitle:"DELAYED PRICE",variableName:"delayedPrice"},{columnTitle:"PREVIOUSE CLOSE",variableName:"previousClose"},
            {columnTitle:"52WKHI",variableName:"week52High"},{columnTitle:"52WKLO",variableName:"week52Low"},
            {columnTitle:"YTDCHANGE",variableName:"ytdChange"},{columnTitle:"EXCHANGE",variableName:"primaryExchange"},
            {columnTitle:"SECTOR",variableName:"sector"}],
            tempColumnArr:[], 
            // selectedColumnArr:["LAST","CHANGE","%CHANGE","VOLUME","AVG TOTAL VOLUME","OPEN","HIGH","LOW","CLOSE","DELAYED PRICE",
            // "PREVIOUSE CLOSE","52WKHI","52WKLO","YTDCHANGE","EXCHANGE","SECTOR"]
            selectedColumnArr:[],
            pannelHidden:true,
            compactView:true, 
            showSummary:false,    
        };
        this.handleColumnArrSetting = this.handleColumnArrSetting.bind(this);
        this.handleColumnArrSelect = this.handleColumnArrSelect.bind(this);
        this.handleClosePannel = this.handleClosePannel.bind(this);
        this.handleCompactView = this.handleCompactView.bind(this);
        this.handleShowSummary = this.handleShowSummary.bind(this);
    } 

    componentDidMount() {
        const { dispatch, selectedItem } = this.props;
        if(selectedItem !== ''){
            dispatch(fetchPost(selectedItem));
        }       
        this.setState({selectedColumnArr:getQuoteHead(this.state.columnArr)});
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.selectedItem !== this.props.selectedItem && nextProps.selectedItem !== ''){
            const { dispatch,selectedItem } = nextProps;
            dispatch(fetchPost(selectedItem));
            this.setState({selectedColumnArr:getQuoteHead(this.state.columnArr)});
        }
    }
    handleColumnArrSetting = () => {
        if(this.state.tempColumnArr.length !== 0){
            this.setState({selectedColumnArr:deepCopyArr(this.state.tempColumnArr),
                            tempColumnArr:[],
                            pannelHidden:true,
                        });
        }
        
    }
    handleColumnArrSelect = (e) => {
        this.setState({tempColumnArr:addItem(this.state.tempColumnArr,e.currentTarget.innerText)});
    }
    handleClosePannel = () => {
        this.setState({
            pannelHidden: !this.state.pannelHidden,
        });
        
    }
    handleCompactView = () => {
        this.setState({
            compactView:!this.state.compactView,
        });
    }
    handleShowSummary = () => {
        this.setState({
            showSummary:!this.state.showSummary,
        });
    }
    render(){
        const { selectedItem,stockQuote,stockNews,stockChart } = this.props;
        const columnArr = this.state.columnArr;
        const tempColumnArr = this.state.tempColumnArr;
        const selectedColumnArr = this.state.selectedColumnArr;
        const handleColumnArrSetting = this.handleColumnArrSetting;
        const handleColumnArrSelect = this.handleColumnArrSelect;
        const headColumnArr = this.state.headColumnArr;
        const handleClosePannel = this.handleClosePannel;
        const quoteHeadContent = getQuoteHeadContent(headColumnArr,stockQuote)
        const quoteBodyContent = getQuoteBodyContent(selectedColumnArr,columnArr,stockQuote);
        const availabelColumnArr = getQuoteHead(columnArr);
        var pannelClassName = classNames({
                                        'StockQuotePannel': true,
                                        'hidden': this.state.pannelHidden,});
        const handleCompactView = this.handleCompactView;
        const handleShowSummary = this.handleShowSummary;
        var newsClassName = classNames({
                                        'StockNews': true,
                                        'compactView': this.state.compactView,});  
        var newsRowClassName = classNames({
                                        'StockNewsRow': true,
                                        'showSummary': this.state.showSummary,});          

        
        return(
            <div>            
                <StockQuote 
                    quoteHeadContent={quoteHeadContent}
                    quoteBodyContent={quoteBodyContent}
                    handleClosePannel={handleClosePannel}
                    />
                <StockQuotePannel
                    availabelColumnArr = {availabelColumnArr} 
                    tempColumnArr = {tempColumnArr}
                    handleColumnArrSetting={handleColumnArrSetting}
                    handleColumnArrSelect={handleColumnArrSelect}
                    handleClosePannel={handleClosePannel}
                    className={pannelClassName}
                    />
                <StockNews 
                    stockNews={stockNews} 
                    newsClassName={newsClassName}
                    newsRowClassName={newsRowClassName} 
                    handleCompactView={handleCompactView}
                    handleShowSummary={handleShowSummary} />
                <StockTrend stockChart={stockChart}/>
            </div>
        );
    };
}

function getQuoteHeadContent(headColumnArr,data){
    var result = [];
    if(data.length === 0){
        return result;
    }
    for(var i=0;i<headColumnArr.length;i++){
        result.push(headColumnArr[i]);
    }
    for(var j=0;j<result.length;j++){
        result[j].columnData = data[result[j].variableName];
    }
    return result;
}

function getQuoteBodyContent(selectedColumnArr,columnArr,data){
    var result = [];
    if(data.length === 0){
        return result;
    }
    for(var i=0;i<selectedColumnArr.length;i++){
        for(var j=0;j<columnArr.length;j++){
            if(selectedColumnArr[i] === columnArr[j].columnTitle){
                var tempOb = {
                    columnTitle: columnArr[j].columnTitle,
                    variableName:columnArr[j].variableName,
                    columnData: data[columnArr[j].variableName],
                }
                result.push(tempOb);              
            }
        }
    }
    return result;
}
function getQuoteHead(columnArr){
    var result = [];
    for(var i=0;i<columnArr.length;i++){
        result.push(columnArr[i].columnTitle);
    }
    return result;
}
function deepCopyArr(arr){
    var result = [];
    for(var i=0;i<arr.length;i++){
        result.push(arr[i]);
    }
    return result;
}
function addItem(arr,item){
    var result = [];
    result = deepCopyArr(arr);
    result.push(item);
    return result;
}
const mapStateToProps = (state) => ({
    selectedItem: state.stockListReducer.selectedItem,
    stockQuote: state.stockDetailsReducer.stockDetailsData.quote,
    stockNews: state.stockDetailsReducer.stockDetailsData.news,
    stockChart: state.stockDetailsReducer.stockDetailsData.chart,
   
});

// const mapDispatchToProps = (dispatch) =>{
//     return {

//     }
// }
StockDetails.defaultProps = {
    stockQuote:[],
}
export default connect(
    mapStateToProps,
)(StockDetails);