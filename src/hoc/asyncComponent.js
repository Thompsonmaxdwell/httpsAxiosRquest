import React, { Component } from 'react';

const asynComponent = importComponet =>{

   return class  extends Component {
        state = { component: null }

      componentDidMount (){
        importComponet()
        .then(cmp =>{
            this.setState({component : cmp.default})
        })
      }
      
        render() { 
            let MyComp = this.state.component
            return MyComp ? <MyComp {...this.props} /> : null
        }
    }
     
}
 
export default asynComponent;