import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {

    // const [loginUserEmail, setLoginUserEmail] = useState('')
    // const [token] = UseToken(loginUserEmail)

    const { signIn } = useContext(AuthContext)

    const [loginError, setLoginError] = useState('')

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleLogIn = data => {
        reset()
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                // setLoginUserEmail(user?.email)
                toast.success('Login Successsfully')
                navigate(from, {replace: true})
            })
            .catch(err => setLoginError(err.message))
    };


    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Log In</h2>
                <form onSubmit={handleSubmit(handleLogIn)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">E-mail</span>
                        </label>
                        <input type="email" {...register("email", { required: 'Email Address is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password",
                            {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 caracter or longer' },
                                // pattern:{value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[$@])/, message: 'Passwor should be strong'}
                            })
                        }
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <input className='btn bg-teal-500 w-full mt-5 hover:bg-blue-400 border-0' value='Log In' type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Coffee Shop <Link className='text-emerald-400' to='/register'>Please Register</Link></p>
                <div className="divider">OR</div>
                {/* <Google></Google> */}
            </div>
        </div>
    );
};

export default Login;