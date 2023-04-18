import classes from "./App.module.css";
import AgeDisplay from "./components/AgeDisplay/AgeDisplay";
import Form from "./components/Form/Form";

const App = () => {
	return (
		<div className={classes.wrapper}>
			<Form />
			<AgeDisplay />
		</div>
	);
};

export default App;
