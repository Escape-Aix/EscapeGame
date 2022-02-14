import React from 'react';
import Navigation from "../components/Navigation";
import Presentation from "../components/Presentation";
import Introduction from "../components/Introduction";
import BorderAnimation from "../components/BorderAnimation";
import Box from "../components/Box";

// Image
import icon1 from "../assets/img/icon-developpement-durable.png";
import icon2 from "../assets/img/display.png";
import Footer from "../components/Footer";


const Home = () => {
    return (

        <div>
            <Navigation />
            <Presentation />
            <main className={"main"}>
                <Introduction
                    firstTitle={"Notre entreprise de création"}
                    mainTitle={"d'Escape Game Numérique"}
                    description={<text>
                        Escape Aix est une start-up situé à Aix-en-Provence,<br/>
                        vous proposant de nombreux escape game immersif en ligne.
                    </text>}


                /> {/* For introduction */}
                <BorderAnimation /> {/* For border animation */}
                <section className={"container"}>
                    <Box title={"Pédagogique"} link={icon1}
                         description={<text>
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </text>}

                    />
                    <Box title={"Numérique"} link={icon2}
                         description={<text>
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                         </text>}
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;