import { Link } from "react-router-dom";

function Blogs() {

    return (
        <>
            <div className="container p-5">
                <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                    <div className="col-lg-6 px-0">
                        <h1 className="display-3 fst-italic">Deploy React App to Github Pages</h1>
                        <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                        <p className="lead mb-0"><Link to="/deploy-reactapp-to-ghpages" target="_blank" className="text-body-emphasis fw-bold">Continue reading...</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blogs;