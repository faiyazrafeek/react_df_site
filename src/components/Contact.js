import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <section id="contact">
  <div className="contact-us container">
    <div className="con-content">
      <h2 className="display-6">Feel free to talk to us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa, corporis voluptates, inventore dignissimos accusamus eum officia magnam quae sed nobis explicabo, laudantium harum esse temporibus. Voluptatem nemo doloremque ea vitae in natus ut expedita?
      </p>
    </div>
    <div className="form-right">
      <h3 className="display-6">Connect with Us!</h3>  
      <form>
         <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" />
        </div>
        <div class="mb-3">
            <label class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="3"></textarea>
        </div>
        
        <button type="button" className="btn btn-primary">Submit</button>
      </form>   
    </div>
  </div>
</section>
        )
    }
}

export default Contact
