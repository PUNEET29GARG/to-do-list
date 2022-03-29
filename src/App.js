import { useState } from "react";
import "./styles.css";

export default function App() {
  const [listItem, setListItem] = useState("");
  const [item, setItem] = useState([]);
  console.log("app.js");
  function Addtolist() {
    setItem([...item, listItem]);
    setListItem("");
    //console.log(item);
  }
  function Delete(i) {
    const restItem = item.filter((current) => {
      return i !== current;
    });
    setItem(restItem);
    console.log(item);
  }
  return (
    <div className="App">
      <h1>TO-DO-LIST</h1>
      <input
        value={listItem}
        placeholder="Add to list"
        onChange={(e) => {
          setListItem(e.target.value);
        }}
      />
      <button
        onClick={() => {
          Addtolist();
        }}
      >
        ADD
      </button>
      <br />
      <div>
        {item.map((i, j) => {
          return (
            <>
              <div key={j}>{i}</div>
              <br />
              <button
                onClick={() => {
                  console.log(i);
                  Delete(i);
                }}
              >
                Delete
              </button>
            </>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}
