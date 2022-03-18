import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ac7c18d7-dedc-4a3a-97e6-8ba2a87546b8"
      }
}

)

export const getUserAxi = (pageSize=10, currentPage=1) => {
    return instanse.get(`users?count=${pageSize}&page=${currentPage}`)
    .then(
        response => {
            return response
        }
    )
        
}

export const unFollowAxi = (id) => {
    return instanse.delete(`follow/${id}`)
    .then(
        response => {
            return response
        }
    )
}

export const onFollowAxi = (id, flag) => {
    if (flag)
    return instanse.post(`follow/${id}`)
    .then(
        response => {
            return response
        }
    ); 
    else return instanse.delete(`follow/${id}`)
    .then(
        response => {
            return response
        }
    )
        
}

export const getProfileAxi = (id) => {
    return instanse.get(`profile/${id}`)
    .then(
        response => {
            return response
        }
    )
}


export const getHeaderAxi = () => {
    return instanse.get(`auth/me`)
    .then(
        response => {
            return response
        }
    )
}

export const getStatusAxi = (id) => {
    return instanse.get(`profile/status/${id}`)
    .then(
        response => {
            return response
        }
    )
}

export const updateStatusAxi = (status) => {
    return instanse.put(`profile/status`, {status: status})
    .then(
        response => {
            if (response.data === null) {
                let status = "No status"
                return status 
            } else
            return response.statusText
        }
    )
}