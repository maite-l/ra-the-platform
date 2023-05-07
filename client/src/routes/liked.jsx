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
            console.log("liked");
            return true;
        }
    });
    console.log(likedArtworks);

    return { likedArtworks };

}

export default function Liked() {
    const { likedArtworks } = useLoaderData();

    return (
        <>
            <h2>Liked artworks</h2>
            <ArtworkOverview artworks={likedArtworks} />
        </>
    );
}

