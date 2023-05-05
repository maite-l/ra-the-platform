import {
    useLoaderData,
} from "react-router-dom";
import Svg from '../components/svg/Svg';

import { getArtworks } from '../artworks';

export async function loader({ params }) {
    const id = params.id;
    // TODO: optimize so you have a graphql query that returns this single one instead of all of them, basically the same thing as the query for the detail page
    const artworks = await getArtworks();
    const artwork = artworks.find((artwork) => artwork.id === id);
    return { artwork };
}

export default function Img() {
    const { artwork } = useLoaderData();
    const parsedSvgVariables = JSON.parse(artwork.svgVariables);
    return <Svg {...parsedSvgVariables} />;
}

