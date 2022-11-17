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
  const [search, setSearch] = useState('')
   
  const [searchitem, setSearchitem] = useState('')
  
  const [link, setlink] = useState('https://fakestoreapi.com/products')



  const fetchData = () => {
    fetch(link)
      .then((res) => res.json())
      .then((result) => {
        setData(result)
         

      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    
    fetchData()

  }, [])

   
function handlesearch(){
  
 setSearchitem( data.find(st => (st.title === search)))
     
  console.log(searchitem);
  }


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
 <div className="search-input">
          <input type='text'   placeholder='Search'  onChange={e => {
                    setSearch(e.target.value);
          }}
                    
                    />
                    <button type="submit" onClick={handlesearch} >search </button>
                    </div>
        </div>
        <div className="cart-box">
        <Link to={'/cart'} state={{ data: cart }}   > 
         <img className="cart" src={Cart} alt='images' />
         </Link>
           
        </div>
      </div>
      {searchitem===''?null
        :
        <div className="search-box"> 
          <h1> Searched Item</h1>
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

        <tr className="t-r"  >
                <td>  <img className="prod-img information" src={searchitem.image} /></td>
                <td className="title">{searchitem.title}</td>
                <td className="category">{searchitem.category}</td>
                <td className="in-stock"><img src={Tick} />In stock</td>
                <td className="price"> ${searchitem.price}</td>
                <td className="buy">
                  <input type='number'min={0} defaultValue={1} onChange={e => {
                     
                    setAmount( e.target.value)
                   }} />
                  <img src={Cart} onClick={() => {
                    setAmount('');
                    setCart([
                      ...cart,
                      {
                        detail: searchitem,
                        no: amount
                      }
                    ]);
                    ;
                  }} />
                </td>
              </tr>
               
      </tbody>
      </table>
              </div>
        }
{searchitem===''?
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
              <tr className="t-r" key={item.id}>
                <td>  <img className="prod-img information" src={item.image} /></td>
                <td className="title">{item.title}</td>
                <td className="category">{item.category}</td>
                <td className="in-stock"><img src={Tick} />In stock</td>
                <td className="price"> ${item.price}</td>
                <td className="buy">
                  <input type='number' min={0} defaultValue={1} onChange={e => {
                     
                    setAmount( e.target.value)
                   }} />
                  <img src={Cart} onClick={() => {
                    setAmount('');
                    setCart([
                      ...cart,
                      {
                        detail: item,
                        no: amount
                      }
                    ]);
                    ;
                  }} />
                </td>
              </tr>
            )
          }
          )}
        </tbody>
      </table>
   :null}
    </>
  );




}
export default Main;