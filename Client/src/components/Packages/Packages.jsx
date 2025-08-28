import React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"

const Packages = () => {

    const [showSchedule, setShowSchedule] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm()



    const scheduleSubmit = () => {
        console.log(scheduleSubmit)
        setShowSchedule(true)
        setShowSuccess(true)
    }

    const handleCancel = () => {
        setShowSchedule(false)
        setShowSuccess(false)
    }


    return (
        <div id="main">
            <div className="w3-container" id="packages">

                <hr />
                <h1 className="w3-xxxlarge"><b><i><i className="bi bi-stars"></i>Packages<i className="bi bi-stars"></i></i></b></h1>
                <p className="w3-xlarge"><i><b>Competitive pricing for quality cleaning services. We are dedicated to keeping our customer satisfied. Homes over 2500 sq ft please call for pricing. We also provide other cleaning services such as:  laundry services, yard cleaning, garage cleaning, carpet cleaning, and car cleaning/detailing. Please call for pricing on these additional services available. We offer discounted pricing for monthly, weekly, and bi-weekly regular customers. We look forward to hearing from you soon.</b></i></p>
            </div>

 {/* <!-- Different Packages Available --> */}
            <div className="w3-row-padding">
                <div className="w3-half w3-margin-bottom">
                    <ul className="w3-ul w3-light-grey w3-center" style={{ border: "10px solid deeppink" }}>
                        <li className="w3-xlarge w3-padding-32 schBtn"><i>Basic Cleaning</i></li>
                        <li className="w3-padding-16 w3-large ">Up To 4 hours of Cleaning</li>
                        <li className="w3-padding-16 w3-large ">Up To 1500 Sq Ft</li>
                        <li className="w3-padding-16 ">Sweeping, mopping, vacuuming, dusting, window ledges, kitchen counters, trash, glass doors/sliding back door and, polish wood furniture. <br /> Bathrooms include: sink, tub/shower, toilets, mirrors, floors.</li>
                        <li className="w3-padding-16 w3-large ">We Bring All Cleaning Supplies</li>
                        <li className="w3-padding-16 w3-large ">Good deal!!</li>
                        <li className="w3-padding-16 w3-large ">
                            <h2>$ 99</h2>
                            <span className="w3-large ">Up To 1500 Sq Ft</span>
                        </li>
                        <li className="w3-light-grey w3-padding-24">
                            <button className="w3-button w3-padding-large w3-hover-pink w3-btn w3-round-xxlarge schBtn" onClick={() => setShowSchedule(true)}><i>Schedule Now</i></button>
                        </li>
                    </ul>
                </div>


                <div className="w3-half">
                    <ul className="w3-ul w3-light-grey w3-center" style={{ border: "10px solid deeppink" }}>
                        <li className="w3-xlarge w3-padding-32 schBtn"><i>Deep Cleaning</i></li>
                        <li className="w3-padding-16 w3-large ">8 hours of Cleaning</li>
                        <li className="w3-padding-16 w3-large ">Up To 1500 Sq Ft</li>
                        <li className="w3-padding-16 ">Sweeping, mopping, vacuuming, dusting, window ledges, windows, blinds, light fixetures, kitchen counters, kitchen appliances, oven, trash, polish wood furniture, door handles, door frames. Bathrooms include: sink, tub/shower, toilets, mirrors, floors.</li>
                        <li className="w3-padding-16 w3-large ">We Bring All Cleaning Supplies</li>
                        <li className="w3-padding-16 w3-large ">GREAT deal!!</li>
                        <li className="w3-padding-16 w3-large ">
                            <h2>$ 149</h2>
                            <span className="w3-large">Up To 1500 Sq Ft</span>
                        </li>
                        <li className="w3-light-grey w3-padding-24">
                            <button className="w3-button w3-padding-large w3-hover-pink w3-btn w3-round-xxlarge schBtn" onClick={() => setShowSchedule(true)}><i>Schedule Now</i></button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w3-row-padding">
                <div className="w3-half w3-margin-bottom">
                    <ul className="w3-ul w3-light-grey w3-center" style={{ border: "10px solid deeppink" }}>
                        <li className="schBtn w3-xlarge w3-padding-32"><i>Basic Cleaning</i></li>
                        <li className="w3-padding-16 w3-large ">4 hours of Cleaning</li>
                        <li className="w3-padding-16 w3-large ">Up To 2500 Sq Ft</li>
                        <li className="w3-padding-16 ">Sweeping, mopping, vacuuming, dusting, window ledges, kitchen counters, trash, glass doors/sliding back door and, polish wood furniture. <br /> Bathrooms include: sink, tub/shower, toilets, mirrors, floors.</li>
                        <li className="w3-padding-16 w3-large ">We Bring All Cleaning Supplies</li>
                        <li className="w3-padding-16 w3-large ">Good deal!!</li>
                        <li className="w3-padding-16 w3-large ">
                            <h2>$ 129</h2>
                            <span className=" w3-large ">1501 - 2500 Sq Ft</span>
                        </li>
                        <li className="w3-light-grey w3-padding-24">
                            <button className="w3-button w3-padding-large w3-hover-pink w3-btn w3-round-xxlarge schBtn" onClick={() => setShowSchedule(true)}><i>Schedule Now</i></button>
                        </li>
                    </ul>
                </div>

                <div className="w3-half">
                    <ul className="w3-ul w3-light-grey w3-center" style={{ border: "10px solid deeppink" }}>
                        <li className="w3-xlarge w3-padding-32 schBtn"><i>Deep Cleaning</i></li>
                        <li className="w3-padding-16 w3-large">8 hours of Cleaning</li>
                        <li className="w3-padding-16 w3-large">1500 - 2500 Sq Ft</li>
                        <li className="w3-padding-16 ">Sweeping, mopping, vacuuming, dusting, window ledges, windows, blinds, light fixetures, kitchen counters, kitchen appliances, oven, trash, polish wood furniture, door handles, door frames. Bathrooms include: sink, tub/shower, toilets, mirrors, floors.</li>
                        <li className="w3-padding-16 w3-large">We Bring All Cleaning Supplies</li>
                        <li className="w3-padding-16 w3-large">GREAT deal!!</li>
                        <li className="w3-padding-16 w3-large">
                            <h2>$ 199</h2>
                            <span className="w3-large">1500 - 2500 Sq Ft</span>
                        </li>
                        <li className="w3-light-grey w3-padding-24">
                            <button className="w3-button w3-padding-large w3-hover-pink w3-btn w3-round-xxlarge schBtn" onClick={() => setShowSchedule(true)}><i>Schedule Now</i></button>
                        </li>

                    </ul>
                    <br /><br /><br />
                </div>
                <div>
                    <h1 className="w3-xxlarge"><b><i><i className="bi bi-stars"></i>We accept the following payment methods<i className="bi bi-stars"></i></i></b></h1>
                    <p id="pmt" className="w3-xlarge"><b><i>All Major Credit Cards, Paypal, Facebook Pay, Chime, Venmo, Cash App, and Cash payments are accepted.</i></b></p>
                </div>
            </div>


 {/* <!-- Scheduling Request Modal --> */}
     {showSchedule &&
    <div id="id01" className="scheduling-modal">
        <span onclick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">times;</span>
        <form className="scheduling-modal-content" onSubmit={handleSubmit(scheduleSubmit)} style={{
            maxWidth: "600px",  // Reduce from default width
            width: "90%",       // Make it responsive
            maxHeight: "80vh",  // Limit height to 80% of viewport
            overflow: "auto",   // Add scrolling if content is too tall
            margin: "5% auto",  // Center it with smaller top margin
            transform: "scale(0.9)" // Scale down the entire modal by 10%
        }}>
            <div className="containerSch" style={{
                padding: "20px"  // Reduce padding if needed
            }}>
                <h1 className="modal-header2"><b><i>Schedule Now</i></b></h1>

                {/* <!-- Scheduling -Successful alert notification --> */}
                {showSuccess && <div className="alert">
                    <span className="closebtn" ></span>
                    ****Your Appointment has been scheduled****
                </div>}
                <p><i><b>Please fill in this form to schedule your cleaning service.</b></i></p>
                <hr />

                <label htmlFor="className"><b><i>Full Name</i></b></label>
                {errors.fullName && errors.fullName.type === 'minLength' && (<span className='error-span'> Name is required.</span>)}
                {errors.fullName && errors.fullName.type === 'required' && (<span className='error-span'> Name is required.</span>)}
                <input type="text" name="fullName" {...register('fullName', { required: true, minLength: 2 })} />

                <label htmlFor="email"><b><i>Email</i></b></label>
                {errors.email && errors.email.type === 'required' && (<span className='error-span'>Email is required and must be Valid.</span>)}
                {errors.email && errors.email.type === 'pattern' && (<span className='error-span'>Email is not Valid.</span>)}
                <input type="text" name="email" {...register('email', {
                    required: true, pattern: {
                        value: /^[^@ ]+[^@ ]+|.[^@ .]{2,}$/,
                        message: "Email is not valid."
                    }
                })} />

                <label htmlFor="number"><b><i>Number</i></b></label>
                {errors.number && errors.number.type === 'minLength' && (<span className='error-span'>Phone Number is required and must be 10 digits.</span>)}
                {errors.number && errors.number.type === 'required' && (<span className='error-span'>Phone Number is required.</span>)}
                <input type="text" name="number" {...register('number', {
                    required: true, minLength: 10, pattern: {
                        value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                        message: "Phone number is required."
                    }
                })} />

                <label htmlFor="address"><b><i>Address</i></b></label>
                <input type="text" name="address" required />

                <label htmlFor="crossstreet"><b><i>Major Cross Streets</i></b></label>
                <input type="text" name="crossstreets" required />

                <label htmlFor="date"><b><i>Requested Date</i></b></label>
                <input type="date" name="date" required />

                <label htmlFor="time"><b><i>Requested Time</i></b></label>
                <input type="time" name="time" required />
                <br />
                <br />
                <label> <b><i>Please Select One</i></b>
                    <input type="checkbox" name="basic"
                        style={{ marginBottom: "15px", marginLeft: "15px" }} /> Basic Clean
                </label>

                <label>
                    <input type="checkbox" name="deep"
                        style={{ marginBottom: "15px", marginLeft: "15px" }} /> Deep Clean
                </label>
                <br />
                <label> <b><i>Please Select One</i></b>
                    <input type="radio" name="sqft"
                        style={{ marginBottom: "15px", marginLeft: "15px" }} /> 0-1500 sq ft
                </label>

                <label>
                    <input type="radio" name="sqft"
                        style={{ marginBottom: "15px", marginLeft: "15px" }} /> 1501-2500 sq ft
                </label>

                <label>
                    <input type="radio" name="sqft"
                        style={{ marginBottom: "15px", marginLeft: "15px" }} /> 2501+ sq ft
                </label>

                <p style={{ marginBottom: "15px", marginTop: "25px" }}><b>You will receive a confirmation via email.</b></p>

                <div className="clearfix">
                    <button type="button" onClick={handleCancel} className="cancelbtn"><b><i>Close</i></b></button>
                    <button type="submit" className="signup"><b><i>Schedule Now</i></b></button>
                </div>
            </div>
        </form>
    </div>
}
        </div>
    )
}

export default Packages