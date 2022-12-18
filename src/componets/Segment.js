import React from 'react'

function rotateByOrigin(origin, point, angle) {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nextPoint = {
            x: (cos * (point.x - origin.x)) + (sin * (point.y - origin.y)) + origin.x,
            y: (cos * (point.y - origin.y)) - (sin * (point.x - origin.x)) + origin.y
        };
    return nextPoint;
}

function percentToAngle(percent) { return 3.6 * percent; }

export default function Segment(props) {
    const padding = 15;
    const radius = props.radius - padding;

    const originPoint = {
        x: props.radius,
        y: padding
    };

    const startAngle = -percentToAngle(props.fromPercent);
    const pointA = rotateByOrigin(props.center, originPoint, startAngle);

    const segmentAngle = -percentToAngle(props.percent);
    const pointB = rotateByOrigin(props.center, pointA, segmentAngle);

    const path = `M${props.center.x},${props.center.y} ` +
                 `L${pointA.x},${pointA.y} ` +
                 `A${radius},${radius} 1 0,1 ` +
                 `${pointB.x},${pointB.y} z`;

    return (
        <svg className="segment">
            <path style={{fill: props.color}} d={path} />
        </svg>
    );
}