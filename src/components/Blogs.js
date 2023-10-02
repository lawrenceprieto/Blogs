import react from "../assets/poster/reacttogithub-poster.gif";
import vite from "../assets/poster/VitetoGithubposter.gif";
import Card from "./Card";

function Blogs() {

    return (
        <>
            <div className="d-flex flex-column">
                <Card
                    title="Deploy Vite React App to Github Pages"
                    date="Oct 2"
                    description="The first step in displaying your abilities and ideas to 
                    the world in the ever changing field of web development 
                    is to create a beautiful React application. You require 
                    a trustworthy hosting service if you want to share your 
                    creation with a genuinely worldwide audience. Enter GitHub 
                    Pages, a simple and affordable method for distributing your 
                    React project and making it available to anybody with an 
                    internet connection."
                    link="deploy-vitereactapp-to-ghpages"
                    thumbnail={vite}    
                />
                <Card
                    title="Deploy React App to Github Pages"
                    date="Sept 26"
                    description="The first step in displaying your abilities and ideas to 
                    the world in the ever changing field of web development 
                    is to create a beautiful React application. You require 
                    a trustworthy hosting service if you want to share your 
                    creation with a genuinely worldwide audience. Enter GitHub 
                    Pages, a simple and affordable method for distributing your 
                    React project and making it available to anybody with an 
                    internet connection."
                    link="deploy-reactapp-to-ghpages"
                    thumbnail={react}    
                />
            </div>
        </>
    );
}

export default Blogs;