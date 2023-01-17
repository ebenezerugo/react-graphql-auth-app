import { useForm, Resolver } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {signup} from '../store/auth.slice';
import {useMutation} from '@apollo/client';
import ADD_USER from '../queries/signup.query';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


type FormValues = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
};

const resolver: Resolver<FormValues> = async (values) => {

let errors: any = {};

if (!values.first_name) {
    errors['first_name'] = {
        type: 'required',
        message: 'Firstname is required',
        }
}

if (!values.last_name) {
    errors['last_name'] = {
        type: 'required',
        message: 'Lastname is required.',
        }
}

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
        // message: [
        //     'Contains atleast one uppercase',
        //     'Contains 8 characters',
        //     'Contains atleast one symbol',
        //     'Contains atleast one number'
        // ],
        }
}

return {
    values,
    errors
};
};


const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
    
    const dispatch = useDispatch();

    const [signupFunction, {loading, error, data}] = useMutation(ADD_USER);
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            dispatch(signup(data));
            navigate("/dashboard");
        }
    }, [loading,data, dispatch, navigate]);

    const onSubmit = handleSubmit((payload) => {
        signupFunction({variables: payload});
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 mx-auto mt-5 bg-white p-5">
                    <div className="mb-3 text-center">
                        <div className="fs-3 fw-bold">Create an Account</div>
                        <div>Already have an account? <span><Link className="highlighted-text" to={'/login'}>Log in</Link></span></div>
                    </div>
                    <form className="row g-3" onSubmit={onSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="inputFirstname" className="form-label">First Name</label>
                            <input type="text" {...register("first_name")} className="form-control" id="inputFirstname" placeholder="Type here"/>
                            {errors?.first_name && <p className='text-danger'>{errors.first_name.message}</p>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputLastName" className="form-label">Last Name</label>
                            <input type="text" {...register("last_name")} className="form-control" id="inputLastName" placeholder="Type here"/>
                            {errors?.last_name && <p className='text-danger'>{errors.last_name.message}</p>}
                        </div>
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
                                    {loading ? <div className="spinner-grow" role="status"><span className="visually-hidden">Loading...</span></div> : 'Sign up' }
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

export default Signup;