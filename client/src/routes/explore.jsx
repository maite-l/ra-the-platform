import {
    useLoaderData,
} from "react-router-dom";
import Svg from '../components/svg/Svg';

import { getArtworks } from '../artworks';

export async function loader({ }) {
    const artworks = await getArtworks();
    return { artworks };
}

export default function Explore() {
    const { artworks } = useLoaderData();

    return (
        <div>
            {artworks.map((artwork) => {
                return (
                    <div key={artwork.id}>
                        <iframe src={`/img/${artwork.id}`} width={1000} height={700} />
                    </div>
                );
            })}
        </div>
    );
}

