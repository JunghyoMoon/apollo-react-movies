import React, { Fragment } from "react";
import { HashRouter, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";
import GlobalStyle from "./GlobalStyles";

const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<HashRouter>
				<Route exact path="/" component={Home} />
				<Route path="/:id" component={Detail} />
			</HashRouter>
		</Fragment>
	);
};

export default App;
