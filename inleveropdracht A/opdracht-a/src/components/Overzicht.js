import React, { useContext } from "react";
import '../Overzicht.css';
// import Table from "react-bootstrap/Table"; deze wilde we gebruiken maar kregen we niet aan de praat
import { FormContext } from "../routes/Persoon";
import { Placeholder } from "react-bootstrap";

export default function Overzicht() {

  const update = () => {
    //  data.last = "Anders"; dit was een test
    // console.log("Toch doen hé!"); dit was een test
  };

  const {data, setData} = useContext(FormContext);
  return (
    <div >
      {/* dit is de tabel waar de informatie inkomt */}
    <table className="center">
      <thead>
        <tr>
          <th>Voornaam:</th>
          <th>Achternaam:</th>
          <th>Adres:</th>
          <th>Huisnummer:</th>
          <th>Postcode:</th>
          <th>Woonplaats:</th>
          <th>Emailadres:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.first}</td>
          <td>{data.last}</td>
          <td>{data.address}</td>
          <td>{data.housenumber}</td>
          <td>{data.zipcode}</td>
          <td>{data.place}</td>
          <td>{data.email}</td>
        </tr>
      </tbody>
    </table>
    <button
      onClick={update}
    >
      klikken
    </button>
   </div> 
  );
}
