import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	const { name, email, message } = formState;

	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleBlank(e) {
		if (e.target.name === "Name" || e.target.name === "Message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	return (
		<section>
			<div className="center">
				<h1 className="page-header">Contact Me</h1>
			</div>
			<div>
				<form id="contact-form">
					<div>
						<label htmlFor="Name">Name:</label>
						<br></br>
						<input
							type="text"
							defaultValue={name}
							onBlur={handleBlank}
							name="Name"
						/>
					</div>
					<div>
						<label htmlFor="email">Email address:</label>
						<br></br>
						<input
							type="email"
							defaultValue={email}
							name="email"
							onBlur={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="Message">Message:</label>
						<br></br>
						<textarea
							name="Message"
							defaultValue={message}
							onBlur={handleBlank}
							rows="5"
						/>
					</div>
					{errorMessage && (
						<div>
							<p className="error-text">{errorMessage}</p>
						</div>
					)}
					<button type="submit">Submit</button>
				</form>
			</div>

			{/*
			
			<Form>
			
			<fieldset disabled>
    <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledTextInput">name</Form.Label>
  <Form.Group className="center" 
  controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" 
	placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" 
  controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
			
			*/}

			<div className="text">
				<h4>Email</h4>
				<p className="email">
					julissahash@gmail.com
				</p>
			</div>

		</section>
	);
}

export default Contact;

