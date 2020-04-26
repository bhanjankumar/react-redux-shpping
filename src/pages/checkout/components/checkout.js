import React,{PureComponent} from 'react';


class CheckoutComponent extends PureComponent{
    constructor(){
        super();
        this.sate={
            
        }
    }
    increase = (e,refData) => {
        this.refs[refData].value++;
    }
    decrease = (e,refData) => {
        this.refs[refData].value--;
    }
    getRightPriceDetail = () => {
        const {addedCartData} = this.props;
        let totalDisplay  = addedCartData ? addedCartData.reduce((x,y)=>parseFloat(x)+parseFloat(y.price.display),0):null;
        let totalPriceactual  = addedCartData ? addedCartData.reduce((x,y)=>parseFloat(x)+parseFloat(y.price.actual),0):null;
        let totalDiscount = totalDisplay - totalPriceactual;
        let totProd = addedCartData ? addedCartData.length:0;
        return(
            <div>
                 <h2>Price details</h2>
                    <div>Price ({totProd} item): {totalDisplay}</div>
                    <div>Discount: {totalDiscount}</div>
                    <div>Total: {totalPriceactual}</div>
            </div>
        )
    }
  

    render(){
        const {addedCartData} = this.props;
        return(
            <div className="checkoutPage">
                <div className="container">
  			        <div className="row">
  				        <div className="col-md-9">
                          {addedCartData && addedCartData.map((data, index) => (
                          <div className="row">
                          <div className="col-md-5">
                             <div className="cartimg">
                                <img src={data.image} />
                                <div className="dataDesc">
                                    <span >{data.name}</span><br/>
                                    <span >{data.price.actual}</span>
                                </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                              <div className="counter">
                                <span className="roundbtn" onClick={(e)=>this.decrease(this,'cartVal_'+index)}>-</span>
                                <input type="text" ref={'cartVal_'+index} value="1"  />
                                <span className="roundbtn" onClick={(e)=>this.increase(this,'cartVal_'+index)}>+</span>
                              </div>
                           </div>
                          <div className="col-md-2">
                          <div className="counter">
                              <span onClick={()=>this.props.removeCart(addedCartData,data.id)}>Remove</span>
                              </div>
                              </div>
                          </div>
                          ))}
                       </div>
                       <div className="col-md-3">
                           {this.getRightPriceDetail()}
                             
                        </div>
                    </div>
                   
                </div>
  			        
            </div>
        )
    }
}

export default CheckoutComponent;