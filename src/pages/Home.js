import React from 'react';
import Navigation from "../components/Navigation";
import Presentation from "../components/Presentation";
import Introduction from "../components/Introduction";
import BorderAnimation from "../components/BorderAnimation";
import Box from "../components/Box";

// Image
import icon1 from "../assets/img/icon-developpement-durable.png";
import icon2 from "../assets/img/display.png";


const Home = () => {
    return (

        <div>
            <Navigation />
            <Presentation />
            <main className={"main"}>
                <Introduction /> {/* For introduction */}
                <BorderAnimation /> {/* For border animation */}
                <section className={"container"}>
                    <Box title={"Pédagogique"} link={icon1}
                         description={
                             "Lorem Ipsum is simply dummy text of the printing and typesetting\n" +
                             "industry.\n" + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n" +
                             "when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                         }
                    />
                    <Box title={"Numérique"} link={icon2}
                         description={
                             "Lorem Ipsum is simply dummy text of the printing and typesetting\n" +
                             "industry.\n" + "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n" +
                             "when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                         }
                    />
                </section>
            </main>
        </div>
    );
};

export default Home;