import logo from '../logo.svg';
import './Nav.css';

function Nav() {
    return (
        <div >
            <header>
                <h1><img src={logo} className="header--logo" alt="logo" />my travel journal</h1>
            </header>
        </div>
    );
}

export default Nav;