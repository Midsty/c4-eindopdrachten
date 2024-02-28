import React, { useState, useContext } from "react";
import { FormContext } from "../routes/Persoon";

export default function Formulier(props) {
  const { data, setData } = useContext(FormContext);

  return (
    <div>
      <h1>Inleveropdracht {props.name}</h1>
      <form>      
        {/* dit is het formulier */}
        <label>
          Voornaam:
          <input
            type="text"
            value={data.first}
            onChange={(e) => {
              setData({ ...data, first: e.target.value });
            }}
          />
        </label>
        <br></br>
        <label>
          Achternaam:
          <input
            type="text"
            value={data.last}
            onChange={(e) => {
              setData({ ...data, last: e.target.value });
            }}
          />
        </label>
        <br></br>
        <label>
          Adres:
          <input
            type="text"
            value={data.address}
            onChange={(e) => {
              setData({ ...data, address: e.target.value });
            }}
          />
        </label>
        <br></br>
        <label>
          Huisnummer:
          <input
            type="text"
            value={data.housenumber}
            onChange={(e) => {
              setData({ ...data, housenumber: e.target.value });
            }}
          />
        </label>
        <br></br>
        <label>
          Postcode:
          <input
            type="text"
            value={data.zipcode}
            onChange={(e) => {
              setData({ ...data, zipcode: e.target.value });
            }}
          />
        </label>
        <br></br>
        <label>
          Woonplaats:
          <input
            type="text"
            value={data.place}
            onChange={(e) => {
              setData({ ...data, place: e.target.value });
            }}
          />
        </label>
        <br></br>
        <label>
          Emailadres:
          <input
            type="text"
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
        </label>
        <br></br>
      </form>
    </div>
  );
}
