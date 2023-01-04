import React from "react"

class Product1 extends React.Component{
    render(){
        return (
                <div className="product">
                  <img className="rounded" src={this.props.productImageUrl}/>
                  <div>
                    <strong><i class="fa-solid fa-caret-up text-success"></i> {this.props.id}</strong>
                    <div className="blue">{this.props.title}</div>
                    <div>{this.props.description}</div>
                    <div className="submit">Submitted by: <img className="profile rounded-circle" src={this.props.submitterAvatarUrl}></img></div>
                  </div>
                </div>
        );
    }
}

export default Product1;