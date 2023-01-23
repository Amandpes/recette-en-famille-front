import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import {Link} from "react-router-dom";

function Sigin() {
    return (
        <>
            <Header/>
            <h3>
                <section id="principale">
                    <fieldset className="fieldset">
                        <legend className="legend" style={{color: "black"}}>Connexion</legend>

                        <form action="">
                            <div id="email">
                                <label htmlFor="email" style={{color: "black"}}>Adresse e-mail* :</label><br/>
                                <input type="email" name="email" id="mail"/><br/>
                            </div>
                            <div id="mdp">
                                <label htmlFor="mdp" style={{color: "black"}}> mot de passe* :</label><br/>
                                <input type="password" name="mdp1" id="password"/><br/>
                            </div>
                            <div id="bouton">
                                <button type="submit" name="submit" id="button" style={{fontSize: "15px"}}>Connexion
                                </button>
                            </div>

                        </form>
                    </fieldset>
                </section>
                <section className="deuxieme" style={{fontSize: "18px"}}>
                    <p style={{color: "black"}}>Pas encore inscrit ?</p>
                    <Link to="/signup" id="insc">
                       Cliquez ici
                    </Link>
                </section>
            </h3>
            <Footer/>
        </>
    )

}

export default Sigin;