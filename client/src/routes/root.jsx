import { NavLink, Outlet, redirect, Form, useLoaderData } from "react-router-dom";
import * as jose from 'jose';

export async function loader() {
    //doesnt work correctly, this component doesnt rerender every click so this doesnt get checked every time it needs to be
    const user = JSON.parse(localStorage.getItem("user"));
    const jwt = localStorage.getItem("jwt");
    console.log("jwt", jwt);

    if (jwt !== null) {
        const claims = jose.decodeJwt(jwt);
        const expires = new Date(claims.exp * 1000);
        if (expires < new Date()) {
            localStorage.removeItem("jwt");
            localStorage.removeItem("user");
            setTimeout(() => {
                alert("Your session has expired. Please log in again.");
            }, 100);
            return redirect("/login");
        }
        else {
            console.log(user, jwt)
            return { user, jwt };
        }
    } else {
        return null;
    }
}


export default function Root() {

    const data = useLoaderData();
    let user;
    let jwt;
    if (data) {
        user = data.user;
        jwt = data.jwt;
    }

    const loggedIn = jwt && user;


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