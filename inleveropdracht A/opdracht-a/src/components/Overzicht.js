import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { FormContext } from "../routes/Persoon";

export default function Overzicht() {
    const user = useContext(FormContext);
  return (
    <div>
      <h1>Ik ben overzicht</h1>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
}
