import { uploadPhoto, createUser } from './utils.js';
export default function handleProfileSignup(){
    Promise.all([uploadPhoto(), createUser()])
    .then(([upload, user]) => {
        console.log(upload.body, user.firstName, user.lastName);
    })
    .catch(error => {
        console.error('Signup system offline');
    });
}