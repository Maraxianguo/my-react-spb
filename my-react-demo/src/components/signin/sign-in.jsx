import { useState } from 'react'
import logoSvg from "../../assets/react.Svg"

export default function Lgin() {

    const [formValue,setFormValue] = useState({
        email:'',
        passwd:''
    });

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]:event.target.value
        })

    };

    // const handleSubmit = () => {
    //     // const loginFormData = new FormData();
    //     // loginFormData.append("email",formValue.email);
    //     // loginFormData.append("passwd",formValue.passwd);

    //     // await axios.post({
    //     //     url:"http://localhost:8080/api/login",
    //     //     data:loginFormData,
    //     // }).then(res => {
    //     //     console.log("---LOG---",res.data);
    //     // })

    //     axios.post("http://localhost:8080/api/login",formValue)
    //     .then(res => {
    //         console.log("------LOG------",res.data)
    //     })
    //     .catch(err => {
    //         console.error(err)
    //     })
       
    // };



    return (
        <>
            <div className="d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
                <img src={logoSvg}  style={{ height: '150px' }} />
            </div>

            <div className="d-flex align-items-center justify-content-center">
                <div className="text-center" style={{ width: '330px', justifyContent: 'center' }}>
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input type="email" name="email" className="form-control mb-2" id="floatingInput" placeholder="name@example.com" 
                             value={formValue.email} onChange={handleChange} />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" name="passwd" className="form-control mb-2" id="floatingPassword" placeholder="Password" 
                             value={formValue.passwd} onChange={handleChange} />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-50 btn btn-lg btn-primary" type="submit">Sign in</button>

                    </form>
                </div>
            </div>
        </>

    )
}