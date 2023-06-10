const loginSevice = async(email:string,password:string)=>{
  try {
    const res = fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: email,
    password: password,
  })
})

return res
  } catch (error:any) {
    console.log(error.message)
  }

}

const getUserService = async()=>{
try {
  const res = await fetch('https://dummyjson.com/users',{
      headers: { 'Content-Type': 'application/json' },
  })
return res;
} catch (error:any) {
  console.log(error.message)
}
}

export {loginSevice,getUserService}