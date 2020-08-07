import React, { useState, useEffect } from 'react'
import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyLogo from "../../assets/images/icons/study.svg";
import giveClassesIcons from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import { Link } from "react-router-dom";
import "./styles.css";
import api from '../../services/api';

function Landing(): JSX.Element {
    const [totalConnections, setTotalConnections] = useState(0)

    useEffect(() => {
        api.get('/connections').then((response) => {
            const { total } = response.data;

            setTotalConnections(total);
        })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyLogo} alt="" />
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcons} alt="" />
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo" />
                </span>
            </div>
        </div>
    )
}


export default Landing;