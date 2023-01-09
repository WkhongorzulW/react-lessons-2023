import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import products from "./Seed";
import ProductFunc from "./ProductFunc";
import Product1 from "./Product1";


function App() {

  // const productList = products.map((product)=> {
  //   return <ProductFunc 
  //   title={product.title} 
  //   id={product.id} 
  //   description={product.description} 
  //   url={product.url} 
  //   votes={product.votes} 
  //   submitterAvatarUrl={product.submitterAvatarUrl} productImageUrl={product.productImageUrl} />
  // })

  const productList2 = products.map((product)=> {
    return <Product1 
    title={product.title} 
    id={product.id} 
    description={product.description} 
    url={product.url} 
    votes={product.votes} 
    submitterAvatarUrl={product.submitterAvatarUrl} productImageUrl={product.productImageUrl} />
  }) 

  return (
    <div className="App container rounded border-2">
      <header className="App-header">
        <h1>Popular Products</h1>
        <hr/>
          {/* {productList} */}
          {productList2}
      </header>
    </div>       
  );
}

export default App;