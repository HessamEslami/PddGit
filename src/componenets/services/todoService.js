const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

//===============  Get All  =========
export const getAll = async () => {
    const Response = await fetch(apiUrl);
    const result = Response.json();
    return result;
}



//============   Insert  ==========
export const insert = async (data) => {
    const Response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),

    });
    const result = Response.json();
    return result;
}