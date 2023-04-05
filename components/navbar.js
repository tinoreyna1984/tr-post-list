import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {

    const router = useRouter();

    const logOut = () => {
        Cookies.remove("token");
        router.push('/')
    }
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" href={'/'}>Dashboard</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link className="nav-link text-light" href={'/'}>Todos</Link>
                        <Link className="nav-link text-light" href={'/destacados'}>Destacados</Link>

                    </div>
                    <div className="d-flex">
                        <button className="btn btn-danger" onClick={logOut}>Salir</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}