import React, { Component } from "react";
import './styles.css';

class ContactComponent extends Component {
  render() {
    return (
      <div className="contact">
        <div className="container">
          <form action="/action_page">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

            <label htmlFor="country">Country</label>
            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default ContactComponent;