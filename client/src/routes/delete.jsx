import { redirect } from "react-router-dom";
import { deleteArtwork } from "../artworks";

export async function action({ params }) {
    const jwt = localStorage.getItem("jwt");
    await deleteArtwork(params.id, jwt);
    return redirect("/my-artworks");
}
