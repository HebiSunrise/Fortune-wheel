import React from 'react'
import Wheel from './Wheel'

export default function App() {
    const center = {
        x: 300,
        y: 300
    };

    const radius = 300;

    return (
        <div className="screen">
            <Wheel center={center} radius={radius} />
        </div>
    );
}