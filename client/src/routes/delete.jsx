import { redirect } from "react-router-dom";
import { deleteArtwork } from "../artworks";

export async function action({ params }) {
    console.log(params);
    await deleteArtwork(params.id);
    return redirect("/my-artworks");
}
