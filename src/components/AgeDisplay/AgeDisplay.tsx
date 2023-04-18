import classes from "./AgeDisplay.module.css";

const AgeDisplay = () => {
	return (
		<div className={classes.wrapper}>
			<p className={classes.row}>
				<span className={classes.number}>38</span>
				<span className={classes.label}>years</span>
			</p>
			<p className={classes.row}>
				<span className={classes.number}>2</span>
				<span className={classes.label}>months</span>
			</p>
			<p className={classes.row}>
				<span className={classes.number}>26</span>
				<span className={classes.label}>days</span>
			</p>
		</div>
	);
};

export default AgeDisplay;
