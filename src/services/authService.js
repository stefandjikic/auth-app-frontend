import axios from 'axios';

class AuthService {
  static signup(credentials) {
    return axios.post('/signup', credentials);
  }
  static login(credentials) {
    return axios.post('/login', credentials);
  }
  static logout() {
    localStorage.removeItem('user_data');
  }
  static setUserData(data) {
    localStorage.setItem('user_data', JSON.stringify(data));
  }
  static getUserData() {
    const userData = localStorage.getItem('user_data');
    return userData ? JSON.parse(userData) : null;
  }
}

export default AuthService;
