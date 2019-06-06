import React from 'react';
import { Component } from 'react'
import './product.css';
class Product extends Component {
    constructor(props) {
        super(props);
    }

    renderProduct() {
        if (this.props.productList && this.props.productList.length) {
            return this.props.productList.map((data) => {
                return <div key={Math.random()} className="fullwidth">
                    <div className="div25">{data.name}</div>
                    <div className="div25">{data.votes}</div>
                    <div className="div25">
                        <button className="voteButton" onClick={() => this.props.upVote(data)}>Add</button>
                    </div>
                    <div className="div25">
                        <button className="voteButton" onClick={() => this.props.downVote(data)}>Subtract</button>
                    </div>
                </div>
            })
        }
    }

    render() {
        return (
            <div className="div50">
                <div className="fullwidth">
                    <div className="div25name">Name</div>
                    <div className="div25name">Votes</div>
                    <div className="div25name">Upvote</div>
                    <div className="div25name">Downvote</div>
                </div>
                {this.renderProduct()}
            </div>
        )
    }
}

export default Product;