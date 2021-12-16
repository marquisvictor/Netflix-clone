import { Landing, Homescreen } from './pages';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userSlice';

function App() {
    const user = useSelector(selectUser);
    return <div className=''>{!user ? <Landing /> : <Homescreen />}</div>;
}

export default App;
