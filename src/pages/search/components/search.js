import React,{PureComponent} from 'react';


class SearchComponent extends PureComponent{
    constructor(){
        super();
        this.state={
            searchData:null
        }
    }

    changeData(e){
        this.setState({
            searchData:e.target.value
        })
    }

    render(){
        const {productData} = this.props;
        return(
            <div className="seachFilter">
                <div class="example" >
                <input type="text" onChange = {(e)=>this.changeData(e)} placeholder="Search.." name="search" />
                <button onClick={()=>this.props.searchGetProduct(productData,this.state.searchData)} type="image"><i class="fa fa-search"></i></button>
                </div>
            </div>
        )
    }
}

export default SearchComponent;