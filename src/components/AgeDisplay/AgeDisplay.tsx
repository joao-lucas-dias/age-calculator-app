import classes from "./AgeDisplay.module.css";

const AgeDisplay: React.FC<{ years: string; months: string; days: string }> = (props) => {
	return (
		<div className={classes.wrapper}>
			<p className={classes.row}>
				<span className={classes.number}>{props.years === "" ? "--" : props.years}</span>
				<span className={classes.label}>years</span>
			</p>
			<p className={classes.row}>
				<span className={classes.number}>
					{props.months === "" ? "--" : props.months}
				</span>
				<span className={classes.label}>months</span>
			</p>
			<p className={classes.row}>
				<span className={classes.number}>{props.days === "" ? "--" : props.days}</span>
				<span className={classes.label}>days</span>
			</p>
		</div>
	);
};

export default AgeDisplay;
