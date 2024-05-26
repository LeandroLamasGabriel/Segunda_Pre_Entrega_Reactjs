import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"
const NavBar = () => {
    const array = ['Procesadores', 'Memorias_Ram', 'Discos']
    return (
        <header>
            <nav>
                <div>
                    <Link to='/'><img src="../src/assets/React.png" width="50px" alt="" /></Link>
                    {
                        array.map((a) => (
                            <Link to={`/${a}`} key={a}>{a}</Link>
                        ))
                    }
                    <CartWidget className="cartwidget"/>
                </div>
            </nav>

        </header>
    )
}

export default NavBar