import React, { useState } from "react";

export default function Prices({ prices }) {
  const [state, setState] = useState("USD");

  return (
    <div>
      <ul className="list-group">
        <li className="list-item">{prices.bpi.USD.code}</li>
        <li className="list-item"></li>
      </ul>
    </div>
  );
}
