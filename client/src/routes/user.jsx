import { useLoaderData } from "react-router-dom";
import { getArtworksByUser } from '../artworks';

import ArtworkOverview from '../components/ArtworkOverview';

export async function loader({ params }) {
    const artworks = await getArtworksByUser(params);
    console.log(artworks);
    return { artworks };
}

export default function User() {
    const { artworks } = useLoaderData();

    const username = (artworks[0].author.username);

    return (
        <>
            <h2>{username}</h2>
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

