import React from 'react';

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




