/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import FirebaseContext from '../context/firebase';
export default function Login() {
    const navigate = useNavigate();
    const {firebase} = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = async (event) => {};

    useEffect(() => {
        document.title = 'Login - Instagram';
    }, []);
    return (
        <div className='container flex mx-auto max-w-screen-md items-center h-screen'>
            <div className='flex w-2/4'>
                <img
                    src='/images/iphone-with-profile.jpg'
                    alt='iPhone with Instagram app'
                />
            </div>
            <div className='flex flex-col w-2/4'>
                <div className='flex flex-col items-center bg-white p-4 border border-gray-primary mb-4'>
                    <h1 className='flex justify-center w-full'>
                        <img
                            src='/images/logo.png'
                            alt='Instagram'
                            className='mt-2'
                        ></img>
                    </h1>
                    {error && (
                        <p className='mb-4 text-xs text-red-primary'>{error}</p>
                    )}
                    <form onSubmit={handleLogin} method='POST'>
                        <input
                            aria-label='Enter your email address'
                            type='text'
                            placeholder='Email address'
                            className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
                            onChange={({target}) =>
                                setEmailAddress(target.value)
                            }
                        />
                        <input
                            aria-label='Enter your password'
                            type='password'
                            placeholder='Password'
                            className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
                            onChange={({target}) => setPassword(target.value)}
                        />
                        <button
                            disabled={isInvalid}
                            type='submit'
                            className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid ? ' opacity-50' : ''}`}
                        >
                            Log in
                        </button>
                    </form>
                </div>
                <div className='flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary'>
                    <p className='text-sm'>
                        Don't have an account?{` `}
                        <Link
                            to='/signup'
                            className='font-bold text-blue-medium'
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
