import {
    useLoaderData,
} from "react-router-dom";

import { getArtwork } from '../artworks';

import DownloadButton from "../components/DownloadButton";
import Svg from '../components/svg/Svg';

export async function loader({ params }) {
    const id = params.id;
    const artwork = await getArtwork(id);
    return { artwork };
}

export default function Detail() {
    const { artwork } = useLoaderData();
    const parsedSvgVariables = JSON.parse(artwork[0].svgVariables);
    return (
        <div className="detail">
            <Svg {...parsedSvgVariables} />
            <div className="detail__info">
                {/* if artwork is not by user */}
                {/* <div className="detail__info--creator">made by account123</div>
                <div className="date-created">created on 12/04/2023</div>
                <div>..........................</div>
                <div className="likes">
                    <button className="like-button">like</button>
                    <div className="like-amount">37 likes</div>
                </div>
                <DownloadButton></DownloadButton> */}

                {/* if artwork is by user */}
                <div className="like-amount">37 likes</div>
                <div className="date-created">created on 12/04/2023</div>
                <div>..........................</div>
                <div className="buttons">
                    <button className="delete-button">delete</button>
                    <DownloadButton></DownloadButton>
                </div>

            </div>

        </div>
    );
}
