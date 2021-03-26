import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="about-us container">
                    <div className="abt-img">
                    <img src="https://source.unsplash.com/random/400x400" />
                    </div>
                    <div className="abt-content">
                    <h2>Get to know about us</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa, corporis voluptates, inventore dignissimos accusamus eum officia magnam quae sed nobis explicabo, laudantium harum esse temporibus. Voluptatem nemo doloremque ea vitae in natus ut expedita?
                    </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About
