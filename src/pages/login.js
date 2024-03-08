/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
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
    return <div>This is the login page</div>;
}
