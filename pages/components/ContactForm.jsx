import { useState } from 'react';

const ContactForm = () => {
    const [state, setState] = useState({ name: '', info: '' }); // define the state variable

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, info } = state;
        const subject = 'Contact Form Submission';
        const body = `Name: ${name}\nInfo: ${info}`;
        const mailtoLink = `mailto:neway666@yahoo.com.hk?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh', // Full height of the viewport
            // backgroundColor: '#f8f8f8' // Optional: add a background color
        }}>
            <form onSubmit={handleSubmit} style={{
                width: '400px', // Set a fixed width for the form
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                // backgroundColor: '#fff' // Optional: add a background color to the form
            }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '10px' }}>Name:</label>
                <input type="text" id="name" name="name" value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    outline: 'none'
                }} />
                <label htmlFor="info" style={{ display: 'block', marginBottom: '10px' }}>Info:</label>
                <textarea id="info" name="info" value={state.info} onChange={(e) => setState({ ...state, info: e.target.value })} rows="10" style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    outline: 'none'
                }} />
                <button type="submit" style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#4CAF50',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>Send</button>
            </form>
        </div>
    );
};

export default ContactForm;