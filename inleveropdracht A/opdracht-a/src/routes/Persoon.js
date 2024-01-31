import React from "react";
import ReactDOM from "react-dom/client";

import Form from "../components/Formulier";
import Overzicht from "../components/Overzicht";

import { useState, createContext } from "react";

export const FormContext = createContext("FormContext");

export default function Persoon() {

    const data  = useState();
  return (
    <div>
        <FormContext.Provider  value={data}>
            <Form name="Danny"/>
             <Overzicht /> 
        </FormContext.Provider>
    </div>
  );

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Persoon />);
