import React,{PureComponent} from 'react';


class FooterComponent extends PureComponent{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <footer className="page-footer font-small blue pt-4">
                <div className="footer-copyright text-center py-1">©Copyright:
                </div>
                </footer>
            </div>
        )
    }
}

export default FooterComponent;