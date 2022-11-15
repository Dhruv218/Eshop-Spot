import { useState, useEffect } from "react";
// import {  Link } from "react-router-dom";
import Cart from "../images/cart.png"
import Tick from "../images/tick.jpg"
import {  Link } from "react-router-dom";

import '../main/main.css'

const Main = () => {

  const [data, setData] = useState([])
  const [amount, setAmount] = useState([''])
  const [cart, setCart] = useState([])
  
  const [link, setlink] = useState('https://fakestoreapi.com/products')



  const fetchData = () => {
    fetch(link)
      .then((res) => res.json())
      .then((result) => {
        setData(result)
        console.log(result);

      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    
    fetchData()

  }, [])

  function  handleChange(e)  {
const l='https://fakestoreapi.com/products/category/' + e
     setlink(l)
      
    fetchData();
  }
  useEffect(() => {
     
    fetchData()
  }, [link])


  return (
    <>

      <div className="filter">
        <div className=" fc-box">
          <select className="filter-category" value="category" onChange={(e) => { handleChange(e.target.value) }}>
            <option value='jewelery'>Category </option>
            <option value="men's clothing">men's clothing </option>
            <option value='jewelery'>jewelery </option>
            <option value='electronics'>electronics </option>
            <option value={"women's clothing"}>women's clothing </option>
          </select>
        </div>
        <div className="cart-box">
        <Link to={'/cart'} state={{ data: cart }}   > 
         <img className="cart" src={Cart} alt='images' />
         </Link>
           
        </div>
      </div>


      <table>
      <tbody>
        <tr className="t-h">
          <th className="heading">Image</th>
          <th className="heading">Name</th>
          <th className="heading">Category</th>
          <th className="heading">Stock</th>
          <th className="heading">Price</th>
          <th className="heading">Buy</th>
        </tr>
         
          {data.map(item => {

            return (
              <tr className="t-r">
                <td>  <img className="prod-img information" src={item.image} /></td>
                <td className="title">{item.title}</td>
                <td className="category">{item.category}</td>
                <td className="in-stock"><img src={Tick} />In stock</td>
                <td className="price"> ${item.price}</td>
                <td className="buy">
                  <input type='text' defaultValue={1} onChange={e => {
                    console.log(amount);
                    
                    setAmount( e.target.value)
                    console.log(amount);}} />
                  <img src={Cart} onClick={() => {
                    setAmount('');
                    setCart([
                      ...cart,
                      {
                        detail: item,
                        no: amount
                      }
                    ]);
                    console.log(cart);
                  }} />
                </td>
              </tr>
            )
          }
          )}
        </tbody>
      </table>
    </>
  );




}
export default Main;