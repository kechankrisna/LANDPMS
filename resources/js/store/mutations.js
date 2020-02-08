const INCREASE = (state, payload) => {
    state.counter += payload;
}

const DECREASE = (state, payload) => {
    state.counter -= payload;
}

const AUTH_REQUEST = (state) => {
    state.status = 'loading'
}
const AUTH_SUCCESS = (state, payload) => {
    state.status = 'success';
    state.token = payload.token;
    state.token_type = payload.token_type;
    state.user = payload.user;
    state.messages = payload.messages;

}
const AUTH_ERROR = (state, payload) => {
    state.status = 'error';
    state.messages = payload;
}

const LOGOUT = (state) => {
    state.status = '';
    state.messages = '';
    state.token = '';
    state.token_type = '';
}

export default {
    INCREASE, DECREASE, AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, LOGOUT
};