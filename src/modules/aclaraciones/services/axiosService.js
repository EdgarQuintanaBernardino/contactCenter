import axios from "axios";
export default axios.create({
    withCredentials:false,
    headers:{
        'Content-Type':'application/json',
        'x-token':'esteesmitoken'
    }
})