export default function DownloadButton() {

    //get svg element.
    window.onload = () => {
        const svg = document.getElementsByTagName("svg")[0];

        // get svg source.
        var serializer = new XMLSerializer();
        var source = serializer.serializeToString(svg);

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
        var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

        //set url value to a element's href attribute.
        document.querySelector(`.download-button`).href = url;
        document.querySelector(`.download-button`).download = "my-svg-image.svg";
    }

    return (
        <a className="download-button">download</a>
    );
}