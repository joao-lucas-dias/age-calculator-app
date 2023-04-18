import classes from "./Inputs.module.css";

const Inputs = () => {
	return (
		<div className={classes.wrapper}>
			<span>
				<p className={classes.label}>Day</p>
				<p>
					<input
						className={classes.input}
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
						type="number"
						placeholder="YYYY"
						step={1}
						required
					/>
				</p>
			</span>
		</div>
	);
};

export default Inputs;
