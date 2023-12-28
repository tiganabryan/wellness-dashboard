import React from "react";

const UserGreeting = () => {
	const user = "tigana";
	return (
		<React.Fragment>
			<h1 className="px-4 py-4 mb-3 bg-gradient-to-br from-light-magenta from-10% to-magenta to-50% text-white text-3xl w-fit rounded-xl">
				good morning, {user} 🤍
			</h1>
		</React.Fragment>
	);
};

export default UserGreeting;
