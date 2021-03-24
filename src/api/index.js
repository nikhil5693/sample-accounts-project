const send = async ({ url, body, method }) => {
    try {
        let res = await fetch(url, {
            method,
            body: JSON.stringify(body),
        });
        res = await res.json();
        return res;
    } catch (e) {
        return { error: e };
    }
}

export default send;