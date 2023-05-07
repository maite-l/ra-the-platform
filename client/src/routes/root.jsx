import { NavLink, Outlet, redirect, Form } from "react-router-dom";
import * as jose from 'jose';


export default function Root() {

    const jwt = localStorage.getItem("jwt");
    const user = JSON.parse(localStorage.getItem("user"));

    if (jwt) {
        const claims = jose.decodeJwt(jwt);
        const expires = new Date(claims.exp * 1000);
        if (expires < new Date()) {
            localStorage.removeItem("jwt");
            localStorage.removeItem("user");
            throw redirect("/login");
        }
    }

    const loggedIn = jwt !== null && user !== null;

    let links;
    if (loggedIn) {
        links = (
            <>
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
                    <Form method="post" action="logout">
                        <button className="logout-button" type="submit">LOG OUT</button>
                    </Form>
                </li>
            </>
        );
    } else {
        links = (
            <>
                <li>
                    <a href="/">EXPLORE</a>
                </li>
                <li>
                    <a href="/login">LOGIN</a>
                </li>
                <li>
                    <a href="/register">SIGN UP</a>
                </li>
            </>
        );
    }


    return (
        <>
            <div className="sidebar">
                <a href="/" className="title">
                    <h1>Mix&Match</h1>
                    <p>Pattern Generator</p>
                </a>
                <nav>
                    <ul>
                        {links}
                    </ul>
                </nav>
            </div>
            <div className="outlet">
                <Outlet />
            </div>


        </>
    );
}