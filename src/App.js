/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {StrictMode, Suspense, lazy} from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import * as ROUTES from './constants/routes';
const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
function App() {
    return (
        <StrictMode>
            <Router>
                <Suspense
                    fallback={
                        <div
                            role='status'
                            className='flex justify-center items-center h-screen'
                        >
                            Loading...
                        </div>
                    }
                >
                    <Routes>
                        <Route path={ROUTES.LOGIN} element={<Login />} />
                        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
                    </Routes>
                </Suspense>
            </Router>
        </StrictMode>
    );
}

export default App;
