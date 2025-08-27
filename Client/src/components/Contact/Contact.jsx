import React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"


const Contact = () => {
  const [showModal, setShowModal] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (e) => {
    setShowModal(true)
  }

  return (

    <div id="main">

      <div className="w3-container" id="contact" style={{ margintop: "75px" }}>
        <hr />
        <h1 className="w3-xxxlarge"><b><i><i className="bi bi-stars"></i>Contact Us<i className="bi bi-stars"></i></i></b></h1>
        <p className="w3-xlarge"><i><b>Do you have questions about the services we offer? Please Fill out the form below and fill us in with the details. We will get back to you as soon as possible. We love meeting new people!</b></i></p>


        <form onSubmit={handleSubmit(onSubmit)}>


          <div className="w3-section">
            <label className="w3-large"><i>First Name</i></label>
            {errors.firstName && errors.firstName.type === 'minLength' && (<span className='error-span'>First Name is required.</span>)}
            {errors.firstName && errors.firstName.type === 'required' && (<span className='error-span'>First Name is required.</span>)}
            <input className="w3-input w3-border w3-round input" type="text" name="firstName"
              {...register('firstName', { required: true, minLength: 2 })} />

          </div>


          <div className="w3-section">
            <label className="w3-large"><i>Last Name</i></label>
            {errors.lastName && errors.lastName.type === 'minLength' && (<span className='error-span'>Last Name is required.</span>)}
            {errors.lastName && errors.lastName.type === 'required' && (<span className='error-span'>Last Name is required.</span>)}
            <input className="w3-input w3-border w3-round" type="text" name="lastName" {...register('lastName', { required: true, minLength: 2 })} />

          </div>


          <div className="w3-section">
            <label className="w3-large"><i>Phone</i></label>
            {errors.number && errors.number.type === 'minLength' && (<span className='error-span'>Phone Number is required and must be 10 digits.</span>)}
            {errors.number && errors.number.type === 'required' && (<span className='error-span'>Phone Number is required.</span>)}
            <input type="text" name="number" {...register('number', {
              required: true, minLength: 10, pattern: {
                value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                message: "Phone number is required."
              }
            })} />

          </div>


          <div className="w3-section">
            <label className="w3-large"><i>Email</i></label>
            {errors.email && errors.email.type === 'required' && (<span className='error-span'>Email is required and must be Valid.</span>)}
            {errors.email && errors.email.type === 'pattern' && (<span className='error-span'>Email is not Valid.</span>)}
            <input className="w3-input w3-border w3-round" type="text" name="email" {...register('email', {
              required: true, pattern: {
                value: /^[^@ ]+[^@ ]+|.[^@ .]{2,}$/,
                message: "Email is not valid."
              }
            })} />

          </div>


          <div className="w3-section">
            <label className="w3-large"><i>Message</i></label>
            <input className="w3-input w3-border w3-round" type="text" name="message" {...register('message', { required: true, maxLength: 500 })} />
            {errors.number && errors.number.type === 'maxLength' && (<span className='error-span'>Maximum length is 500 characters.</span>)}
          </div>


          <button type="submit" id="sendBtn" className="w3-button w3-block w3-padding-medium w3-margin-bottom w3-hover-pink w3-btn w3-round-xxlarge schBtn"><i>Send Message</i></button>
        </form>
      </div>

      {showModal && <div id="myModal" className="modal" style={{ display: showModal ? "block" : "none" }}>
        <div className="modal-content">
          <div className="modal-header">
            <span className="close">&times;</span>
          </div>
          <div className="modal-body">
            <p className="modal-body"><i><b>Thank You For Your Request</b></i></p>
            <p className="modal-body"><i><b>We Will Contact You Soon</b></i></p>
          </div>
          <div className="modal-footer">
            <h3 className="logo glow"><i><i className="bi bi-stars"></i>Sparkling Clean<i className="bi bi-stars"></i></i></h3>
            <button className="closeBtn w3-round" onClick={() => setShowModal(false)}><i>Close</i></button>
          </div>
        </div>
      </div>}

    </div>


  )
}

export default Contact