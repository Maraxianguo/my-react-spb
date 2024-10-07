import { useState } from "react";
import Navbar from "../navbar/navbar";
import UserList from "./userList";
import RegistePage from "./registePage";

export default function HomePage() {
    const [displayPage,setDisplayPage] = useState("HomePage")
    function getPageFromNavbar(param) {
        setDisplayPage(param)
    }

    console.log(displayPage)

    return (
        <>
            <Navbar />
            {displayPage==="HomePage"?<RegistePage /> : <UserList />}
        </>
    )
}