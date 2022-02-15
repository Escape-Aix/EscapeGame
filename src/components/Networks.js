import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faComment} from "@fortawesome/free-solid-svg-icons";

const Networks = () => {
    return (
        <section className={"networks"}>
            <div className={"mail"}>
                <FontAwesomeIcon className={"fontIcon"} icon={faEnvelope}/>
                <a href={"mailto:escape.aix.pro@gmail.com"} target={"_blank"}>Contact par email</a>
            </div>
            <div className={"twitter"}>
                <FontAwesomeIcon className={"fontIcon"} icon={faComment}/>
                <a href={""} target={""}>Contact par twitter</a>
            </div>
        </section>
    );
};

export default Networks;