
const Login = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 mx-auto mt-5 bg-white p-5">
                    <div className="mb-3 text-center">
                        <div className="fs-3 fw-bold">Log in</div>
                        <div>If you have no account? <span className="highlighted-text">Sign up</span></div>
                    </div>
                    <form className="row g-3">
                        <div className="col-12">
                            <label htmlFor="inputEmail" className="form-label">Email Address</label>
                            <input type="text" className="form-control" id="inputEmail" placeholder="Type your email address here"/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="Type your password here"/>
                        </div>
                        <div className="col-12">
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-secondary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;