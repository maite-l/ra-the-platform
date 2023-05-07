import {
    useLoaderData,
} from "react-router-dom";

import { getAllArtworks } from '../artworks';

import ArtworkOverview from '../components/ArtworkOverview';

export async function loader({ }) {
    const artworks = await getAllArtworks();
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user === null) {
        return { allArtworks: artworks };
    }
    else {
        const allArtworks = artworks.filter(artwork => artwork.author.id !== user.id);
        return { allArtworks };
    }
}

export default function Explore() {
    const { allArtworks } = useLoaderData();

    return (
        <>
            <h2>Explore</h2>
            <ArtworkOverview artworks={allArtworks} />
        </>
    );
}

