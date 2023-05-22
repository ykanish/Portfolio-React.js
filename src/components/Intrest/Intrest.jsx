import React from "react";
import Section from "../shared/section/Section";
import './style.scss'

function Intrest() {
    return (
        <div>
            <Section
                background="dark"
                title="Intrests"
                id="intrest"
            >
                <div className="intrest-item">
                    <p className="content">
                        Apart from being a web development enthusiast, I enjoy
                        most of my time reading and exploring stuffs. I love
                        being in nature and getting more in touch with peace.
                        When forced indoors, I follow a number of sci-fi and
                        fantasy genre movies and OTT shows, I love writing
                        sometimes, and I spend a large amount of my free time
                        exploring the latest technology advancements in the web
                        development & computer science world.
                    </p>
                </div>
            </Section>
        </div>
    );
}

export default Intrest;
