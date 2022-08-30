// TODO: This component will be deleted, but it is currently the navbar that appears in the DOM
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <header>
            <div className='container'>
                <Link to='/'>
                    <h1>The Kite Rises</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar