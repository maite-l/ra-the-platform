import {
    useLoaderData, Form, redirect
} from "react-router-dom";

import { getArtwork } from '../artworks';
import { likeArtwork } from '../artworks';

import DownloadButton from "../components/DownloadButton";
import Svg from '../components/svg/Svg';

let likes;
let user;
let isLikedByUser

export async function loader({ params }) {
    const id = params.id;
    const artwork = await getArtwork(id);
    return { artwork };
}

export async function action({ params }) {
    const jwt = localStorage.getItem("jwt");
    console.log(likes);
    if (isLikedByUser) {
        console.log("User has already liked this artwork.");
        const userLikedIndex = likes.indexOf(Number(user.id));
        likes.splice(userLikedIndex, 1);
    } else {
        likes.push(Number(user.id));
        console.log("User has not yet liked this artwork.");
    }

    console.log(likes);
    await likeArtwork(jwt, params.id, JSON.stringify(likes));
    return redirect(`/artwork/${params.id}`);
}

export default function Detail() {

    const { artwork } = useLoaderData();
    likes = JSON.parse(artwork[0].likes);
    user = JSON.parse(localStorage.getItem("user"));

    //check where this needs to go
    isLikedByUser = false;
    if (user) {
        isLikedByUser = likes.includes(Number(user.id));
    }
    



    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    const parsedSvgVariables = JSON.parse(artwork[0].svgVariables);
    const username = artwork[0].author.username;
    const dateCreated = formatDate(artwork[0].dateCreated);
    const likeCount = JSON.parse(artwork[0].likes).length;
    const ypos = 0;


    let detailInfo;
    if (user) {
        if (artwork[0].author.id == user.id) {
            detailInfo = (
                <>
                    <div className="like-amount">{likeCount} likes</div>
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
                        <Form method="post" >
                            <button type="submit">like</button>
                        </Form>
                        <div className="like-amount">{likeCount} likes</div>
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
                    <div className="like-amount">{likeCount} likes</div>
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
