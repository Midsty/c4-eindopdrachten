import React from "react";

export default function Formulier(props) {
  return (
    <div>
      <h1>Dit is de form { props.name }</h1>
      <form>
        <label>
          Voornaam:
          <input type="text" />
        </label>
        <br></br>
        <label>
          Achternaam:
          <input type="text" />
        </label>
        <br></br>
        <label>
          Adres:
          <input type="text" />
        </label>
        <br></br>
        <label>
          Huisnummer:
          <input type="numbers" />
        </label>
        <br></br>
        <label>
          Postcode:
          <input type="text" />
        </label>
        <br></br>
        <label>
          Woonplaats:
          <input type="text" />
        </label>
        <br></br>
        <label>
          Emailadres:
          <input type="text" />
        </label>
        <button>klik hier</button>
      </form>
    </div>
  );
}
