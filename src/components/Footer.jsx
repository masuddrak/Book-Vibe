import { useLocation } from "react-router-dom";


const Footer = () => {
    const myCurrentPath=useLocation()
    const currenPath=myCurrentPath.pathname
    console.log(currenPath)
    return (
        <footer className={`p-10 bg-base-200 text-base-content mt-8 ${currenPath=="/listedBook"?" bottom-0 w-full":""}  ${currenPath == "/pagesToRead"?"md:absolute bottom-0 w-full": ""}`}>
            <div className="footer container mx-auto">
                <aside>
                    <h1 className="text-3xl font-extrabold"># Book Vivo</h1>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
            <hr  className="my-3"/>
            <p className="text-center">&copy; Masud Rana</p>
        </footer>
    );
};

export default Footer;