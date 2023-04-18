import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./Button/Button";
import classes from "./Form.module.css";

const Form: React.FC<{
	onFormSubmit: (day: string, month: string, year: string) => void;
}> = (props) => {
	const [validDate, setValidDate] = useState(true);
	const [dayInput, setDayInput] = useState({ value: "", error: "false" });
	const [monthInput, setMonthInput] = useState({ value: "", error: "false" });
	const [yearInput, setYearInput] = useState({ value: "", error: "false" });

	const checkEmptyInputs = () => {
		if (dayInput.value === "") {
			setDayInput((oldState) => ({ ...oldState, error: "empty" }));
			return false;
		}
		if (monthInput.value === "") {
			setMonthInput((oldState) => ({ ...oldState, error: "empty" }));
			return false;
		}
		if (yearInput.value === "") {
			setYearInput((oldState) => ({ ...oldState, error: "empty" }));
			return false;
		}

		return true;
	};

	const checkInvalidInputs = () => {
		const today = new Date();
		const day = parseInt(dayInput.value);
		const month = parseInt(monthInput.value);
		const year = parseInt(yearInput.value);

		if (day < 1 || day > 31) {
			setDayInput((oldState) => ({ ...oldState, error: "invalid" }));
			return false;
		}
		if (month < 1 || month > 12) {
			setMonthInput((oldState) => ({ ...oldState, error: "invalid" }));
			return false;
		}
		if (year < 1 || year > today.getFullYear()) {
			setYearInput((oldState) => ({ ...oldState, error: "invalid" }));
			return false;
		}

		return true;
	};

	const checkValidDate = () => {
		const day = parseInt(dayInput.value);
		const month = parseInt(monthInput.value);
		const year = parseInt(yearInput.value);

		var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		// Leap years
		if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
			daysInMonth[1] = 29;
		}

		if (day > daysInMonth[month - 1]) {
			setValidDate(false);
			return false;
		}

		setValidDate(true);
		return true;
	};

	const validateForm = () => {
		if (
			checkEmptyInputs() &&
			checkInvalidInputs() &&
			checkValidDate()
		) {
			return true;
		}

		return false;
	};

	const formSubmitHandler = (event: FormEvent) => {
		event.preventDefault();

		validateForm() &&
			props.onFormSubmit(dayInput.value, monthInput.value, yearInput.value);
	};

	const dayInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
		setDayInput((oldState) => ({ value: event.target.value, error: "false" }));

	const monthInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
		setMonthInput((oldState) => ({ value: event.target.value, error: "false" }));

	const yearInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
		setYearInput((oldState) => ({ value: event.target.value, error: "false" }));

	return (
		<form className={classes.wrapper} onSubmit={formSubmitHandler}>
			<div className={classes.inputs_wrapper}>
				<span>
					<p
						className={`${classes.label} ${
							(dayInput.error !== "false" || !validDate) && classes.label_error
						}`}
					>
						Day
					</p>
					<p>
						<input
							className={`${classes.input} ${
								(dayInput.error !== "false" || !validDate) && classes.input_error
							}`}
							value={dayInput.value}
							onChange={dayInputChangeHandler}
							type="number"
							placeholder="DD"
						/>
					</p>
					<p className={classes.error_message}>{`${
						dayInput.error === "empty"
							? "This field is required"
							: dayInput.error === "invalid"
							? "Must be a valid day"
							: !validDate
							? "Must be a valid date"
							: ""
					}`}</p>
				</span>
				<span>
					<p
						className={`${classes.label} ${
							(monthInput.error !== "false" || !validDate) && classes.label_error
						}`}
					>
						Month
					</p>
					<p>
						<input
							className={`${classes.input} ${
								(monthInput.error !== "false" || !validDate) && classes.input_error
							}`}
							value={monthInput.value}
							onChange={monthInputChangeHandler}
							type="number"
							placeholder="MM"
						/>
					</p>
					<p className={classes.error_message}>
						{`${
							monthInput.error === "empty"
								? "This field is required"
								: monthInput.error === "invalid"
								? "Must be a valid month"
								: ""
						}`}
					</p>
				</span>
				<span>
					<p
						className={`${classes.label} ${
							(yearInput.error !== "false" || !validDate) && classes.label_error
						}`}
					>
						Year
					</p>
					<p>
						<input
							className={`${classes.input} ${
								(yearInput.error !== "false" || !validDate) && classes.input_error
							}`}
							value={yearInput.value}
							onChange={yearInputChangeHandler}
							type="number"
							placeholder="YYYY"
						/>
					</p>
					<p className={classes.error_message}>{`${
						yearInput.error === "empty"
							? "This field is required"
							: yearInput.error === "invalid"
							? "Must be in the past"
							: ""
					}`}</p>
				</span>
			</div>
			<Button />
		</form>
	);
};

export default Form;
