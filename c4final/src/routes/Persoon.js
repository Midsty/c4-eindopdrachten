import React from "react";
import ReactDOM from "react-dom/client";

import Form from "../components/Formulier";
import Overzicht from "../components/Overzicht";

import { useState, createContext } from "react";

export const FormContext = createContext("FormContext");
//  een component met daarin values
const user = {
  first: "",
  last: "",
  address: "",
  housenumber: "",
  zipcode: "",
  place: "",
  email: "",
};

export default function Persoon() {
  const [data, setData] = useState(user);

  return (
    <div>
      {/* deze set data zodat we hem later kunnen ophalen */}
      <FormContext.Provider value={{ data, setData }}>
        {/* laat de 2 componenten zien op scherm */}
        <Form name="A" />
        <Overzicht />
      </FormContext.Provider>
    </div>
  );
}
