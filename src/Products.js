import React from 'react';
import { Component } from 'react'
import './Product.css';
class Product extends Component {
    constructor(props) {
        super(props);
    }

    renderProduct() {
        if (this.props.productItem && this.props.productItem.length) {
            return this.props.productItem.map((data) => {
                return <div class="fullwidth">
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
            <div class="div50">
                <div class="fullwidth">
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