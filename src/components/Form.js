import React from 'react'
import { FaRegCircle, FaCheckCircle, FaRegSquare, FaCheckSquare } from 'react-icons/fa'

const Form = ({
    handleChange, firstName, lastName, emailAddress , message, consent, handleSubmit, queryType, errors, firstNameRef, lastNameRef, emailAddressRef, queryTypeRef, messageRef, consentRef
}) => {
  return (
    <form className="Form" onSubmit={handleSubmit}>
        
        <div><h1>Contact Us</h1></div>
        <div>
            <label htmlFor="firstName">First Name *</label>
            <input type="text" 
                id='firstName' 
                name='firstName' 
                value={firstName} 
                onChange={handleChange}
                ref={firstNameRef}
                className= {errors.firstName ? 'input-error' : 'input-normal'}
            />
            {errors.firstName && <p className='errMsg'>{errors.firstName}</p>}
        </div>

        <div>
            <label htmlFor="lastName">Last Name *</label>
            <input type="text" 
                id='lastName' 
                name='lastName' 
                value={lastName} 
                onChange={handleChange}
                ref={lastNameRef}
                className= {errors.lastName ? 'input-error' : 'input-normal'}
            />
            {errors.lastName && <p className='errMsg'>{errors.lastName}</p>}
        </div>

        <div>
            <label htmlFor="emailAddress">Email Address *</label>
            <input type="email" 
                id='emailAddress' 
                name='emailAddress' 
                value={emailAddress} 
                onChange={handleChange}
                ref={emailAddressRef}
                className= {errors.email ? 'input-error' : 'input-normal'}
            />
            {errors.email && <p className='errMsg'>{errors.email}</p>}
        </div>

        <div>
            <legend className='queryType'>Query Type *</legend>
            <div className='generalEnquiry'>
                <label htmlFor="generalEnquiry" className='customRadio'>
                    <input type="radio" 
                        id='generalEnquiry' 
                        name='queryType' 
                        value='generalEnquiry'
                        checked={queryType === 'generalEnquiry'}
                        onChange={handleChange}
                        ref={queryTypeRef}
                        style={{display: 'none'}}
                        />
                   {queryType === 'generalEnquiry' ? <FaCheckCircle color='green' /> : <FaRegCircle />} General Enquiry
                </label>
            </div>
            <div className='supportRequest'>
                <label htmlFor="supportRequest" className='customRadio'>
                    <input type="radio" 
                        id='supportRequest' 
                        name='queryType' 
                        value='supportRequest' 
                        checked={queryType === 'supportRequest'}
                        onChange={handleChange}
                        style={{ display: 'none'}}
                    />
                   {queryType === 'supportRequest' ? <FaCheckCircle color='green' /> : <FaRegCircle />} Support Request
                </label>
            </div>
            {errors.queryType && <p className='errMsg'>{errors.queryType}</p>}
        </div>

        <div>
            <label htmlFor="message">Message *</label>
            <textarea 
                name="message" 
                id="message" 
                value={message}
                onChange={handleChange}
                ref={messageRef}
                className= {errors.message ? 'input-error' : 'input-normal'}
            />
            {errors.message && <p className='errMsg'>{errors.message}</p>}
        </div>

        <div>
            <label htmlFor="consent" className='customCheckBox'>
                <input type="checkbox" 
                        id='consent' 
                        name='consent' 
                        checked={consent} 
                        onChange={handleChange}
                        ref={consentRef}
                        style={{display: 'none'}}
                />
               {consent ? <FaCheckSquare color='green'/> : <FaRegSquare />} I consent to being contacted by the team *
            </label>
            {errors.consent && <p className='errMsg'>{errors.consent}</p>}
        </div>

        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form