import {
    useLoaderData,
} from "react-router-dom";

import { getAllArtworks } from '../artworks';

import ArtworkOverview from '../components/ArtworkOverview';

export async function loader({ }) {
    const artworks = await getAllArtworks();
    const user = JSON.parse(localStorage.getItem("user"));
    const otherArtworks = artworks.filter(artwork => artwork.author.id !== user.id);
    return { otherArtworks };

}

export default function Explore() {
    const { otherArtworks } = useLoaderData();

    return (
        <>
            <h2>Explore</h2>
            <ArtworkOverview artworks={otherArtworks} />
        </>
    );
}

