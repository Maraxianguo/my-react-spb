import { useState } from "react"
import logo711 from "../../assets/711logo.png"
import "./navbar.scss"


export default function Navbar() {
    const [date, setDate] = useState('')

    const getNewDate = () => {
        const time = new Date();
        const year = time.getFullYear();
        const month = time.getMonth() + 1;
        const day = time.getDate();
        const hour = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const ss = seconds <= 9 ? "0" + seconds : seconds
        const tt = year + "年" + month + "月" + day + "日" + " " + hour + ":" + minutes + ":" + ss;
        setDate(tt);
    }
    setInterval(getNewDate, 1000);

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
