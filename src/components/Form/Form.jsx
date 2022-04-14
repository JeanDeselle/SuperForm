import React, { useState, useEffect } from "react";
import Err from "../Err/Err";

export default function Form() {
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");
	const [age, setAge] = useState("");
	const [adress, setAdresse] = useState("");
	const [error, setError] = useState(null);
	let valid = true;
	let err = null;

	const verif = (e, labels) => {
		e.preventDefault();
		labels.forEach((label) => {
			switch (label.type) {
				case "email":
				case "mail":
					test(label.value, label.name, validateEmail);
					break;

				case "password":
					test(label.value, label.name, validatePassword);
					break;

				case "number":
					test(label.value, label.name, validateNumber);
					break;

				case "adress":
					test(label.value, label.name, validateAdress);
					break;
			}
		});

		valid === true && !err ? setError(false) : setError(err);
	};

	const test = (value, name, f) => {
		if (f(value) && valid) {
			valid = true;
		} else {
			valid = false;
			!err && (err = name);
			console.log(err);
		}
	};

	const validatePassword = (password) => {
		if (password.length > 8) {
			return true;
		} else {
			return false;
		}
	};

	const validateAdress = (adress) => {
		if (adress.length < 30 && adress.length > 0) {
			return true;
		} else {
			return false;
		}
	};

	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	const validateNumber = (nbr) => {
		nbr = parseInt(nbr);
		if (Number.isInteger(nbr)) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<form
			onSubmit={(e) => {
				verif(e, [
					{ name: "email", type: "email", value: mail },
					{ name: "password", type: "password", value: password },
					{ name: "age", type: "number", value: age },
					{ name: "adress", type: "adress", value: adress },
				]);
			}}
		>
			{error && <Err type={error} />}
			{error === false && <p style={{ color: "green" }}>Grand Sucess</p>}
			<label htmlFor="mail">Email</label>
			<input
				type="text"
				id="mail"
				value={mail}
				onChange={(e) => setMail(e.target.value)}
			/>

			<label htmlFor="password">Mot de passe</label>
			<input
				type="password"
				id="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>

			<label htmlFor="age">Age</label>
			<input
				type="text"
				id="age"
				value={age}
				onChange={(e) => setAge(e.target.value)}
			/>

			<label htmlFor="adress">Adresse</label>
			<input
				type="text"
				id="adress"
				value={adress}
				onChange={(e) => setAdresse(e.target.value)}
			/>

			<input type="submit" value="Envoyer" />
		</form>
	);
}
