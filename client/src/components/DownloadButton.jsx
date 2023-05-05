import { useEffect } from "react";

export default function DownloadButton() {
    useEffect(() => {
        const svg = document.getElementsByTagName("svg")[0];
        if (svg) {
            // get svg source.
            const serializer = new XMLSerializer();
            let source = serializer.serializeToString(svg);

            //add name spaces.
            if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
                source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
            }
            if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
                source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
            }

            //add xml declaration
            source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

            //convert svg source to URI data scheme.
            const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

            //set url value to a element's href attribute.
            const downloadButton = document.querySelector(".download-button");
            downloadButton.href = url;
            downloadButton.download = "my-svg-image.svg";
        }
    }, []);

    return (
        <a className="download-button" download>
            download
        </a>
    );
}
