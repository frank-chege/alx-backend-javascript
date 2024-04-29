export default function getFullResponseFromAPI(success){
    return new Promise((resolve, reject) => {
        if (success == true){
            let obj = {
                status: 200,
                body: 'Success'
            };
            resolve(obj);
        }
        else{
            let error = new Error('The fake API is not working currently');
            reject(error);
        }
    });
}