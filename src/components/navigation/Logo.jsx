import logo from '../../images/logo192.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <>
            <Link to='/'>
                <img src={logo} alt='Logo' id='logo-img' className='logo-img' />
            </Link>

        </>
    )
}

export default Logo;