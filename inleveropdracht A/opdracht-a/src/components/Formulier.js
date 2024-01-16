import React from 'react';
import ReactDOM from 'react-dom/client';
import Table from 'react-bootstrap/Table';

export default function Formulier() {
    return (
        <div>
        <h1>Dit is de form</h1>
        <form>
        <label>Voornaam:
            <input type="text" />
        </label>
        <br></br>
        <label>Achternaam:
            <input type="text" />
        </label>
        <br></br>
        <label>Adres:
            <input type="text" />
        </label>
        <br></br>
        <label>Huisnummer:
            <input type="numbers" />
        </label>
        <br></br>
        <label>Postcode:
            <input type="text" />
        </label>
        <br></br>
        <label>Woonplaats:
            <input type="text" />
        </label>
        <br></br>
        <label>Emailadres:
            <input type="text" />
        </label>
        </form>
        </div>
    )
}
   function BasicExample() {
        return (
            <div>
                <Table striped bordered hover>
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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Formulier />);



