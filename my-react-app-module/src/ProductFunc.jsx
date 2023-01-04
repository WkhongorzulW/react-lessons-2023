function ProductFunc(props) {
  return (
    <div className="product">
      <img className="rounded" src={props.productImageUrl} />
      <div>
        <strong><i class="fa-solid fa-caret-up text-success"></i> {props.id}</strong>

        <div className="blue">{props.title}</div>

        <div>{props.description}</div>

        <div className="submit">Submitted by: <img className="profile rounded-circle" src={props.submitterAvatarUrl}></img></div>

      </div>
    </div>
  )
}

export default ProductFunc;