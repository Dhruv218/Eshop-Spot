import Gif from '../images/excited.gif'
import '../success/success.css'
import Tick from '../images/tickgif.gif'
import Header from '../header/header';
import { useLocation, Link } from "react-router-dom";

const Success = () => {
    return (
        <>
            <Header />



            <div className='tick-box'>
                <div className='success-tick'>
                    <img src={Tick} />
                    <h1>
                        Your order has been receive
                    </h1>
                </div>
            </div>


            <div className='success'>
                <h1>
                    Thankyou For Ordering
                </h1>
            </div>
            <br />

            <div className='success'>
                <div>
                    <img className='excited' src={Gif} />
                </div>
            </div>
            <br />
            <br />
            <div className="home">
                <Link to='/Eshop-Spot' className="backtohome" >
                    Return To Home Page
                </Link>
            </div>
        </>
    );
}
export default Success;