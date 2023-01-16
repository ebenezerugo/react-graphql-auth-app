import { useForm, Resolver } from 'react-hook-form';

type FormValues = {
    email: string;
    password: string;
};

const resolver: Resolver<FormValues> = async (values) => {
    let errors: any = {};

    if (!values.email) {
        errors['email'] = {
            type: 'required',
            message: 'Wrong email format!',
          }
    }

    if (!values.password) {
        errors['password'] = {
            type: 'required',
            message: 'Password is required'
          }
    }

    return {
        values,
        errors
    };
}

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 mx-auto mt-5 bg-white p-5">
                    <div className="mb-3 text-center">
                        <div className="fs-3 fw-bold">Log in</div>
                        <div>If you have no account? <span className="highlighted-text">Sign up</span></div>
                    </div>
                    <form className="row g-3" onSubmit={onSubmit}>
                        <div className="col-12">
                            <label htmlFor="inputEmail" className="form-label">Email Address</label>
                            <input type="text" {...register("email")} className="form-control" id="inputEmail" placeholder="Type your email address here"/>
                            {errors?.email && <p>{errors.email.message}</p>}
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputPassword" className="form-label">Password</label>
                            <input type="password" {...register("password")} className="form-control" id="inputPassword" placeholder="Type your password here"/>
                            {errors?.password && <p>{errors.password.message}</p>}
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