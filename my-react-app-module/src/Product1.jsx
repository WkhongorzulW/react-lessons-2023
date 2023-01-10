import React from "react";
import { useState } from "react";
import products from "./Seed";
import { Rating } from "react-simple-star-rating";

function Product1(props) {

  const [votes, setVotes] = useState(props.votes);
  const [votesDown, setVotesDown] = useState(props.votes);
  const [stars, setStars] = useState(props.stars);
  const [starsDown, setStarsDown] = useState(props.stars);

  function handleUpVote(props) {
    setVotes(votes + 1);
    setStars(stars + 1);

    if (stars > 5) {
      setStars(0)
    } else {
      setStars(stars + 1)
    }
    // console.log(props.id);
    // let newProducts = [];
    // const foundProduct = products.map(product => {
    //   if (product.id == props.id) {
    //     product.votes = product.votes + 1;
    //   }
    //   return product;
    // })
    // console.log(foundProduct)
  };
  function handleDownVote(props) {
    setVotesDown(votes - 1);
    setStarsDown(starsDown - 1);
  }

  return (
    <div className="product">
      <img className="rounded" src={props.productImageUrl} />
      <div>
        <button className="border-0 bg-white" onClick={() => { handleUpVote(props) }}><i class="fa-solid fa-caret-up text-success"></i></button>
        <button className="border-0 bg-white" onClick={() => { handleDownVote(props) }}><i class="fa-solid fa-caret-down text-danger ms-2"></i></button>
        <a>{votesDown}</a>
        <div className="blue">{props.title}</div>
        <div>{props.description}</div>
        <div className="submit">Submitted by: <img className="profile rounded-circle" src={props.submitterAvatarUrl}></img></div>
        <Rating
          initialValue={starsDown} />
      </div>
    </div>
  );
}

export default Product1;