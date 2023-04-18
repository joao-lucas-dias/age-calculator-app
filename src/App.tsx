import { useState } from "react";
import classes from "./App.module.css";
import AgeDisplay from "./components/AgeDisplay/AgeDisplay";
import Form from "./components/Form/Form";

const App = () => {
	const [years, setYears] = useState("");
	const [months, setMonths] = useState("");
	const [days, setDays] = useState("");

	const calculateAge = (day: string, month: string, year: string) => {
		const today = new Date();
		const birthdate = new Date(`${year}-${month}-${day}`);

		var years = today.getFullYear() - birthdate.getFullYear();
		var months = today.getMonth() - birthdate.getMonth();
		var days = today.getDate() - birthdate.getDate();

		if (months < 0 || (months === 0 && days < 0)) {
			years--;
			months += 12;
		}

		if (days < 0) {
			var monthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
			days += monthDays;
			months--;
		}

		setYears(years.toString());
		setMonths(months.toString());
		setDays(days.toString());

	};

	return (
		<div className={classes.wrapper}>
			<Form onFormSubmit={calculateAge} />
			<AgeDisplay years={years} months={months} days={days} />
		</div>
	);
};

export default App;
