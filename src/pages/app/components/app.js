import React,{PureComponent} from 'react';
import Header from '../../common/components/header';
import Footer from '../../common/components/footer'


class AppComponent extends PureComponent{

    render(){
        return(
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default AppComponent;