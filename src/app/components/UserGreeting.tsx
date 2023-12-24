import React from "react";

const UserGreeting = () => {
	const user = "tigana";
	return (
		<React.Fragment>
			<h1 className="px-3 py-1 bg-gradient-to-r from-light-pink to-magenta text-white w-3/5 rounded-lg">
				good morning, {user} 🤍
			</h1>
		</React.Fragment>
	);
};

export default UserGreeting;
