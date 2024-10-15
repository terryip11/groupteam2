import "../../app/globals.css";
import React from 'react'


const ContactForm = () => {
    return (
    <div>
        <h2>Contact Us for further requirement</h2>

        <form action="/action_page.php">
            <label htmlFor="fname">Name or ID:</label><br />
            <input type="text" id="fname" name="fname" defaultValue="John" /><br />
            <label htmlFor="lname">Your Message:</label><br />
            <input type="text" id="lname" name="lname" defaultValue="Doe" /><br /><br />
            <input type="submit" value="Submit" />
        </form>
    </div>
)
}
export default ContactForm;