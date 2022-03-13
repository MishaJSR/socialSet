import axios from "axios";
const instanse = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "ac7c18d7-dedc-4a3a-97e6-8ba2a87546b8"
      }
}

)

export const getUserAxi = (pageSize=10, currentPage=1) => {
    return instanse.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`)
    .then(
        response => {
            return response
        }
    )
        
}

export const unFollowAxi = (id) => {
    return instanse.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    .then(
        response => {
            return response
        }
    )
}

export const onFollowAxi = (id, flag) => {
    if (flag)
    return instanse.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    .then(
        response => {
            return response
        }
    ); 
    else return instanse.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    .then(
        response => {
            return response
        }
    )
        
}

export const getProfileAxi = (id) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
    .then(
        response => {
            return response
        }
    )
}