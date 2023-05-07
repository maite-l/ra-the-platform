import { useLoaderData } from "react-router-dom";
import { getAllArtworks } from '../artworks';

import ArtworkOverview from '../components/ArtworkOverview';

export async function loader() {
    const artworks = await getAllArtworks();
    const user = JSON.parse(localStorage.getItem("user"));
    const userArtworks = artworks.filter(artwork => artwork.author.id === user.id);
    return { userArtworks };
}

export default function MyArtworks() {
    const { userArtworks } = useLoaderData();

    return (
        <>
            <h2>My Artworks</h2>
            {userArtworks && userArtworks.length > 0 ? (
                <ArtworkOverview artworks={userArtworks} />
            ) : (
                <>
                    <p>You haven't made any artworks yet.</p>
                    <p>Make one <a href="new">here</a>.</p>
                </>
            )}
        </>
    );
}

