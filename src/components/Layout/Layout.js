import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Cssclasses from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';


class Layout extends Component {

    state ={
        showSideDrawer : false
    }

    closeSideDrawer = () =>{
        this.setState({showSideDrawer :true})
    }

    render(){
        return(
            <Aux>
                <Toolbar/>
                <Sidedrawer open ={this.state.showSideDrawer} closed ={this.closeSideDrawer}/>
                <main className  = {Cssclasses.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;