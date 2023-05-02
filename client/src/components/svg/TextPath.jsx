export default function TextPath({ textPathHref, quote }) {

    return (
        <textPath href={textPathHref}>{quote}
            <animate attributeName="startOffset" from="0%" to="100%" begin="0s" dur="30s" repeatCount="indefinite"></animate>
        </textPath>
    )

}