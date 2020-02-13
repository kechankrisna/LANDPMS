const state = {
    counter: 0,
    token: localStorage.getItem('token') || null,
    token_type: localStorage.getItem('token_type') || null,
    messages:null,
    user: {},
    status: null,
    isAdmin:false,
}

export default state;