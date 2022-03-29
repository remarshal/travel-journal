import logo from '../logo.svg';
import './Nav.css';

function Nav() {
    return (
        <div >
            <header>
                <img src={logo} className="header--logo" alt="logo" />
                <h1 className='header--text'>my travel journal</h1>
            </header>
        </div>
    );
}

export default Nav;