import BagSummary from "../Components/BagSummary";
import BagItem from "../Components/BagItem";
import {useSelector} from "react-redux";

export default function Bag() {
   
   const bagItems = useSelector(state => state.bag);
   const items = useSelector(state => state.items);
   const finalItems = items.filter(item => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
   })
  return (
    <div>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map(item => <BagItem item = {item}/>)}
            </div>
            <BagSummary/>
        </div>
      </main>
        </div>
      
  );
}
