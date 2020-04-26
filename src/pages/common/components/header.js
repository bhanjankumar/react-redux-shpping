import React,{PureComponent} from 'react';
import SearchComponent from '../../search/search-container';
import CartComponent from '../../cart/cart-container';


class HeaderComponent extends PureComponent{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
            <header>
            <nav className="navbar-dark">
                <div className="searchElement">
                    <SearchComponent />
                    <CartComponent/>
                </div>
            </nav>

            </header>
            </div>
        )
    }
}

export default HeaderComponent;