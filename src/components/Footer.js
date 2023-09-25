import { Link } from "react-router-dom";

function Footer() {
    return(
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2023 lawrenceprieto.github.io</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><Link to="" className="text-body-secondary" ><i className="fa-brands fa-facebook"></i></Link></li>
                    <li className="ms-3"><Link to="" className="text-body-secondary" ><i className="fa-brands fa-linkedin"></i></Link></li>
                    <li className="ms-3"><Link to="" className="text-body-secondary" ><i className="fa-brands fa-github"></i></Link></li>
                </ul>
            </footer>
        </>
    );
}

export default Footer;