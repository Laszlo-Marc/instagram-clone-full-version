import ReactDOM from 'react-dom/client';
import App from './App';
import FirebaseContext from './context/firebase';
import { FieldValue, firebase } from './lib/fb';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseContext.Provider value={{FieldValue,firebase}}>
        <App />
    </FirebaseContext.Provider>
);

//client side rendered app:react
//database which is Firebase
//react-loading-skeleton
//tailwind

//architecture
//src
//->components,
//->constants,
//->context,
//->helpers,
//->hooks,
//->lib(firebase is going to live here),
//->services(firebase functions in here),
//->styles(tailwind's folder (app/tailwind))
