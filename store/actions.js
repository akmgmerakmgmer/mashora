export default{
  async login(context,payload){
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDJVWgGSOxNhMUL3grmoRQpJ0-_sukDMz4',{
      method:'POST',
      body:JSON.stringify({
        email:payload.email,
        password:payload.password,
        displayName:payload.username,
        returnSecureToken:true
      })
    });
    const responseData= await response.json()
    if(!response.ok){
      const error = new Error(responseData.message || 'Email or Password is not correct.')
      throw error
    }
    console.log(responseData)
    context.commit('setUser',{
      token:responseData.idToken,
      userId:responseData.localId,
      tokenExpiration:responseData.expiresIn,
      displayName:responseData.displayName
    })
  },
  async signup(context,payload){
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDJVWgGSOxNhMUL3grmoRQpJ0-_sukDMz4',{
      method:'POST',
      body:JSON.stringify({
        email:payload.email,
        password:payload.password,
        displayName:payload.username,
        returnSecureToken:true
      })
    });
    const responseData= await response.json()
    if(!response.ok){
      const error = new Error(responseData.message || 'This User Already Exists')
      throw error
    }
    console.log(responseData)
    context.commit('setUser',{
      token:responseData.idToken,
      userId:responseData.localId,
      tokenExpiration:responseData.expiresIn
    })
  },
  logout(context){
    context.commit('setUser',{
      token:null,
      userId:null,
      tokenExpiration:null,
      displayName:null
    })
  }
}
