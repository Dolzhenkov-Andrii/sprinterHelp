import RemoveCookie from "./removeCookie"
import SetCookie from "./setCookie"


const UpdateCookie = (cookiename, usirn)=>{
    RemoveCookie(cookiename)
    SetCookie(cookiename, usirn)
}
export default UpdateCookie
