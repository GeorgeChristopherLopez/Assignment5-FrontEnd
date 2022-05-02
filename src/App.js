import './App.css';
import React from 'react';

function App() {
  const [users, setUsers] = React.useState([])
  const [user, setUser] = React.useState(null)
  const [products, setProducts] = React.useState([])
  const [product, setProduct] = React.useState(null)
  
  const getUsers = ()=>{
    fetch('/users').then((res)=> res.json().then((data)=> setUsers(data)))
    setUser(null)
    setProducts([])
    setProduct(null)
  }

  const getUserById = () => {
    fetch('/users/1').then((res)=> res.json().then((data)=> setUser(data)))
    setUsers([])
    setProducts([])
    setProduct(null)
  }

  const getUserProducts = () => {
    fetch('/users/1/products').then((res)=> res.json().then((data)=> setProducts(data)))
    setUsers([])
    setUser(null)
    setProduct(null)
  }

  const getUserProduct = () => {
    fetch('/users/1/products/1').then((res)=> res.json().then((data)=> setProduct(data)))
    setUsers([])
    setUser(null)
    setProducts([])
  }

console.log(user)

  return (
    <div className="App">
    <div>
    <span>GET</span>
    <span>/users</span>
    <button id="getUsers" onClick={getUsers}>Send</button>
</div>

<div>
    <span>GET</span>
    <span>/users/1</span>
    <button id="getUserById" onClick={getUserById}>Send</button>
</div>

<div>
    <span>GET</span>
    <span>/users/1/products</span>
    <button id="getUsersProducts" onClick={getUserProducts}>Send</button>
</div>

<div>
    <span>GET</span>
    <span>/users/1/products/1</span>
    <button id="getProductById" onClick={getUserProduct}>Send</button>
</div>

<div>
    <h2>Result</h2>
    <div>
{
  users.length > 0 ? <React.Fragment>
  <h2>users</h2>
   {users.map((el)=> {
     console.log(el)
     return<div>
     {el.firstname} {el.lastname} {el.email} products: {el.products.map((p)=> <span>{p.name} </span> )}
     </div>
   })}
  </React.Fragment> : null
}


{
  user !== null ? <React.Fragment>
    <h2>User</h2>
   {user.firstname}  {user.lastname} {user.email} products:  {user.products.map((p)=> <span>{p.name} </span> )}
  </React.Fragment> : null

}

{
  products.length > 0 ? <React.Fragment>
  <h2>Products</h2>
   {products.map((p)=><span> {p.name} </span>)}
  </React.Fragment> : null
}

{
  product !== null ? <React.Fragment>
  <h2>Product</h2>
  {product.name}
  
  </React.Fragment> : null
}
    </div>
</div>
    </div>
  );
}

export default App;
