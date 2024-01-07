import Link from "next/link";
import React from "react";

const UserGreeting = () => {
	const user = "tigana";
	return (
		<React.Fragment>
			<div className="flex flex-col p-8 mb-10 gap-5 bg-gradient-to-br from-light-magenta from-10% to-magenta to-50% w-fit rounded-xl self-center sm:self-start items-center text-center sm:text-start sm:items-start">
				<h1 className=" text-white text-3xl">good morning, {user}🤍</h1>

				<div className="flex relative">
					<a href={"/game-plan"}>
						<div className="p-4 bg-light-pink text-magenta w-fit rounded-2xl">
							resume game plan
						</div>
					</a>
					{/* <span className="w-6 h-6 bg-light-pink border-2 border-solid border-magenta absolute rounded-full top-1/2 right-0"></span> */}
				</div>
			</div>
		</React.Fragment>
	);
};

export default UserGreeting;
