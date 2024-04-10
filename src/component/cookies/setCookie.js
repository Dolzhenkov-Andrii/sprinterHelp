import Cookie from "js-cookie"

const SetCookie = (cookiename,usirn)=>{
    Cookie.set(cookiename,usirn,{
        expires:1,
        secure:true,
        sameSite:'strict',
        path:'/'
    })
}
export default SetCookie
