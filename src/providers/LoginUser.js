import axios from "axios";

export let AUTH_GLOBALS = {}

const cleanup = () => {
  // Remove the ?code&state from the URL
  window.history.replaceState(
      {},
      window.document.title,
      window.location.origin
  );
}

const redirectUrl = process.env.REACT_APP_REDIRECT_FULL_URL
const baseUrl = process.env.REACT_APP_BASE_URL

export const authProvider = {
    // authentication
    login: (params) => {
      if(!('code' in params)){
        if(window.localStorage.getItem('refresh_token') !== null) {
          console.log("after local storage check")
          return fetch(`${baseUrl}/auth/refresh`, {
            headers: {
              "Authorization": `Bearer ${window.localStorage.getItem("refresh_token")}`
            }
          })
          .then(response => response.json())
          .then(token_data => {
            AUTH_GLOBALS['access_token'] = token_data['access_token']
            return fetch(`${baseUrl}/user/me`, {
              headers: {
                "Authorization": `Bearer ${token_data['access_token']}`
              }
            })
          })
          .then(userResponse => userResponse.json())
          .then(userData => {
            AUTH_GLOBALS['user'] = userData
            localStorage.setItem('user', userData)
            return userData
          })
        }
        console.log("uhhh")
        return fetch(`${baseUrl}/auth/code/url`)
          .then(response => {
            return response.json()
          })
          .then(info => {
            const authUrl = `https://accounts.google.com/o/oauth2/auth?` +
            `&client_id=${info['client_id']}` +
            `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
            `&response_type=code` +
            `&access_type=offline` +
            `&scope=${encodeURIComponent(info['scopes'].join(' '))}` + 
            `&prompt=consent`
            window.location.replace(authUrl)
          })
      }
      if(params.code){
          console.log("if params.code")
        return fetch(`${baseUrl}/auth/swap`, {
          method: 'POST',
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({"code": params.code, "redirect_uri": redirectUrl})
        })
        .then(response => {
          if(!response.ok){
            cleanup()
            throw new Error({message: "Google signin error, make sure using southwestern.edu account"})
          }
          return response.json()
        })
        .then(data => {
          window.localStorage.setItem("refresh_token", data['refresh_token'])
          window.localStorage.setItem("access_token", data['access_token'])
          AUTH_GLOBALS = data
          cleanup()
          return data
          
        })
      }
      return Promise.reject()
    },
    checkError: (error) => {
      if(error.status >= 400 && error.status <= 403){
        return Promise.reject()
      }
      return Promise.resolve()
    },
    checkAuth: () => {
      if(!("access_token" in AUTH_GLOBALS)){
        return Promise.reject({redirect: "/"})
      }
      return Promise.resolve()
    },
    logout: () => {
      if('access_token' in AUTH_GLOBALS) {
        AUTH_GLOBALS = {}
        console.log(localStorage.getItem("refresh_token"))
        localStorage.removeItem("refresh_token")
      }
      return Promise.resolve()
    },
    getIdentity: () => {
      if(!("user" in AUTH_GLOBALS)){
        return Promise.reject()
      }

      const data = {
        "id": AUTH_GLOBALS["user"]["id"],
        "fullName": `${AUTH_GLOBALS["user"]["first_name"]} ${AUTH_GLOBALS["user"]["last_name"]}`,
        "avatar": AUTH_GLOBALS["user"]["profile_url"]
      }
      return Promise.resolve(data)
    },
    // authorization
    getPermissions: (params) => {
      if(!('user' in AUTH_GLOBALS)){
        return Promise.reject()
      }
      if(AUTH_GLOBALS["user"]["is_superuser"]){
        return Promise.resolve()
      }
      return Promise.reject()
    },
    // refresh user
    RefreshUser: async (refreshToken) => {
      const refreshResponse = await axios({
          method: 'GET',
          url: 'https://tutor.jakegut.com/auth/refresh',
          headers: {
              'contentType': 'application/json',
              'Authorization': `Bearer ${refreshToken}`
          }
      })
      const access_token = refreshResponse.data['access_token']
      localStorage.setItem('access_token', access_token)

      axios.defaults.headers.common['Authorization'] =  `Bearer ${access_token}`
  
      const userResponse = await axios.get('https://tutor.jakegut.com/user/me', {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      });
      const user = userResponse.data;
      
      return { user }
  }
}
