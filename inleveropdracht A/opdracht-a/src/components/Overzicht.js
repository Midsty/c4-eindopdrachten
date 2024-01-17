import React from 'react';
import Table from 'react-bootstrap/Table';

export default function Overzicht() {
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
                <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
                </tr>
                </tbody>
                </thead>
                </Table>
            </div>
        );
    }





    





