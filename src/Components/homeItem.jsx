import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdAddCircle } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function HomeItem({ item }) {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

   const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="item_container">
      <img className="item_img" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company_name">{item.company}</div>
      <div className="item_name">{item.item_name}</div>
      <div className="price">
        <span className="current_price">₹{item.current_price}</span>
        <span className="original_price">₹{item.original_price}</span>
        <span className="discount">{item.discount_percentage}% OFF</span>
      </div>
      {elementFound ? (
        <button  type="button" className="btn btn-danger btn_add_bag" onClick={ handleRemove}>
          Remove <MdDelete />
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn_add_bag"
          onClick={handleAddToBag}
        >
          Add to Bag <MdAddCircle />
        </button>
      )}
    </div>
  );
}
