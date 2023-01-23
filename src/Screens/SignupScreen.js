import React, {useState} from 'react';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import {Link} from "react-router-dom";


export function SigninScreen() {
    const [isFamily, setIsFamily] = useState(false)
    return (

        <>
            <Header/>
            <section>
                <fieldset class="fieldset">
                    <legend class="legend">Inscription</legend>

                    <form action="">
                        <div id="email">
                            <label for="email">Votre adresse e-mail* :</label>
                            <input type="email" name="email" id="mail"/><br/>
                        </div>
                        <br/>
                        <div id="nom">
                            <label for="text">Votre nom *:</label>
                            <input type="text" name="nom" id="nomI"/><br/>
                        </div>
                        <br/>
                        <div id="prenom">
                            <label for="text">Votre prénom *:</label>
                            <input type="text" name="prénom" id="prénomI"/><br/>
                        </div>
                        <br/>
                        <div id="mdp">
                            <label for="password"> Votre mot de passe* :</label>
                            <input type="password" id="password" name="password" minlength="8" required/>
                        </div>
                        <br/>
                        <div id="mdp2">
                            <label for="password"> Confimer votre mot de passe* :</label>
                            <input type="password" id="password2" name="password2" minlength="8" required/>
                        </div>
                        <br/>
                        <div id="check">
                            <label for="check">Faites vous déjà partie d'une famille ?</label>
                            <input type="radio" id="oui" name="family" onClick={() => setIsFamily(true)}/>
                            <label for="check">Oui</label>
                            <input type="radio" id="non" name="family" onClick={() => setIsFamily(false)}/>
                            <label for="check">Non</label>
                        </div>
                        <br/>

                        {isFamily && (
                            <>
                                <div id="inscrit">
                                    <label htmlFor="text">Entrez votre code famille:</label>
                                    <input type="text" name="code" id="code"/><br/>
                                </div>
                                <br/>
                                <div id="non-inscrit">
                                    <label htmlFor="text">votre code famille:</label>
                                    <input type="text" name="newcode" id="newcode"/><br/>
                                </div>
                                <br/>
                                <div id="invit">
                                    <label htmlFor="email">Invitez les membres de votre famille* :</label>
                                    <input type="email" name="email" id="mail"/><br/>
                                </div>
                            </>
                        )}


                        <div id="bouton">
                            <button type="submit" name="submit" id="button">Inscription</button>
                        </div>
                    </form>
                </fieldset>
            </section>
            <section class="deuxieme">
                <p>déjà inscrit ?</p>
                <Link to="/login" id="insc">
                    Cliquez ici
                </Link>
            </section>
            <Footer/>
        </>
    )
}