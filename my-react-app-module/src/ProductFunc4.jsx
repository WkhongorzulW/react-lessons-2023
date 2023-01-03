import product4 from './products/image-rose.png';

function ProductFunc4(){
    return (
        <div className="product">
            <img className="rounded" src={product4}/>
            <div>
            <strong><i class="fa-solid fa-caret-up text-success"></i> 23</strong>
            <div className="blue">Spuperamjoritory: The Fantacy Congress League</div>
            <div>Earn points when your favorite poliiticians pass ligeslation.</div>
            <div className="submit">Submitted by: <img className="profile rounded-circle" src="avatars/jenny.jpg"/></div>
            </div>
      </div>
    )
}

export default ProductFunc4;