const getters = {
    counter: (state) => state.counter,
    user: (state) => state.user,
    token: (state) => state.token,
    token_type: (state) => state.token_type,
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    messages: state => state.messages,
    
}

export default getters;