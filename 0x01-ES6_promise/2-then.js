export default function handleResponseFromAPI(promise){
    return promise
    .then(() => {
        let obj = {
            status: 200,
            body: 'success'
        };
        console.log('Got a response from the API');
    })
    .catch(() => {
        return new Error();
    });
}