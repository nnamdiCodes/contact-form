import { useState, useRef } from "react";
import Form from "./components/Form";


function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    queryType: '',
    message: '',
    consent: false
  })

  const [errors, setErrors] = useState({})

  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailAddressRef = useRef(null)
  const queryTypeRef = useRef(null)
  const messageRef = useRef(null)
  const consentRef = useRef(null)


  const validateForm = () => {
    let isValid = true
    const newErrors = {}

    if (!formData.firstName) {
      newErrors.firstName = 'This field is required'
       firstNameRef.current.focus()
        isValid = false
    }

    if (!formData.lastName) {
      newErrors.lastName = 'This field is required'
      if (isValid) lastNameRef.current.focus()
        isValid = false
    }

    if (!formData.emailAddress) {
      newErrors.email = 'This field is required'
      if (isValid) emailAddressRef.current.focus()
        isValid = false
    }

    if (!formData.queryType) {
      newErrors.queryType = 'Please select a query type'
      if (isValid) queryTypeRef.current.focus()
        isValid = false
    }

    if (!formData.message) {
      newErrors.message = 'This field is required'
      if (isValid) messageRef.current.focus()
        isValid = false
    }

    if (!formData.consent) {
      newErrors.consent = 'To submit this form, please consent to being contacted'
      if (isValid) consentRef.current.focus()
        isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  /* const showToast = (messageToast) => {
    alert(messageToast)
  } */

  const handleSubmit = (event) => {
    event.preventDefault()

    if (validateForm()) {

      const encodedData = new URLSearchParams();
      for (const key in formData) {
        encodedData.append(key, formData[key]);
      }

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData.toString(),
      })
        .then(() => alert("Form successfully submitted!"))
        .catch((error) => alert("Error submitting form", error))

      /* showToast("Form submitted successfully!") */
      setFormData({
        firstName: '',
        lastName: '',
        emailAddress: '',
        queryType: '',
        message: '',
        consent: false
      })
    }
  }

  const handleChange = (event) => {
    const {name, type, checked, value} = event.target
    setFormData(prevContact => {
      return (
        {...prevContact, [name]: type === "checkbox" ? checked : value}
      )
    })
  }

  return (
    <div className="App">
      <Form 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        firstName={formData.firstName}
        lastName={formData.lastName}
        emailAddress={formData.emailAddress}
        queryType={formData.queryType}
        message={formData.message}
        consent={formData.consent}
        errors={errors}
        firstNameRef={firstNameRef}
        lastNameRef={lastNameRef}
        emailAddressRef={emailAddressRef}
        queryTypeRef={queryTypeRef}
        messageRef={messageRef}
        consentRef={consentRef}
      />
    </div>
  );
}

export default App;
