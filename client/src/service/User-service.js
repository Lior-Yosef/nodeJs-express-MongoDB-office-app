
const BasicUrl = "http://localhost:3005/User";

export const GetAllUser = () =>{
    return fetch(BasicUrl)
    .then(res => res.json())
    .catch(err => console.log(err))
}