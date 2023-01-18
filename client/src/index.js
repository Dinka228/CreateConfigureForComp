import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CompStore from "./store/CompStore";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
export const Context = createContext(null)
ReactDOM.render(
    <Context.Provider value={
        {
            comp:new CompStore()
        }
    }>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);