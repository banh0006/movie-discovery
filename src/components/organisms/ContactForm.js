import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap'
import * as emailjs from 'emailjs-com'
import { useAlert } from "react-alert"

export default function ContactForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [sending, setSending] = useState(false)

    const [isNameInvalid, setIsNameInvalid] = useState(false)
    const [isEmailInvalid, setIsEmailInvalid] = useState(false)
    const alert = useAlert()
    
    const styles = {
        form: {
            'width': "100%"
        }
    }

    const resetForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

    const onSubmit = async(e) => {
        e.preventDefault()
        setSending(true)
        if (name === '' || email === '') {
            if (name === '') {
                setIsNameInvalid(true)
            } else {
                setIsNameInvalid(false)
            }
            if (email === '') {
                setIsEmailInvalid(true)
            } else {
                setIsEmailInvalid(false)
            }
        } else {
            setIsNameInvalid(false)
            setIsEmailInvalid(false)
            const templateParams = {
                from_name: name,
                from_email: email,
                to_name: 'Thien Banh',
                message: message,
            }

            await emailjs.send('service_a1y7f85', 'template_n39hsl1', templateParams, 'user_8OyYozMXEcoysEy15yN7A')
            .then(function(response) {
                alert.success("Thank you! your message has been successfully sent.", { title: "Success" })
            }, function(error) {
                alert.error("Something wrong happended. Please send again.", { title: "error" })
            })
            resetForm()
        }
        setSending(false)
    }

    return (
        <Form onSubmit={onSubmit} style={styles.form}>
           <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" id="name" value={name} onChange={ e => setName(e.target.value) } placeholder="Your name" invalid={isNameInvalid} />
                <FormFeedback>You must enter your name</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" id="email" value={email} onChange={ e => setEmail(e.target.value) } placeholder="Your email" invalid={isEmailInvalid} />
                <FormFeedback>You must enter your email</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="message">Message</Label>
                <Input type="textarea" id="message" onChange={ e => setMessage(e.target.value) } value={message} />
            </FormGroup>
            <Button disabled={sending} color="success" type="submit" className="sendButton">{ sending ? 'Sending' : 'Send' }</Button>
       </Form>
    )
}
