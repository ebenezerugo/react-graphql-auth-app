import { useForm, Resolver } from 'react-hook-form';

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
    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 mx-auto mt-5 bg-white p-5">
                    <div className="mb-3 text-center">
                        <div className="fs-3 fw-bold">Create an Account</div>
                        <div>Already have an account? <span className="highlighted-text">Log in</span></div>
                    </div>
                    <form className="row g-3" onSubmit={onSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="inputFirstname" className="form-label">First Name</label>
                            <input type="text" {...register("first_name")} className="form-control" id="inputFirstname" placeholder="Type here"/>
                            {errors?.first_name && <p>{errors.first_name.message}</p>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputLastName" className="form-label">Last Name</label>
                            <input type="text" {...register("last_name")} className="form-control" id="inputLastName" placeholder="Type here"/>
                            {errors?.last_name && <p>{errors.last_name.message}</p>}
                        </div>
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
                                <button type="submit" className="btn btn-secondary">Sign up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;