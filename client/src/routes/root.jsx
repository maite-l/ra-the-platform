import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <div className="sidebar">
                <div className="title">
                    <h1>Mix&Match</h1>
                    <p>Pattern Generator</p>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="/">EXPLORE</a>
                        </li>
                        <li>
                            <a href="/new">NEW ARTWORK</a>
                        </li>
                        <li>
                            <a href="/my-artworks">MY ARTWORKS</a>
                        </li>
                        <li>
                            <a href="/liked">LIKED</a>
                        </li>
                        <li>
                            <a href="/login">LOGIN</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="outlet">
                <Outlet />
            </div>


        </>
    );
}