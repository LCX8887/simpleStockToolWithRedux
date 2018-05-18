import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilterBar from '../components/FilterBar';
import StockTable from '../components/StockTable';
import { selectItem,setVisibleFilter,fetchPost } from '../flow/actions';

class StockList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          columnArr:[{columnTitle: "COMPANY NAME",variableName:"companyName"},
                    {columnTitle:"SYMBOL",variableName:"symbol"},{columnTitle:"SECTOR",variableName:"sector"},
                    {columnTitle:"CHANGE",variableName:"change"},{columnTitle:"CHANGE PERCENT",variableName:"changePercent"},
                    {columnTitle:"AVG VOLUME",variableName:"avgTotalVolume"}]      
        };
    } 

    componentDidMount() {
        const { dispatch, selectedFilter } = this.props;
        dispatch(fetchPost(selectedFilter));
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.selectedFilter !== this.props.selectedFilter){
            const { dispatch,selectedFilter } = nextProps;
            dispatch(fetchPost(selectedFilter));
        }
    }
    onSelectItem = e =>{
        const { dispatch } = this.props;
        e.preventDefault();
        dispatch(selectItem(e.currentTarget.id));
    }

    onSetVisibleFilter = e =>{
        const { dispatch,selectedFilter } = this.props;
        e.preventDefault();        
        dispatch(setVisibleFilter(e.target.value));
           
    }

    render(){
        const { lastUpdated,
                selectedFilter,
                stockListData,
                filterOptions,
               } = this.props;
        const onSelectItem = this.onSelectItem;
        const onSetVisibleFilter = this.onSetVisibleFilter;
        const columnArr = this.state.columnArr;
        const currentTime = new Date(lastUpdated).toLocaleTimeString();
        const tableHead = getTableHead(columnArr);
        const stockListDataViaColumn = getStockListData(stockListData,columnArr);

        return(
            <div>
                <FilterBar 
                    selectedFilter={selectedFilter} 
                    filterOptions={filterOptions}
                    onSetVisibleFilter={onSetVisibleFilter}
                />
                <StockTable
                    currentTime={currentTime} 
                    stockListData={stockListDataViaColumn} 
                    onSelectItem={onSelectItem}
                    tableHead={tableHead}
                />
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    lastUpdated:state.stockListReducer.lastUpdated,
    selectedFilter: state.stockListReducer.selectedFilter,
    stockListData:state.stockListReducer.stockListData,
    filterOptions:state.stockListReducer.filterOptions,
});


StockList.propTypes = {
    lastUpdated:PropTypes.number,
    selectedFilter:PropTypes.string,
    stockListData:PropTypes.array,
    filterOptions:PropTypes.array,
};

function getTableHead(columnArr){
    var result = ['NO'];
    for(var i=0;i<columnArr.length;i++){
        result.push(columnArr[i].columnTitle);
    }
    return result;
}

function getStockListData(dataArr,columnArr){
    var result = [];    
    for(var i=0;i<dataArr.length;i++){
        var item = [i+1];
        for(var j=0;j<columnArr.length;j++){
            item.push(dataArr[i][columnArr[j].variableName]);
        }
        result.push(item);
    }
    return result;
}
export default connect(
    mapStateToProps,
)(StockList);