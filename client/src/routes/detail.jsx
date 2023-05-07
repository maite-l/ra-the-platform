import {
    useLoaderData, Form
} from "react-router-dom";

import { getArtwork } from '../artworks';

import DownloadButton from "../components/DownloadButton";
import Svg from '../components/svg/Svg';


export async function loader({ params }) {
    const id = params.id;
    const artwork = await getArtwork(id);
    console.log(artwork[0].authorId);
    return { artwork };
}

export default function Detail() {
    const { artwork } = useLoaderData();
    const parsedSvgVariables = JSON.parse(artwork[0].svgVariables);
    const ypos = 0;

    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user.id);

    let detailInfo;
    if (artwork[0].authorId == user.id) {
        detailInfo = (
            <>
                <div className="like-amount">37 likes</div>
                <div className="date-created">created on 12/04/2023</div>
                <div>..........................</div>
                <div className="buttons">
                    <Form
                        method="post"
                        action="delete"
                        onSubmit={(event) => {
                            if (!confirm("Please confirm you want to delete this record.")) {
                                event.preventDefault();
                            }
                        }}
                    >
                        <button type="submit">delete</button>
                    </Form>
                    <DownloadButton />
                </div>
            </>
        );
    } else {
        detailInfo = (
            <>
                <div className="detail__info--creator">made by account123</div>
                <div className="date-created">created on 12/04/2023</div>
                <div>..........................</div>
                <div className="likes">
                    <button className="like-button">like</button>
                    <div className="like-amount">37 likes</div>
                </div>
                <DownloadButton />
            </>
        );
    }

    return (
        <div className="detail">
            <Svg yPos={ypos} {...parsedSvgVariables} />
            <div className="detail__info">
                {detailInfo}
            </div>
        </div>
    );
}
