import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import {logout} from '../store/auth.slice';

const NavbarComponent = () => {
    const dispatch = useDispatch();
    const fullname = useSelector((state: RootState) => {
        return `${state.auth.user?.first_name} ${state.auth.user?.last_name}`;
    })

    const logoutUser = () => {
        dispatch(logout(null));
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand  h1">Dashboard</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>
                <div className="d-flex">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {fullname}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li onClick={() => {logoutUser()}}><span className="dropdown-item pointer">Logout</span></li>
                                </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent;