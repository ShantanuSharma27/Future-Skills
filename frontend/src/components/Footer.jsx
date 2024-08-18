import "../components/Footer.css"
const Footer=()=>{
    return(
        <>
        <div className="footer">
            <div className="Abstract">
                <h3>Abstract</h3>
                Branches
            </div>
            <div className="Resources">
                <h3>Resources</h3>
                <div className="font">
                Blog <br />
                Help Center <br />
                Release Note  <br />
                Status
                </div>
            </div>
            <div className="Community">
                <h3>Community</h3>
                <div className="font">
                    Twitter <br />
                    LinkedIn <br />
                    Facebood <br />
                    Dribble <br />
                    Podcast <br />
                </div>
            </div>
            <div className="Company">
                <div className="font">
                <div>
                    <h3>Company</h3>
                    About Us <br />
                    Career <br />
                    Legal <br />
                </div>
                <br />
                <div>
                    <b>Contact Us</b> <br />
                    info@abstract.com
                </div>
                </div>
            </div>
            <div className="Copyright">
                <div className="font">
                © Copyright 2022 <br />
                Abstract Studio Design, Inc. <br />
                All rights reserved <br />
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;