import { useEffect } from "react";
import axios from "Axios"

export default function TestAxios() {

    useEffect(()=>{
        
            axios.get("/api/login?email=test2@demo&passwd=test2").then(
                (res) => {
                    console.log("------------------",res.data)
                }
            )
    },[])

    return (
        <>
            <div>
                This is axios and cros test
            </div>
        </>
    )

}