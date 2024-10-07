import { useState } from "react"
import logo711 from "../../assets/711logo.png"
import "./navbar.scss"

const getNewDate = () => {
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const mm = month <= 9 ? "0" + month : month
    const day = time.getDate();
    const dd = day <= 9 ? "0" + day : day
    const hour = time.getHours();
    const hh = hour <= 9 ? "0" + hour : hour
    const minutes = time.getMinutes();
    const mi = minutes <= 9 ? "0" + minutes : minutes
    const seconds = time.getSeconds();
    const ss = seconds <= 9 ? "0" + seconds : seconds
    const tt = year + "年" + mm + "月" + dd + "日" + " " + hh + ":" + mi + ":" + ss;
    return tt
}


export default function Navbar() {
    const [date, setDate] = useState(getNewDate)

    setInterval(()=>{setDate(getNewDate)}, 1000);

    const [sideBarActive,setSideBarActive] = useState(false)

    return (
        <>
            <header className="navbar navbar-expand-lg navbar-light bg-light">

                <nav className="container">

                    <button className="rounded-2" onClick={()=>setSideBarActive(!sideBarActive)}>
                        <span className="navbar-toggler-icon" />
                    </button>

                    <a className="navbar-brand me-auto" href="#">
                        <img src={logo711} className="me-2" style={{ height: '50px', width: '50px' }} />取引先システム
                    </a>

                    <ul className="navbar-nav">
                        <li className="nav-item nav-link">{date}</li>
                        <li className="nav-item"><a className="nav-link active" href="#">野村　次郎</a></li>

                    </ul>
                </nav>
            </header>

            <div className={sideBarActive?"navbar-collapse offcanvas-collapse active":"navbar-collapse offcanvas-collapse"}>
                <ul className="navbar-nav ms-5 mt-5">
                    <li className="nav-item">Test1</li>
                    <li className="nav-item">Test2</li>
                    <li className="nav-item">Test3</li>
                </ul>
            </div>
        </>

    )

}
