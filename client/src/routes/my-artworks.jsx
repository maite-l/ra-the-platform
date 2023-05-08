import { useLoaderData } from "react-router-dom";
import { getMyArtworks } from '../artworks';

import ArtworkOverview from '../components/ArtworkOverview';

export async function loader() {
    const user = JSON.parse(localStorage.getItem("user"));
    const artworks = await getMyArtworks(user);
    console.log(artworks);
    return { artworks };
}

export default function MyArtworks() {
    const { artworks } = useLoaderData();

    return (
        <>
            <h2>My Artworks</h2>
            {artworks && artworks.length > 0 ? (
                <ArtworkOverview artworks={artworks} />
            ) : (
                <>
                    <p>You haven't made any artworks yet.</p>
                    <p>Make one <a href="new">here</a>.</p>
                </>
            )}
        </>
    );
}

