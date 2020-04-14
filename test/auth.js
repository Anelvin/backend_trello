import axios from 'axios';

let userDefault = {
    name: "Anelvin Mejia",
    password: "Anelvin123"
}

export const getToken = () => {
   let token = axios.post('http://localhost:3001/user/signin', userDefault)
    .then(result => {
        return result.data.token
    });

    return token;
}