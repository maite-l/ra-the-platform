export default function Rectangle({ pattern }) {
    const size = getRandomInt(70, 200);
    const x = getRandomInt(0, 1000 - size);
    const y = getRandomInt(0, 700 - size);
    const fill = pattern ? `url(#${pattern})` : 'black';

    return (
        <rect x={x} y={y} width={size} height={size} fill={fill} />
    );
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}