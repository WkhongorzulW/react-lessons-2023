import React from "react";
function handleUpVote(props) {
  console.log(("upvoted"));
  console.log(props.id)
};
function Product1(props) {
  return (
    <div className="product">
      <img className="rounded" src={props.productImageUrl} />
      <div>
        <a onClick={() => {handleUpVote(props)}}>
          <i class="fa-solid fa-caret-up text-success"></i>{props.id}</a>
        <div className="blue">{props.title}</div>
        <div>{props.description}</div>
        <div className="submit">Submitted by: <img className="profile rounded-circle" src={props.submitterAvatarUrl}></img></div>
      </div>
    </div>
  );
}

export default Product1;