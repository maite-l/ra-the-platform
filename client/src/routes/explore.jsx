import {
    useLoaderData,
} from "react-router-dom";

import { getArtworks } from '../artworks';

export async function loader({ }) {
    const artworks = await getArtworks();
    return { artworks };
}

export default function Explore() {
    const { artworks } = useLoaderData();
    console.log(JSON.stringify(artworks, null, 2));
    return (
        <div>explore</div>
    );
}
