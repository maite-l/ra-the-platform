import TextPath from "./TextPath";

export default function Text({ quote, color }) {

    // console.log(color);

    return (
        <text style={{ fontFamily: 'monospace', textTransform: 'uppercase', fontSize: '1.8rem', fill: `${color}` }}>
            <TextPath textPathHref="#text1" quote={quote} />
            <TextPath textPathHref="#text2" quote={quote} />

        </text>
    )

}