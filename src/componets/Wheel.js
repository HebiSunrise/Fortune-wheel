import React from 'react'
import Segment from './Segment'

export default function Wheel(props) {
    return (
        <div id="wheel">
            <div id="wheel-bg"></div>
            <Segment center={props.center} radius={props.radius} fromPercent={0} percent={15} color="#ffc35c"/>
            <Segment center={props.center} radius={props.radius} fromPercent={20} percent={35} color="#ae2dff"/>
        </div>
    );
}