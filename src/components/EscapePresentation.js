import React from 'react';

const EscapePresentation = props => {
    return (
        <section className={"nos-scenario"}>
            <div className={"first"}>
                <img className={"picture"} src={props.link} alt={"image"}/>
                <p className={"time"}>{props.time} min</p>
                <p className={"lang"}>{props.lang}</p>
                <p className={"player"}>{props.player} joueur(s)</p>
                <p className={"purpose"}>- {props.firstPurpose}</p>
                <p className={"purpose"}>- {props.secondPurpose}</p>
            </div>
            <div className="description">
                <h3 className="title-first">{props.title}</h3>
                <p className="para-first">{props.description}</p>
            </div>
        </section>
    );
};

export default EscapePresentation;