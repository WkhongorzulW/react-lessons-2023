import product1 from './products/image-yellow.png';

function ProductFunc(){
    return(
        <div className="product">
                  <img className="rounded" src={product1}/>
                  <div>
                    <strong><i class="fa-solid fa-caret-up text-success"></i> 55</strong>
                    <div className="blue">Haught or Naught</div>
                    <div>High-minded or absent-minded? You decide.</div>
                    <div className="submit">Submitted by: <img className="profile rounded-circle" src="avatars/stevie.jpg"></img></div>
                  </div>
                </div>
    )
}

export default ProductFunc;