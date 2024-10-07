import { Fragment, useState } from "react"

export default function RegistePage() {
    const [formValue, setFormValue] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        })

    };
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center mt-5">
            <div className="form-floating h3">新規登録</div>
                <div>
                    <from>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <div className="form-floating mt-3" style={{ width: '330px' }}>
                                <input type="email" name="email" className="form-control mb-2" id="floatingEmail" placeholder="name@example.com"
                                    value={formValue.email} onChange={handleChange} />
                                <label htmlFor="floatingEmail">Email address</label>
                            </div>
                            <div className="form-floating mt-3" style={{ width: '330px' }}>
                                <input type="text" name="username" className="form-control mb-2" id="floatingUsername" placeholder="full name"
                                    value={formValue.username} onChange={handleChange} />
                                <label htmlFor="floatingUsername">Full name</label>
                            </div>
                            <div className="form-floating mt-3" style={{ width: '330px' }}>
                                <input type="password" name="password" className="form-control mb-2" id="floatingPassword" placeholder="password"
                                    value={formValue.password} onChange={handleChange} />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mt-3" style={{ width: '330px' }}>
                                <input type="password" name="confirmPassword" className="form-control mb-2" id="floatingConfirmPassword" placeholder="Confirm password"
                                    value={formValue.confirmPassword} onChange={handleChange} />
                                <label htmlFor="floatingConfirmPassword">Confirm password</label>
                            </div>
                            <button className="w-50 btn btn-primary mt-3" type="submit">登　録</button>
                        </div>

                    </from>
                </div>
            </div>

        </>

    )
}

