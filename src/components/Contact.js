import emailjs, { sendForm } from "emailjs-com";

const Contact = () => {
    function sendEmail ( e ) {
        e.preventDefault();

        emailjs.sendForm( 'service_hd6806v', 'template_b9y3pdx', e.target, 'Zl368Brpq3TROfItg' ).then( res => {
            console.log( res );
        } ).catch( err => console.log( err ) );
        e.target.reset()
    }

    return (

        <form onSubmit={ sendEmail }>
            <h2>Talk to us! We will be glad to here your views!</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input name="name" type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input name="user-email" type="email" id="email" required />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="message" required />
            </div>
            <input type="submit" value='send' className="form-control" />
        </form>
    );
};

export default Contact;