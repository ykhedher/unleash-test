import { useState } from "react";
import Address from "./components/Address";
import "./App.css";
import noDataImage from "./assets/no_data_image.svg";
import { getData } from "./services";

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);


  return (
    <>      
      <div className="container">
        <label className="container__label">Enter Street Name:</label>
        <input
          className="container__input"
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          onKeyUp={(e) => {
            getData(e.target.value, setData);
          }}
          placeholder="Street Name"
        />
      </div>
      {data && (
        <div className="list-container">
          {data.map((item) => (
            <Address
              street={item.street}
              postNumber={item.postNumber}
              city={item.city}
            >
              {item.street}
            </Address>
          ))}
        </div>
      )}
      {text.length >= 3 && data.length === 0 && (
        <div className="not-found-container">
          <h1>
            Oops!! There's no street called <i>'{text}'</i>
          </h1>
          <div className="not-found-container__image">
            <img
              src={noDataImage}
              alt="Not data"
              width={"100%"}
              height={"auto"}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
