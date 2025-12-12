import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

export default function FetchItems() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemsActions.addInitialItems(items));   // ✅ fixed typo
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished()); // ✅ loader stops
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted safely");
        } else {
          console.error("Fetch failed:", err);
          dispatch(fetchStatusActions.markFetchingFinished()); // ✅ stop loader even on error
        }
      });

    return () => {
      controller.abort(); // cleanup
    };
  }, [dispatch, fetchStatus.fetchDone]); // ✅ only re-run if fetchDone changes

  return null;
}