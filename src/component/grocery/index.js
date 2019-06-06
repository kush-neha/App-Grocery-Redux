import React from 'react';
import Product from '../product';
import { store } from '../../store';
import {addVote,removeVote} from '../../action';


class GroceryApp extends React.Component {
    constructor(props){
        super(props);
    }

    upVote(product){
    store.dispatch(addVote(product))
    }

    downVote(product){
    store.dispatch(removeVote(product))

    }
 
   render() {
    console.log("nskn")

     return (
           <Product productList ={this.props.productList} upVote={(e)=>this.upVote(e)} downVote={(e)=>this.downVote(e)}/>
     );
   }
 }

 export default GroceryApp