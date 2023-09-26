import homepageexample from "../assets/homepage.png";
import scriptexample from "../assets/script.png";
import poster from "../assets/poster/reacttogithub-poster.gif";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function DeployReactToGHPages() {
    return (
        <>
            <div className="container p-5">

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">deploy-reactapp-to-gh-pages</li>
                    </ol>
                </nav>

                <h1 className="mt-5 mb-1">How to Deploy a React App to GitHub Pages</h1>
                <img src={poster} alt="poster" height="300px" width="500px"/>
            
                <p className="sub-heading">
                    The first step in displaying your abilities and ideas to 
                    the world in the ever changing field of web development 
                    is to create a beautiful React application. You require 
                    a trustworthy hosting service if you want to share your 
                    creation with a genuinely worldwide audience. Enter GitHub 
                    Pages, a simple and affordable method for distributing your 
                    React project and making it available to anybody with an 
                    internet connection.
                </p>
                <p className="sub-heading">
                    Between your local development environment and the worldwide 
                    internet, deployment fills the gap. It turns your React app 
                    from a static file into a functioning website that anyone can 
                    access using a web browser. This presents options for presenting 
                    your portfolio, showcasing your abilities, or establishing a 
                    digital presence for your work, blogs, or personal brand.
                </p>
                <p className="sub-heading">
                    Now, why do you want to deploy to GitHub Pages? Well, it's not 
                    only cost-free but also remarkably simple. Hosting static webpages 
                    is made simple with GitHub Pages, which also integrates with your 
                    Git workflow. Additionally, if you'd like, you may utilize your own 
                    custom domain, giving it a flexible option for both inexperienced and 
                    seasoned developers.
                </p>

                <h1 className="mt-5 mb-5">Configure your React Project</h1>
                
                <p className="fw-bold mb-4 sub-heading">
                    With your React app code committed and pushed to your GitHub repository, 
                    it's time to configure GitHub Pages to host your site. Follow these simple 
                    steps:
                </p>
                <p className="mt-5 sub-heading">
                    <span className="fw-bold fs-4">First,</span> We must include the Github Pages 
                    Dependency Package. Install gh-pages as a dev dependency via npm: 
                </p>
                <div className="example">
                    <p>npm install gh-pages --save-dev</p>
                </div>
                <p className="mt-5 sub-heading">
                    <span className="fw-bold fs-4">Second,</span> the package.json file will also 
                    need to include predeploy and deploy scripts. The React application is packaged 
                    using the predeploy script, and is then deployed using the deploy script.
                </p>
                <p className="sub-heading">
                    Scroll down to the scripts property in the package.json file and add the following 
                    commands:
                </p>
                <div className="example mt-3 mb-3">
                    <p>"predeploy" : "npm run build",</p>
                    <p>"deploy" : "gh-pages -d build",</p>
                </div>
                <h4>Visual Referrence:</h4>
                <img src={scriptexample} alt="script-example" className="mt-3"/>
                <p className="mt-5 mb-4 sub-heading">
                    <span className="fw-bold fs-4">Third,</span> We must add a homepage property with 
                    the following format to the package.json file: http://github-username.github.io/repo-name
                </p>
                <h4>Visual Referrence:</h4>
                <img src={homepageexample} alt="homepage-example"/>
                <p className="mt-5 mb-3 sub-heading">
                    All done! The package.json file has been fully configured. Let's push the code to 
                    the remote repository and commit our changes now as follows:
                </p>
                <div className="example mb-5">
                    <p>git add .</p>
                    <p>git commit -m "setup gh-pages</p>
                    <p>git push</p>
                </div>

                <p className="sub-heading">
                    Now Deploy your React project to GH Pages: at this time by typing the following 
                    command into your terminal: <span className="fw-bold">npm run deploy</span> By 
                    doing this, a bundled version of our React application will be produced and pushed 
                    to a gh-pages branch in our remote GitHub repository. The deployment process will 
                    take a moment, Once the deployment is complete, you'll see a success message in your 
                    terminal. Your React app is now live on GitHub Pages!
                </p>
                <h1 className="mt-5 mb-5">Verify Your Deployment</h1>
                <p className="fw-bold mb-5 sub-heading">
                    Before sharing your new React app with the world, it's essential to verify that the 
                    deployment was successful. Follow these steps to ensure everything is in order:
                </p>
                <p className="sub-heading mb-4"><span className="fw-bold sub-heading">1. Visit Your GitHub Pages URL:</span> Navigate to your repository, then go to Github Pages and click the live link.</p>
                <p className="sub-heading mb-4"><span className="fw-bold sub-heading">2. Explore Your App: </span> Once you've arrived at the live link, explore your React app. Verify that everything is in working order and that it complies with all criteria.</p>
                <p className="sub-heading mb-4"><span className="fw-bold sub-heading">3. Test Links and Navigation: </span> To ensure everything is working properly, click on links and test any navigation in your app.</p>
                <p className="sub-heading mb-4"><span className="fw-bold sub-heading">4. Check for Errors: </span> Watch the developer console of the browser for any faults or problems. Correct any warnings or mistakes that may show up.</p>
                <p className="sub-heading mb-5"><span className="fw-bold sub-heading">5. Share Your Site: </span> Congratulations if everything seems to be in order! Your React application has been successfully installed on GitHub Pages and is prepared for public release.</p>
                <Footer />
            </div>
        </>
    );
}

export default DeployReactToGHPages;