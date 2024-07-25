import ReactDOM from "react-dom/client";

import Tab from './Tab'
import Register from './Register'
import Router from "./Router"

import "./ass1.css";

const rootElement = document.getElementById('root');
const rootRef = ReactDOM.createRoot(rootElement);
rootRef.render(<Router/>);




