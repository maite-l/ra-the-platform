import {
    useLoaderData,
} from "react-router-dom";
import Svg from '../components/svg/Svg';

import { getArtwork } from '../artworks';

export async function loader({ params }) {
    const id = params.id;
    const artwork = await getArtwork(id);
    return { artwork };
}

export default function Img() {
    const { artwork } = useLoaderData();
    const parsedSvgVariables = JSON.parse(artwork[0].svgVariables);
    const ypos = 1050;
    return <Svg yPos={ypos} {...parsedSvgVariables} />;
}

