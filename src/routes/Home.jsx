import { useSelector } from "react-redux";
import HomeItem from "../Components/homeItem"; 

export default function Home() {
 const items = useSelector((store )=> store.items);
 console.log("Items in Redux store:", items);

  return (
    <>
      <main>
        <div className="items_container">
          {items.map(item =>  <HomeItem key = {item.id}item={item} />)}
        </div>
      </main>
    </>
  );
}
