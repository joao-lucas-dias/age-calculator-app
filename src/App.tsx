import classes from "./App.module.css";
import AgeDisplay from "./components/AgeDisplay/AgeDisplay";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";

const App = () => {
	return (
		<div className={classes.wrapper}>
			{/* <Form /> */}
			<Button />
			<AgeDisplay />
		</div>
	);
};

export default App;
