import React, { useState } from "react";
import Time from "../components/Time";

export default function Prices({ prices, date }) {
  const [state, setState] = useState("USD");

  const handleChange = (evt) => {
    setState(evt.target.value);
  };

  console.log(state);
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Forex</label>
          <select
            onChange={handleChange}
            className="form-control"
            id="exampleFormControlSelect1"
          >
            {/*TODO: Generate this list dynamically using an array*/}
            <option>USD</option>
            <option>GBP</option>
            <option>JPY</option>
          </select>
        </div>
      </form>

      <ul class="list-group">
        {/*{JSON.stringify(prices)}*/}
        <li class="list-group-item">
          Base: EUR | <span className="badge badge-primary">{state}</span> |
          Rate: {prices[state]} | Date: {date}
        </li>
      </ul>
    </div>
  );
}
