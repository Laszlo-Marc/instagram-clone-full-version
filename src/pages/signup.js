/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
    createUserWithEmailAndPassword,
    getAuth,
    updateProfile,
} from 'firebase/auth';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';
export default function Signup() {
    const navigate = useNavigate();
    const {firebase} = useContext(FirebaseContext);
    const [userName, setUserName] = useState('');
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleSignUp = async (event) => {
        event.preventDefault();
        const auth = getAuth(firebase);
        const firestore = getFirestore(firebase);

        try {
            // Create user account
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                emailAddress,
                password,
            );

            // Update user profile with username
            await updateProfile(auth.currentUser, {
                displayName: userName.toLowerCase(),
            });

            // Add user data to Firestore
            await addDoc(collection(firestore, 'users'), {
                userId: userCredential.user.uid,
                username: userName.toLowerCase(),
                fullName,
                emailAddress: emailAddress.toLowerCase(),
                following: [],
                followers: [],
                dateCreated: Date.now(),
            });

            console.log('Sign-up successful', userCredential.user);
            navigate(ROUTES.DASHBOARD);
        } catch (error) {
            setError(error.message);
        }
    };
    useEffect(() => {
        document.title = 'Sign up - Instagram';
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
                    <form
                        onSubmit={(event) => handleSignUp(event)}
                        method='POST'
                    >
                        <input
                            aria-label='Enter your username'
                            type='text'
                            placeholder='Username'
                            className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
                            onChange={({target}) => setUserName(target.value)}
                            value={userName}
                        />
                        <input
                            aria-label='Enter your full name'
                            type='text'
                            placeholder='Full name'
                            className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
                            onChange={({target}) => setFullName(target.value)}
                            value={fullName}
                        />
                        <input
                            aria-label='Enter your email address'
                            type='text'
                            placeholder='Email address'
                            className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
                            onChange={({target}) =>
                                setEmailAddress(target.value)
                            }
                            value={emailAddress}
                        />
                        <input
                            aria-label='Enter your password'
                            type='password'
                            placeholder='Password'
                            className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
                            onChange={({target}) => setPassword(target.value)}
                            value={password}
                        />
                        <button
                            disabled={isInvalid}
                            type='submit'
                            className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid ? ' opacity-50' : ''}`}
                        >
                            Sign up
                        </button>
                    </form>
                </div>
                <div className='flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary'>
                    <p className='text-sm'>
                        Have an account?{` `}
                        <Link
                            to={ROUTES.LOGIN}
                            className='font-bold text-blue-medium'
                        >
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
