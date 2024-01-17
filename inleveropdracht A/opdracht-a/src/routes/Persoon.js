import React from 'react';
import ReactDOM from 'react-dom/client';


import Form from '../components/Formulier';
import Overzicht from '../components/Overzicht';


export default function Persoon() {
    return (
        <div>
            <Form />
            <Overzicht />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Persoon />);
