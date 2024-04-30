export default function uploadPhoto(filename) {
    let error = Error(`${filename} cannot be processed`);
    return Promise.reject(error);
}