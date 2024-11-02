import {useEffect}  from "react"
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

const ProtectedRouth = ({children}) =>{
const {user} = useSelector(store => store.auth)
const navigate = useNavigate();
useEffect(()=>{
if(user === null || user?.profile?.role === "recruiter"){
    navigate("/")
}
},[])


return (
    <>
    
    {children}
    </>
)
}

export default ProtectedRouth
