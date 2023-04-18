import classes from "./Form.module.css";

const Form = () => {
	return (
		<div className={classes.wrapper}>
			<span className={classes.input_wrapper}>
        <p className={classes.label}>Day</p>
				<input className={classes.input} type="number" placeholder="DD" />
			</span>
			<span className={classes.input_wrapper}>
        <p className={classes.label}>Month</p>
				<input className={classes.input} type="number" placeholder="MM" />
			</span>
			<span className={classes.input_wrapper}>
        <p className={classes.label}>Year</p>
				<input className={classes.input} type="number" placeholder="YYYY" />
			</span>
		</div>
	);
};

export default Form;
