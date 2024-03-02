
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div>

      <div className="flex  items-center justify-between gap-14">

        <div className="h-[330px] min-w-[30%]">
          <img src={item.image} alt="item" className="h-full w-full object-contain"/>
        </div>
        <div className="space-y-5">
          <h1 className="text-gray-900 font-extrabold text-xl text-left mt-1">{item.title}</h1>
          <h1 className="text-gray-700 ">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
          <div className="flex justify-between">
            <p className="text-green-600 font-semibold text-xl">${item.price}</p>
            <div
               onClick={removeFromCart} className="w-[40px] h-[40px] rounded-full bg-red-200 relative mr-10 cursor-pointer hover:bg-red-300 transition-all duration-300">
              <MdDelete style={{color:'#da003d',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}/>
            </div>  
          </div>

        </div>


      </div>
      <div className="w-full h-[2px] bg-gray-500"></div>

    </div>
  );
};

export default CartItem;
