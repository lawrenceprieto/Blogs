import { Link } from "react-router-dom";

function Card(props) {
    return (
        <>
            <div className="container p-5">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" style={{maxHeight: "400px"}}>
                    <div className="col p-4 d-flex flex-column position-static">
                        <h3 className="mb-0 mt-3">{props.title}</h3>
                        <div className="mb-4 text-body-secondary">{props.date}</div>
                            <p className="card-text mb-auto overflow" style={{maxHeight: "100px"}}>{props.description}</p>
                            <Link to={props.link} className="mt-4 icon-link gap-1 icon-link-hover stretched-link">
                                Continue reading
                            </Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                        <img src={props.thumbnail} alt="thumbnail" className="bd-placeholder-img" width="500" height="250" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;