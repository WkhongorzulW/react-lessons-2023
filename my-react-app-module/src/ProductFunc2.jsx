import product2 from './products/image-aqua.png';

function ProductFunc2(){
    return (
        <div className="product">
          <img className="rounded" src={product2}/>
          <div>
            <strong><i class="fa-solid fa-caret-up text-success"></i> 44</strong>
            <div className="blue">Yellow Pail</div>
            <div>One-demand scand castle construction experyise.</div>
            <div className="submit">Submitted by: <img className="profile rounded-circle" src="avatars/matthew.png"/></div>
          </div>
        </div>
    )
}

export default ProductFunc2;