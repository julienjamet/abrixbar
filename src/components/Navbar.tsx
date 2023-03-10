import { NavLink } from "react-router-dom"

export const Navbar = () => {

    return (
        <div className="navbar">
            <NavLink to="/home" className={link => (link.isActive ? "active" : "")}>
                <h4>Accueil</h4>
            </NavLink>
            <NavLink to="/association">
                <h4>Association</h4>
            </NavLink>
            <NavLink to="/season">
                <h4>Saison culturelle</h4>
            </NavLink>
            <NavLink to="/bar">
                <h4>Bar</h4>
            </NavLink>
            <NavLink to="/grocery">
                <h4>Epicerix</h4>
            </NavLink>
            <NavLink to="/project">
                <h4>Cantine de Midi</h4>
            </NavLink>
            <NavLink to="/contact">
                <h4>Contact</h4>
            </NavLink>
            <NavLink to="/partners">
                <h4>Partenaires</h4>
            </NavLink>
        </div>
    )
}