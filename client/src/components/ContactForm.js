// this module will be renamed "footer" and contain a contact form that is connected to an email address
// TODO: does MongoDB Atlas have any built-in email/contact functionality?
// does whichever CSS library I go with have any built-in contact/form functionality
import { useState } from "react"
import "./ContactForm.css"

const ContactForm = () => {
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDevfault()
        // Add email functionality here (send email to registered email address or store message in db and add an admin section where they can check messages)
        alert(inputs)
    }
    return (
        // <div className="contact-form">Form</div>
        <section id="contact_section" className={"bg_color contact_section-container"}>
            <div id="title_container" className={"text_rules _3bcaz"}>
                <h3 className="font_4" style={{ lineHeight: "1em" }}>Contact us:</h3>
            </div>
            <div id="address_container" className={"text_rules _3bcaz"}>
                <p className="font_5">
                    <span>
                        9115 SW Burnham St, Portland, OR 97223
                        <br></br>
                        INFO@THEKITERISES.COM
                        <br></br>
                        971-280-5084
                    </span>
                </p>
            </div>
            <div id="contact_form" className="contact_form-container">
                <form id="form" className={"bg_form form-container"} onSubmit={handleSubmit} data-np-autofill-type="identity" data-np-checked="1" data-np-watching="1">
                    <div id="user_message" className="user_message">
                        <label htmlFor="text_area-message" className="message_label">
                        </label>
                        <textarea name="message" id="text_area-message" className={"message_text input1 has-custom-focus"} rows="1" placeholder="Message *" required="" aria-required="true" aria-invalid="false" value={inputs.message || ""} onChange={handleChange}>
                        </textarea>
                    </div>
                    <div id="ty_message" className="text_rules _3bcaz">
                        <p className="font_8">Thanks for submitting!</p>
                    </div>
                    <div id="first_name" className="input_field">
                        <div className="relative_position">
                            <input type="text" name="first_name" id="input_form-first_name" className={"user_input has-custom-focus"} value={inputs.first_name || ""} onChange={handleChange} placeholder="First Name" aria-required="false" maxLength="100" aria-label="first_name" />
                        </div>
                    </div>
                    <div id="last_name" className="input_field">
                        <div className="relative_position">
                            <input type="text" name="last_name" id="input_form-last_name" className={"user_input has-custom-focus"} value={inputs.last_name || ""} onChange={handleChange} placeholder="Last Name" aria-required="false" maxLength="100" aria-label="last_name" />
                        </div>
                    </div>
                    <div id="email" className="input_field">
                        <div className="relative_position">
                            <input type="email" name="email" id="input_form-email" className={"user_input has-custom-focus"} value={inputs.email || ""} onChange={handleChange} placeholder="Email *" required="" aria-required="true" pattern="^.+@.+\.[a-zA-Z]{2,63}$" maxLength="250" aria-label="email" />
                        </div>
                    </div>
                    <div id="submit_button" className="link-rules" aria-disabled="false">
                        <button aria-disabled="false" className={"link touch_action"}>
                            <span className="link_text">Submit</span></button>
                    </div>
                </form>
            </div >
        </section >
    )
}

export default ContactForm