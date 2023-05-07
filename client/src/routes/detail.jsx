import {
    useLoaderData, Form
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

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    const parsedSvgVariables = JSON.parse(artwork[0].svgVariables);
    const username = artwork[0].author.username;
    const dateCreated = formatDate(artwork[0].dateCreated);
    const ypos = 0;

    const user = JSON.parse(localStorage.getItem("user"));

    let detailInfo;
    if (user) {
        if (artwork[0].authorId == user.id) {
            detailInfo = (
                <>
                    <div className="like-amount">37 likes</div>
                    <div className="date-created">created on {dateCreated}</div>
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
                    <div className="detail__info--creator">made by {username}</div>
                    <div className="date-created">on {dateCreated}</div>
                    <div>..........................</div>
                    <div className="likes">
                        <button className="like-button">like</button>
                        <div className="like-amount">37 likes</div>
                    </div>
                    <DownloadButton />
                </>
            );
        }
    } else {    
        detailInfo = (
            <>
                <div className="detail__info--creator">made by {username}</div>
                <div className="date-created">on {dateCreated}</div>
                <div>..........................</div>
                <div className="likes">
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
