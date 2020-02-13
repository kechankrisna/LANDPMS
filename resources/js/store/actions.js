const loginUrl = `/api/auth/login`;
const signupUrl = `/api/auth/signup`;
const profileUrl = `/api/auth/user`;

const incrementAction = ({ commit }, payload) => {
    console.log("incrementAction");
    commit("INCREASE", payload);
}

const descrementAction = ({ commit }, payload) => {
    console.log("descrementAction");
    commit("DECREASE", payload);
}


const login = ({ commit }, user) => {
    return new Promise((resolve, reject) => {
        commit('AUTH_REQUEST')
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        axios({ url: `/api/auth/login`, data: user, method: 'POST',  axiosConfig })
            .then(res => {
                const token = res.data.access_token
                const token_type = res.data.token_type
                const user = res.data.user

                localStorage.setItem('token', token)
                localStorage.setItem('token_type', token_type)
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('isAdmin', JSON.stringify(user.isAdmin))

                axios.defaults.headers.common['Authorization'] = token_type + " " + token
                commit('AUTH_SUCCESS', { "token": token, "token_type": token_type, "user": user, "messages": "Successfully logged in!" })
                resolve(res)
            })
            .catch(err => {
                // console.log(err.response);
                
                commit('AUTH_ERROR', err.response.data.message)
                localStorage.removeItem('token')
                localStorage.removeItem('token_type')
                localStorage.removeItem('user')
                reject(err)
            })
    })
}


const register = ({ commit }, user) => {
    return new Promise((resolve, reject) => {
        commit('AUTH_REQUEST')
        axios({ url: `/api/auth/register`, data: user, method: 'POST' })
            .then(res => {
                const token = res.data.access_token
                const token_type = res.data.token_type
                const user = res.data.user

                localStorage.setItem('token', token)
                localStorage.setItem('token_type', token_type)
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('isAdmin', JSON.stringify(user.isAdmin))

                axios.defaults.headers.common['Authorization'] = token_type + " " + token
                commit('AUTH_SUCCESS', { "token": token, "token_type": token_type, "user": user, "messages": "Registerd successfully!" })
                resolve(res)
            })
            .catch(err => {
                commit('AUTH_ERROR', err.response.data.message)
                localStorage.removeItem('token')
                localStorage.removeItem('token_type')
                localStorage.removeItem('user')
                localStorage.removeItem('isAdmin')
                reject(err)
            })
    })
}


const logout = ({ commit }) => {
    return new Promise((resolve, reject) => {
        commit('LOGOUT')
        localStorage.removeItem('token')
        localStorage.removeItem('token_type')
        localStorage.removeItem('user')
        localStorage.removeItem('isAdmin')
        delete axios.defaults.headers.common['Authorization']
        resolve()
    })
}

const profile = ({ commit }) => {
    return new Promise((resolve, reject) => {
        axios({ url: `/api/auth/me`, data: {}, method: 'POST' })
            .then((res) => {
                // console.log(res)
                resolve(res)
            }).catch((err) => {
                console.log(err)
                reject(err)
            });
    });
}


export default {
    incrementAction,
    descrementAction,
    login,
    register,
    logout,
    profile,
}