import React from 'react';
import Product from './Products';

class GroceryApp extends React.Component {
    constructor(props){
        super(props);
        this.state={ productItem: null
        }
    }
     UNSAFE_componentWillMount(){
         let productItem=
            [
                { name: "Cake", votes: 0 },
                { name: "Cupcake", votes: 0 },
                { name: "Muffins", votes: 0 },
                { name: "Pastry", votes: 0 },
                { name: "Choclate", votes: 0 },
                { name: "RedRose", votes: 0 },
            ]
        localStorage.setItem("productList",JSON.stringify(productItem))
     }
     componentDidMount(){
         let productItem=JSON.parse(localStorage.getItem("productList"))
          this.setState({productItem:productItem})
     }

    upVote(product){
    let productItem=this.state.productItem;
    productItem.map((data1)=>{
    if(product.name==data1.name){
         data1.votes=data1.votes+1;
    }
    })
    this.setState({productItem:productItem})
    }

    downVote(product){
        let productItem=this.state.productItem;
        productItem.map((data1)=>{
        if(product.name==data1.name && data1.votes>0){
             data1.votes=data1.votes-1;
        }
        })
        this.setState({productItem:productItem})
    }
 
   render() {
     return (
           <Product productItem ={this.state.productItem} upVote={(e)=>this.upVote(e)} downVote={(e)=>this.downVote(e)}/>
     );
   }
 }

 export default GroceryApp