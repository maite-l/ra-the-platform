import {
    useLoaderData, Form, useSubmit
} from "react-router-dom";
import { useState } from 'react';

import { getAllArtworks } from '../artworks';

import SelectField from '../components/form/SelectField';
import ArtworkOverview from '../components/ArtworkOverview';

export async function loader({ request }) {
    const url = new URL(request.url);
    const color = url.searchParams.get("color");

    const artworks = await getAllArtworks(color);
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === null) {
        return { allArtworks: artworks, colorParam: color };
    }
    else {
        const allArtworks = artworks.filter(artwork => artwork.author.id !== user.id);
        return { allArtworks, colorParam: color };
    }
}

export default function Explore() {
    const submit = useSubmit();

    const { allArtworks, colorParam } = useLoaderData();

    const colorOptions =
        [
            { id: 0, name: '---' },
            { id: 1, name: 'red' },
            { id: 2, name: 'orange' },
            { id: 3, name: 'yellow' },
            { id: 4, name: 'green' },
            { id: 5, name: 'blue' },
            { id: 6, name: 'purple' },
            { id: 7, name: 'pink' },
            { id: 8, name: 'black' },
            { id: 9, name: 'white' },
            { id: 10, name: 'gray' },
            { id: 11, name: 'brown' },
        ];

    const [color, setColor] = useState('---');
    let colorValue;
    if (colorParam == null) {
        colorValue = '---'
    } else {
        colorValue = colorParam;
    };

    return (
        <>
            <h2>Explore</h2>
            <Form>
                <SelectField
                    id="color"
                    label="filter on color"
                    options={colorOptions}
                    value={colorValue}
                    onChange={(event) => {
                        setColor(event.target.value);
                        console.log(event.target.value);
                        const isFirstSearch = color == null;
                        submit(event.currentTarget.form, {
                            replace: !isFirstSearch,
                        });
                    }} />
            </Form>

            <ArtworkOverview artworks={allArtworks} />
        </>
    );
}

