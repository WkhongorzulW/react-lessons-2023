import product3 from './products/image-steel.png';

function ProductFunc3(){
    return(
        <div className="product">
                <img className="rounded" src={product3}/>
                <div>
                <strong><i class="fa-solid fa-caret-up text-success"></i> 42</strong>
                <div className="blue">Tinfoild: Tailored tinfoil hats</div>
                <div>We already have your measurements and shipping address.</div>
                <div className="submit">Submitted by: <img className="profile rounded-circle" src="avatars/molly.png"/></div>
                </div>
            </div>
    )
}

export default ProductFunc3;