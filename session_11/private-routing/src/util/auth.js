/**
 * fake auth
 * Maybe it should check sessionStorage looking for a valid token
 * @type {{isAuthenticated: boolean, authenticate: Function, signout: Function}}
 */
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100)
  }
}

export default fakeAuth;