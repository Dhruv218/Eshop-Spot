
import { useLocation, Link } from "react-router-dom";
import '../cart/cart.css'
import Header from "../header/header";
import { useState } from "react";
const Cart = (props) => {
  const location = useLocation();

  let data = location.state.data;

  const [totalamount, setTotal] = useState()


  return (

    <>
      <Header />
      <div className="container">
        <div>


          <table>
            <tbody>
              <tr className="t-h">
                <th className="heading">Image</th>
                <th className="heading">Name</th>
                <th className="heading">Category</th>
                <th className="heading"> Quantity</th>
                <th className="heading">Price</th>

              </tr>

              {data.map(item => {
                console.log(item);

                return (
                  <tr className="t-r">
                    <td>  <img className="prod-img information" src={item.detail.image} /></td>
                    <td className="title">{item.detail.title}</td>
                    <td className="category">{item.detail.category}</td>
                    {item.no === '' || item.no[0] === '' ? <td className="quantity"> {item.no = 1}</td> : <td className="quantity">{item.no}</td>}
                    <td className="price"> ${item.detail.price}</td>



                  </tr>
                )
              }
              )}
            </tbody>
          </table>

        </div>
        <div className="cart-total">
          <h1>
            Cart Total
          </h1>
          <div className="total">
            <h5> subtotal </h5>
            <h5>
              {"$" + data.reduce((total, item) => total + (item.detail.price * item.no), 0).toFixed(2)}
            </h5>
          </div>
          <div className="total">
            <h3> Total </h3>
            <h3>
              {"$" + data.reduce((total, item) => total + (item.detail.price * item.no), 0).toFixed(2)}
            </h3>
          </div>
          <div>
            <Link to='/success' >
              <button className="Checkout">PROCEED TO CHECKOUT</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="home">
        <Link to='/Eshop-Spot' className="backtohome" >
          Return To Home Page
        </Link>
      </div>
    </>
  )

}
export default Cart;