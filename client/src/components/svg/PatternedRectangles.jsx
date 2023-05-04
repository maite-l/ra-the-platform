export default function PatternedRectangles({ backgroundPattern, rectangles }) {

    return (
        <g mask="url(#circle-mask)">
            <rect x="0" y="0" width="100%" height="100%" fill={`url(#${backgroundPattern})`} mask="url(#circle-mask)" />
            {rectangles}
        </g>
    );
}