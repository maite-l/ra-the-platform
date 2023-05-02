export default function Circle({ cx, cy, r, xOffset, yOffset, xDefaultSpeed, yDefaultSpeed }) {

    const xValues = `${Number(cx)};${Number(cx) + Number(xOffset)};${Number(cx)};${Number(cx) - Number(xOffset)};${Number(cx)}`;
    const yValues = `${Number(cy)};${Number(cy) - Number(yOffset)};${Number(cy)};${Number(cy) + Number(yOffset)};${Number(cy)}`;
    const xDur = xDefaultSpeed;
    const yDur = yDefaultSpeed;

    return (
        <circle cx={cx} cy={cy} r={r}>
            <animate attributeName="cx" values={xValues} dur={xDur} repeatCount="indefinite" />
            <animate attributeName="cy" values={yValues} dur={yDur} repeatCount="indefinite" />
        </circle>
    );

}