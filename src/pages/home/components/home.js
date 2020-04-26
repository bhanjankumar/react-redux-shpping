import React,{PureComponent} from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import SortComponent from '../../sort/sort-container';

class HomeComponent extends PureComponent{
    constructor(){
        super();
        this.state={
            products:null,
            value: { min: 4000, max: 90000 },
        }
        
    }

    componentDidMount(){
        this.props.getProducts();
    }

   
    

    render(){
        const {productData} = this.props;
        return(
            <div className="content">
  		<div className="container">
  			<div className="row">
  				<div className="col-md-3">
  					<div className="control-box p-3 filter">
  						<h2>Filter</h2>
                          <InputRange
                            maxValue={90000}
                            minValue={4000}
                            value={this.state.value}
                            onChange={value => this.setState({ value })} />
                            <div className="applyBtn">
                                <button onClick={()=>this.props.applyFilter(productData,this.state.value)}>Apply</button>
                            </div>
  					</div>
  				</div>
  				<div className="col-md-9">
                      <SortComponent />
                    <div className="container-fluid">
                    <div className="row">
                    {productData && productData.map((data, index) => (
                      <div className="col-md-3 col-sm-6 col-6" key={index}>
                          <div className="products">
                            <img src={data.image} />
                            <div className="title">{data.name}</div>
                            <div><span className="actual">{data.price.actual}</span> <span className="display"><del>{data.price.display}</del></span><span className="discount">{data.discount}% off</span></div>
                            <button onClick={()=>this.props.addCard(data)}>Add To Cart</button>
                          </div>
                      </div>
                    ))}
                    </div>
                    </div>
  				</div>
  			</div>
  		</div>
  	</div>
        )
    }
}

export default HomeComponent;