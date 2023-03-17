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
        <section id="contactSection" className="sectionBgColor contactSection-container" data-testid="section-container">
            <div id="contactUsContainer" className="textRules _3bcaz" data-testid="richTextElement">
                <h3 className="font_4" style={{ lineHeight: "1em" }}>Contact us:</h3>
            </div>
            <div id="addressContainer" className="textRules _3bcaz" data-testid="richTextElement">
                <p className="font_5">
                    <span>9115 SW Burnham St, Portland, OR 97223
                        INFO@THEKITERISES.COM
                        971-280-5084
                    </span>
                </p>
            </div>
            <div id="contactFormContainer" className="contactFormContainer-container">
                <form id="contactForm" className="form contactForm-container" onSubmit={handleSubmit} data-np-autofill-type="identity" data-np-checked="1" data-np-watching="1">
                    <div id="messageInput" className="contactFormMessage">
                        <label htmlFor="textarea_messageInput" className="contactFormMessageLabel">
                        </label>
                        <textarea name="message" id="textarea_messageInput" className="contactFormMessageText has-custom-focus" rows="1" placeholder="Message *" required="" aria-required="true" value={inputs.message || ""} onChange={handleChange}>
                        </textarea>
                    </div>
                    <div id="contactFormSubmitMessage" className="textRules _3bcaz" data-testid="richTextElement">
                        <p className="font_8">Thanks for submitting!</p>
                    </div>
                    <div id="contactFormFirstName" className="formUserInfo">
                        <div className="formUserInfoInput-Container">
                            <input type="text" name="firstName" id="input_contactFormFirstName" className="formUserInfoInput has-custom-focus" value={inputs.firstName || ""} onChange={handleChange} placeholder="First Name" aria-required="false" maxLength="100" aria-label="First Name" data-np-autofill-type="name_first" data-np-uid="d8fac890-1100-422d-90ad-bef24062bff2" autoComplete="off" data-np-checked="1" />
                            <span data-np-uid="d8fac890-1100-422d-90ad-bef24062bff2" style={{ width: "24px", minWidth: "24px", height: "24px", backgroundImage: "url(&quot;chrome-extension://fooolghllnmhmmndgjiamiiodkpenpbb/assets/manifestIcons/icon.svg&quot;)", backgroundRepeat: "no-repeat", backgroundPosition: "left center", backgroundSize: "auto", border: "none", display: "inline", visibility: "visible", position: "absolute", cursor: "pointer", zIndex: "1001", padding: "0px", transition: "none 0s ease 0s", pointerEvents: "all", right: "0px", left: "464.609px", top: "16px" }}>
                            </span>
                        </div>
                    </div>
                    <div id="contactFormLastName" className="formUserInfo">
                        <div className="formUserInfoInput-Container">
                            <input type="text" name="lastName" id="input_contactFormLastName" className="formUserInfoInput has-custom-focus" value={inputs.lastName || ""} onChange={handleChange} placeholder="Last Name" aria-required="false" maxLength="100" aria-label="Last Name" data-np-autofill-type="name_last" data-np-uid="8a46f6d9-7c27-4120-a7f9-5939ff303403" autoComplete="off" data-np-checked="1" />
                            <span data-np-uid="8a46f6d9-7c27-4120-a7f9-5939ff303403" style={{ width: "24px", minWidth: "24px", height: "24px", backgroundImage: "url(&quot;chrome-extension://fooolghllnmhmmndgjiamiiodkpenpbb/assets/manifestIcons/icon.svg&quot;)", backgroundRepeat: "no-repeat", backgroundPosition: "left center", backgroundSize: "auto", border: "none", display: "inline", visibility: "visible", position: "absolute", cursor: "pointer", zIndex: "1001", padding: "0px", transition: "none 0s ease 0s", pointerEvents: "all", right: "0px", left: "464.609px", top: "16px" }}>
                            </span>
                        </div>
                    </div>
                    <div id="contactFormEmail" className="formUserInfo _65cjg">
                        <div className="formUserInfoInput-Container">
                            <input type="email" name="email" id="input_contactFormEmail" className="formUserInfoInput has-custom-focus" value={inputs.email || ""} onChange={handleChange} placeholder="Email *" required="" aria-required="true" pattern="^.+@.+\.[a-zA-Z]{2,63}$" maxLength="250" aria-label="Email *" data-np-autofill-type="identity_email" data-np-uid="8a64e438-bf44-459d-9ffd-625d77d5b76b" autoComplete="off" data-np-checked="1" />
                            <span data-np-uid="8a64e438-bf44-459d-9ffd-625d77d5b76b" style={{ width: "24px", minWidth: "24px", height: "24px", backgroundImage: "url(&quot;chrome-extension://fooolghllnmhmmndgjiamiiodkpenpbb/assets/manifestIcons/icon.svg&quot;)", backgroundRepeat: "no-repeat", backgroundPosition: "left center", backgroundSize: "auto", border: "none", display: "inline", visibility: "visible", position: "absolute", cursor: "pointer", zIndex: "1001", padding: "0px", transition: "none 0s ease 0s", pointerEvents: "all", right: "0px", left: "464.609px", top: "16px" }}>
                            </span></div></div>
                    <div className="clickableElementContainer" id="submitButtonContainer" aria-disabled="false">
                        <button aria-disabled="false" data-testid="buttonElement" className="buttonElement">
                            <span className="buttonText">Submit</span></button>
                    </div>
                </form>
            </div >
        </section >

        // <section id="comp-ka50ygve3_r_comp-k6gjwdge" className="_3uJnK comp-ka50ygve3_r_comp-k6gjwdge-container undefined" data-testid="section-container">
        //     <div id="comp-ka50ygve3_r_comp-k9sgts2o" className="textRules _3bcaz" data-testid="richTextElement">
        //         <h3 className="font_4" style={{ lineHeight: "1em" }}>Contact us:</h3>
        //     </div>
        //     <div id="comp-ka50ygve3_r_comp-k9sh4qe5" className="textRules _3bcaz" data-testid="richTextElement">
        //         <p className="font_5">
        //             <span>9115 SW Burnham St, Portland, OR 97223
        //                 INFO@THEKITERISES.COM
        //                 971-280-5084
        //             </span>
        //         </p>
        //     </div>
        //     <div id="comp-ka50ygve3_r_comp-k9siraxc" className="comp-ka50ygve3_r_comp-k9siraxc-container">
        //         <form id="comp-ka50ygve3_r_comp-k9siraxp" className="_2FOa5 comp-ka50ygve3_r_comp-k9siraxp-container" onSubmit={handleSubmit} data-np-autofill-type="identity" data-np-checked="1" data-np-watching="1">
        //             <div id="messageInput" className="_1kepl _22Vl0">
        //                 <label htmlFor="textarea_messageInput" className="_20uhs">
        //                 </label>
        //                 <textarea name="message" id="textarea_messageInput" className="_1VWbH has-custom-focus" rows="1" placeholder="Message *" required="" aria-required="true" value={inputs.message || ""} onChange={handleChange}>
        //                 </textarea>
        //                 </div>
        //             <div id="comp-ka50ygve3_r_comp-k9sirayt1" className="textRules _3bcaz" data-testid="richTextElement">
        //                 <p className="font_8">Thanks for submitting!</p>
        //                 </div>
        //             <div id="comp-ka50ygve3_r_comp-k9siraya" className="nK06J">
        //                 <div className="XRJUI">
        //                     <input type="text" name="firstName" id="input_comp-ka50ygve3_r_comp-k9siraya" className="_1SOvY has-custom-focus" value={inputs.firstName || ""} onChange={handleChange} placeholder="First Name" aria-required="false" maxLength="100" aria-label="First Name" data-np-autofill-type="name_first" data-np-uid="d8fac890-1100-422d-90ad-bef24062bff2" autoComplete="off" data-np-checked="1"/>
        //                         <span data-np-uid="d8fac890-1100-422d-90ad-bef24062bff2" style={{ width: "24px", minWidth: "24px", height: "24px", backgroundImage: "url(&quot;chrome-extension://fooolghllnmhmmndgjiamiiodkpenpbb/assets/manifestIcons/icon.svg&quot;)", backgroundRepeat: "no-repeat", backgroundPosition: "left center", backgroundSize: "auto", border: "none", display: "inline", visibility: "visible", position: "absolute", cursor: "pointer", zIndex: "1001", padding: "0px", transition: "none 0s ease 0s", pointerEvents: "all", right: "0px", left: "464.609px", top: "16px" }}></span>
        //                     </div>
        //                     </div>
        //                     <div id="comp-ka50ygve3_r_comp-kaggp2k5" className="nK06J">
        //                         <div className="XRJUI">
        //                         <input type="text" name="lastName" id="input_comp-ka50ygve3_r_comp-kaggp2k5" className="_1SOvY has-custom-focus" value={inputs.lastName || ""} onChange={handleChange} placeholder="Last Name" aria-required="false" maxLength="100" aria-label="Last Name" data-np-autofill-type="name_last" data-np-uid="8a46f6d9-7c27-4120-a7f9-5939ff303403" autoComplete="off" data-np-checked="1"/>
        //                             <span data-np-uid="8a46f6d9-7c27-4120-a7f9-5939ff303403" style={{width: "24px", minWidth: "24px", height: "24px", backgroundImage: "url(&quot;chrome-extension://fooolghllnmhmmndgjiamiiodkpenpbb/assets/manifestIcons/icon.svg&quot;)", backgroundRepeat: "no-repeat", backgroundPosition: "left center", backgroundSize: "auto", border: "none", display: "inline", visibility: "visible", position: "absolute", cursor: "pointer", zIndex: "1001", padding: "0px", transition: "none 0s ease 0s", pointerEvents: "all", right: "0px", left: "464.609px", top: "16px"}}>
        //                             </span>
        //                             </div>
        //                             </div>
        //             <div id="comp-ka50ygve3_r_comp-k9sirayz3" className="nK06J _65cjg">
        //                 <div className="XRJUI">
        //                     <input type="email" name="email" id="input_comp-ka50ygve3_r_comp-k9sirayz3" className="_1SOvY has-custom-focus" value={inputs.email || ""} onChange={handleChange} placeholder="Email *" required="" aria-required="true" pattern="^.+@.+\.[a-zA-Z]{2,63}$" maxLength="250" aria-label="Email *" data-np-autofill-type="identity_email" data-np-uid="8a64e438-bf44-459d-9ffd-625d77d5b76b" autoComplete="off" data-np-checked="1"/>
        //                         <span data-np-uid="8a64e438-bf44-459d-9ffd-625d77d5b76b" style={{ width: "24px", minWidth: "24px", height: "24px", backgroundImage: "url(&quot;chrome-extension://fooolghllnmhmmndgjiamiiodkpenpbb/assets/manifestIcons/icon.svg&quot;)", backgroundRepeat: "no-repeat", backgroundPosition: "left center", backgroundSize: "auto", border: "none", display: "inline", visibility: "visible", position: "absolute", cursor: "pointer", zIndex: "1001", padding: "0px", transition: "none 0s ease 0s", pointerEvents: "all", right: "0px", left: "464.609px", top: "16px"}}>
        //                         </span></div></div>
        //     <div className="_3vc75" id="comp-ka50ygve3_r_comp-k9sirayq" aria-disabled="false">
        //         <button aria-disabled="false" data-testid="buttonElement" className="_3wqEk">
        //             <span className="_1Qnnq">Submit</span></button>
        //     </div>
        // </form>
        //             </div >
        //         </section >
    )
}

export default ContactForm