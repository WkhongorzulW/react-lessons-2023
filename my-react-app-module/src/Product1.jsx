import React from "react";
import { useState } from "react";
import products from "./Seed";
import { Rating } from "react-simple-star-rating";

function Product1(props) {

  function handleUpVote(props) {
    
  };
  function handleDownVote(props) {
   
  };
  return (
    <div className="product">
      <img className="rounded" src={props.productImageUrl} />

      <div>
        <button className="border-0 bg-white" onClick={() => props.onVote(props.id)}><i class="fa-solid fa-caret-up text-success"></i></button>

        <button className="border-0 bg-white" onClick={() => { handleDownVote(props) }}><i class="fa-solid fa-caret-down text-danger ms-2"></i></button>

        <a>{props.votes}</a>

        <div className="blue">{props.title}</div>

        <div>{props.description}</div>

        <div className="submit">Submitted by: <img className="profile rounded-circle" src={props.submitterAvatarUrl}></img></div>

        <Rating
          initialValue={props.stars} />

      </div>

    </div>
  );
}

export default Product1;