export default function PatternedRectangles({ backgroundPattern, rectangles }) {

    return (
        <g mask="url(#circle-mask)">
            <rect x="0" y="0" width="100%" height="100%" fill={`url(#${backgroundPattern})`} mask="url(#circle-mask)" />
            {/* {rectangles} */}
            {rectangles.map((rectangle) => {
                return (
                    <rect
                        key={rectangle.key}
                        x={rectangle.x}
                        y={rectangle.y}
                        width={rectangle.size}
                        height={rectangle.size}
                        fill={rectangle.fill}
                    />
                );
            })}
        </g>
    );
}