const BASE_URL = import.meta.env.VITE_API_ENDPOINT || "";

export const graphQLRequest = async (query, variables = {}, jwt = undefined) => {
    const result = await fetch(`${BASE_URL}/api`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...(jwt && { Authorization: `JWT ${jwt}` }),
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    }).then((res) => res.json());
    if (result.errors) {
        console.log(result);
        throw new Error(result.errors[0].message);
    }
    return result;
};