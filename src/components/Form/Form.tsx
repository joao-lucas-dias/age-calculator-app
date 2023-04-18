import { FormEvent } from "react";
import Button from "./Button/Button";
import classes from "./Form.module.css";
import Inputs from "./Inputs/Inputs";

const Form = () => {
	const formSubmitHandler = (event: FormEvent) => {
		event.preventDefault();

		console.log("Submit");
	}

	return (
		<form className={classes.wrapper} onSubmit={formSubmitHandler}>
			<Inputs />
			<Button />
		</form>
	);
};

export default Form;
