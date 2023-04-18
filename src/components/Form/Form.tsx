import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./Button/Button";
import classes from "./Form.module.css";

const Form: React.FC<{
	onFormSubmit: (day: string, month: string, year: string) => void;
}> = (props) => {
	const [dayInput, setDayInput] = useState("");
	const [monthInput, setMonthInput] = useState("");
	const [yearInput, setYearInput] = useState("");

	const formSubmitHandler = (event: FormEvent) => {
		event.preventDefault();

		props.onFormSubmit(dayInput, monthInput, yearInput);
	};

	const dayInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
		setDayInput(event.target.value);

	const monthInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
		setMonthInput(event.target.value);

	const yearInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
		setYearInput(event.target.value);

	return (
		<form className={classes.wrapper} onSubmit={formSubmitHandler}>
			<div className={classes.inputs_wrapper}>
				<span>
					<p className={classes.label}>Day</p>
					<p>
						<input
							className={classes.input}
							value={dayInput}
							onChange={dayInputChangeHandler}
							type="number"
							placeholder="DD"
							min={1}
							step={1}
							max={31}
							required
						/>
					</p>
				</span>
				<span>
					<p className={classes.label}>Month</p>
					<p>
						<input
							className={classes.input}
							value={monthInput}
							onChange={monthInputChangeHandler}
							type="number"
							placeholder="MM"
							min={1}
							step={1}
							max={12}
							required
						/>
					</p>
				</span>
				<span>
					<p className={classes.label}>Year</p>
					<p>
						<input
							className={classes.input}
							value={yearInput}
							onChange={yearInputChangeHandler}
							type="number"
							placeholder="YYYY"
							step={1}
							required
						/>
					</p>
				</span>
			</div>
			<Button />
		</form>
	);
};

export default Form;
