
const BasicUrl = process.env.NODE_ENV === 'production' ?
    'https://office-mern-appliction.herokuapp.com/User' :
    'http://localhost:3005/User';



export const GetAllUser = () => {
    return fetch(BasicUrl)
        .then(res => res.json())
        .catch(error => console.log(error))
}