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
                    <NavLink className="navlink" to="/">EXPLORE</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/new">NEW ARTWORK</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/my-artworks">MY ARTWORKS</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/liked">LIKED</NavLink>
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
                    <NavLink className="navlink" to="/">EXPLORE</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/login">LOGIN</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/register">SIGN UP</NavLink>
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