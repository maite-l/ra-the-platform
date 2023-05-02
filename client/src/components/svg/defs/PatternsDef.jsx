export default function PatternsDef( {color}) {

    return (
        <>
            <pattern id="vertical-stripes" viewBox="0,0,10,10" width="10%" height="10%">
                <line x1="0" y1="0" x2="0" y2="20" stroke={color} strokeWidth="1" />
            </pattern>
            <pattern id="horizontal-stripes" viewBox="0,0,10,10" width="10%" height="10%" patternTransform="rotate(90)">
                <line x1="0" y1="0" x2="0" y2="20" stroke={color} strokeWidth="2" />
            </pattern>
            <pattern id="diagonal-stripes-up" viewBox="0,0,10,10" width="10%" height="10%" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="20" stroke={color} strokeWidth="2" />
            </pattern>
            <pattern id="diagonal-stripes-down" viewBox="0,0,10,10" width="10%" height="10%" patternTransform="rotate(135)">
                <line x1="0" y1="0" x2="0" y2="20" stroke={color} strokeWidth="2" />
            </pattern>
            <pattern id="dots" viewBox="0 0 10 10" width="10%" height="10%">
                <circle cx="5" cy="5" r="1" fill={color} />
            </pattern>
            <pattern id="checkerboard" viewBox="0 0 10 10" width="10%" height="10%">
                <rect x="0" y="0" width="5" height="5" fill={color} />
                <rect x="5" y="5" width="5" height="5" fill={color} />
            </pattern>
            <pattern id="triangles" viewBox="0 0 10 10" width="10%" height="10%">
                <polygon points="0,0 10,0 5,10" fill={color} />
            </pattern>
            <pattern id="wavy" viewBox="0 0 10 10" width="10%" height="10%">
                <path d="M 0 5 Q 2.5 0, 5 5 T 10 5" stroke={color} strokeWidth="1" fill="none" />
            </pattern>



            <pattern id="crosshatch" viewBox="0 0 10 10" width="10%" height="10%">
                <line x1="0" y1="0" x2="10" y2="10" stroke={color} strokeWidth="1" />
                <line x1="0" y1="10" x2="10" y2="0" stroke={color} strokeWidth="1" />
            </pattern>

            <pattern id="diamonds" viewBox="0 0 10 10" width="10%" height="10%">
                <polygon points="5,0 10,5 5,10 0,5" fill={color} />
            </pattern>

            <pattern id="hexagons" viewBox="0 0 10 10" width="10%" height="10%">
                <polygon points="5,0 10,3.5 10,6.5 5,10 0,6.5 0,3.5" fill={color} />
            </pattern>

            <pattern id="stars" viewBox="0 0 10 10" width="10%" height="10%">
                <polygon points="5,0 6.5,3.5 10,3.5 7.5,6 8.5,9.5 5,7 1.5,9.5 2.5,6 0,3.5 3.5,3.5" fill={color} />
            </pattern>

        </>
    )
}
