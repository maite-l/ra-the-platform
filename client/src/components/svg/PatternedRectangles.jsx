import Rectangle from './Rectangle';

export default function PatternedRectangles({ backgroundPattern, additionalPatterns }) {
    const checkedPatterns = additionalPatterns.filter((pattern) => pattern.checked);
    const maxNofRectangles = 25;
    const rectanglesPerPattern = Math.floor(maxNofRectangles / checkedPatterns.length);

    const rectangles = [];
    for (let i = 0; i < checkedPatterns.length; i++) {
        for (let j = 0; j < rectanglesPerPattern; j++) {
            const patternName = checkedPatterns[i].name.replace(/[\s]/g, '-').replace(/[\s()]/g, '');
            const key = `${patternName}-${j}`;
            rectangles.push(<Rectangle key={key} pattern={patternName} />);
        }
    }

    return (
        <g mask="url(#circle-mask)">
            <rect x="0" y="0" width="100%" height="100%" fill={`url(#${backgroundPattern})`} mask="url(#circle-mask)" />
            {rectangles}
        </g>
    );
}
