import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { useForm, Resolver } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {login} from '../store/auth.slice';
import LOGIN_USER from '../queries/login.query';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


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

    const dispatch = useDispatch();
    const [loginFunction, {loading, error, data}] = useMutation(LOGIN_USER);
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            dispatch(login(data));
            navigate("/dashboard");
        }
    }, [loading, data, dispatch, navigate]);

    const onSubmit = handleSubmit((payload) => {
        loginFunction({variables: payload});
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 mx-auto mt-5 bg-white p-5">
                    <div className="mb-3 text-center">
                        <div className="fs-3 fw-bold">Log in</div>
                        <div>If you have no account? <span><Link className="highlighted-text" to={'/signup'}>Sign up</Link></span></div>
                    </div>
                    <form className="row g-3" onSubmit={onSubmit}>
                        <div className="col-12">
                            <label htmlFor="inputEmail" className="form-label">Email Address</label>
                            <input type="text" {...register("email")} className="form-control" id="inputEmail" placeholder="Type your email address here"/>
                            {errors?.email && <p className='text-danger'>{errors.email.message}</p>}
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputPassword" className="form-label">Password</label>
                            <input type="password" {...register("password")} className="form-control" id="inputPassword" placeholder="Type your password here"/>
                            {errors?.password && <p className='text-danger'>{errors.password.message}</p>}
                        </div>
                        <div className="col-12">
                            <div className="d-grid gap-2">
                                <button type="submit" disabled={loading} className="btn btn-secondary">
                                    {loading ? <div className="spinner-grow" role="status"><span className="visually-hidden">Loading...</span></div> : 'Login' }
                                </button>
                            </div>
                        </div>
                        {error &&
                            <div className="col-12">
                                <div className="alert alert-danger" role="alert">
                                    {error.message}
                                </div>
                            </div>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;