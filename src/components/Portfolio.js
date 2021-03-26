import React, { Component } from 'react'

export class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio">
  <div className="our-works container">
    <div className="card work">
      <img className="card-cover" src="https://source.unsplash.com/random/302x300" alt />               
      <div className="card-content">
        <h3>Work 1</h3>                    
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quos quia ducimus.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>
    </div>
    <div className="card work">
      <img className="card-cover" src="https://source.unsplash.com/random/300x300" alt />               
      <div className="card-content">
        <h3>Work 1</h3>                    
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quos quia ducimus.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>
    </div>
    <div className="card work">
      <img className="card-cover" src="https://source.unsplash.com/random/301x301" alt />               
      <div className="card-content">
        <h3>Work 1</h3>                    
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quos quia ducimus.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>
    </div>          
  </div>
</section>
        )
    }
}

export default Portfolio
