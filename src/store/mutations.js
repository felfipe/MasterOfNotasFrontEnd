
export default {
    async setUser(state, user) {
        state.user = user
        window.localStorage.setItem('token',user.token)
    }
}