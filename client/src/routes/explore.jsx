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
                const parsedSvgVariables = JSON.parse(artwork.svgVariables);
                return (
                    <div key={artwork.id}>
                        <Svg {...parsedSvgVariables} />
                    </div>
                );
            })}
        </div>
    );
}

