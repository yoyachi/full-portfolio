import React from "react";
import Navigation from "../Navigation";

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header>
			<div>
				<h2>Julissa Hash Portfolio</h2>
			</div>
			<div>
				<Navigation
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				></Navigation>
			</div>
		</header>
	);
}

export default Header;