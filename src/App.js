/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Suspense, lazy} from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import * as ROUTES from './constants/routes';
const Login = lazy(() => import('./pages/login'));
function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={ROUTES.LOGIN} element={<Login />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
