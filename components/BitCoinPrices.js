import React, { useState } from "react";
import Time from "../components/Time";

export default function Prices({ prices }) {
  const [state, setState] = useState("USD");

  const handleChange = (evt) => {
    setState(evt.target.value);
  };

  console.log(state);
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Bit Coin Prices</label>
          <select
            onChange={handleChange}
            className="form-control"
            id="exampleFormControlSelect1"
          >
            {/*TODO: Generate this list dynamically using an array*/}
            <option>USD</option>
            <option>GBP</option>
            <option>EUR</option>
          </select>
        </div>
      </form>

      <ul class="list-group">
        {/*{JSON.stringify(prices)}*/}
        <li class="list-group-item">
          Base: Bitcoin | {prices.bpi[state].description}{" "}
          <span className="badge badge-primary">{prices.bpi[state].code}</span>{" "}
          | Rate: {prices.bpi[state].rate} |{" "}
          <Time timeUpdated={prices.time.updated} />
        </li>
      </ul>
    </div>
  );
}
