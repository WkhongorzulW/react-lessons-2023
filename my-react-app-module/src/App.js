import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import products from "./Seed";
import ProductFunc from "./ProductFunc";
import Product1 from "./Product1";
import { useState } from "react";


function App() {

  const [productList, setProductList] = useState(products);

  function handleProductUpVote(productId) {
    // console.log("upvoted", productId)
    // const foundProduct = products.filter(product => {
    //   if(product.id == productId){
    //     return product;
    //   }
    // })
    // console.log(foundProduct[0].votes);
    // foundProduct[0].votes = foundProduct[0].votes + 1;

    //change votes in array
    const newProducts = productList.map((product) => {

      if (product.id == productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1
        })
      } else {
        return product;
      }
    })

    console.log(newProducts);

    setProductList(newProducts);
  };



  const productComponents = productList.map(product => {
    return <Product1
      title={product.title}
      id={product.id}
      description={product.description}
      url={product.url}
      votes={product.votes}
      submitterAvatarUrl={product.submitterAvatarUrl} productImageUrl={product.productImageUrl}
      stars={product.stars}
      onVote={handleProductUpVote} />
  })

  return (
    <div className="App container rounded border-2">
      <header className="App-header">
        <h1>Popular Products</h1>
        <hr />
        {productComponents}
      </header>
    </div>
  );
}

export default App;