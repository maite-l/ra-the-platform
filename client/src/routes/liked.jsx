import {
    useLoaderData,
} from "react-router-dom";

import { getAllArtworks } from '../artworks';

import ArtworkOverview from '../components/ArtworkOverview';

export async function loader({ }) {
    const artworks = await getAllArtworks();
    const user = JSON.parse(localStorage.getItem("user"));
    const likedArtworks = artworks.filter(artwork => {
        const likes = JSON.parse(artwork.likes);
        if (likes && likes.includes(Number(user.id))) {
            return true;
        }
    });

    return { likedArtworks };

}

export default function LikedArtworks() {
    const { likedArtworks } = useLoaderData();

    return (
        <>
            <h2>Liked Artworks</h2>
            {likedArtworks && likedArtworks.length > 0 ? (
                <ArtworkOverview artworks={likedArtworks} />
            ) : (
                <>
                    <p>You haven't liked any artworks yet.</p>
                    <p>Go <a href="/">explore</a> and find one you like.</p>
                </>
            )}
        </>
    );
}


