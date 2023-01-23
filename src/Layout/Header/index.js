import React from "react"

const Header = () => {
    return(
    <div className="container-fluid sticky-top ">
        <div className="row ">
            <div className="col-12 col-md-12 col-lg-12 col-xxl-12 ">
                <nav className="navbar bg-light img" >
                    <div className="container-fluid d-flex justify-content-center">
                        <a className="navbar-brand " href="./index.html">
                            <div img src="./Asset/logoRecette-removebg-preview.png" alt="Logo" width="120" height="120"
                                className="d-inline-block align-center rounded-circle custom-shadow">
                            </div>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
)
};

export default Header;