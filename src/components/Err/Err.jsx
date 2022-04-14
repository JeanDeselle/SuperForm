import React from "react";

export default function Err(props) {
	let msg;

	switch (props.type) {
		case "email":
			msg = "un email valid svp";
			break;

		case "password":
			msg = "mdp de minimum 8 char ";
			break;

		case "adress":
			msg = "adresse doit etre entre 1 et 30 char ";
			break;

		case "age":
			msg = "doit etre un chiffre";
			break;

		default:
			break;
	}
	return <>{msg && <p style={{ color: "red" }}>{msg}</p>}</>;
}
