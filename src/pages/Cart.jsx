import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="w-11/12 max-w-[1200px] mx-auto">
  {
    cart.length > 0  ? 
    (<div className="flex flex-between max-lg:flex-col">


      <div className="px-16 max-sm:px-0 w-[60%] max-lg:w-[100%]">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className=" py-16 flex flex-col justify-between max-lg:text-center">

        <div className="sticky top-10">
          <div className="text-green-800 font-extrabold text-xl">Your Cart</div>
          <div className="text-green-800 font-extrabold text-5xl">Summary</div>
          <p>
            <span className="font-extrabold text-xl text-gray-700">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="sticky bottom-10">
          <p className="text-gray-700 font-extrabold text-xl">Total Amount: <span className="text-black font-extrabold text-xl">${totalAmount}</span> </p>
          <button className="bg-green-700 text-white px-28 py-3 text-xl outline-none rounded-lg font-extrabold mt-4 hover:bg-green-800 transition-all duration-300">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className=" flex flex-col text-center h-[600px] justify-center">
      <h1 className="text-xl font-extrabold text-gray-700">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-700 text-white px-28 py-3 text-xl outline-none rounded-lg font-extrabold mt-4 hover:bg-green-800 transition-all duration-300">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
