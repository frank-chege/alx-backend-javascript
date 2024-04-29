export function getResponseFromAPI(){
    return new Promise((resolve, reject) => {
        resolve('True');
        reject('False');
    });
}