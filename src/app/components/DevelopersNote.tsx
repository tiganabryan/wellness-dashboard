import React from "react";

const DevelopersNote = () => {
	return (
		<React.Fragment>
			<div className="mb-4 px-3 py-1 bg-muted-light-magenta rounded-lg">
				<p className="my-2">
					work in progress. started with creating the database and
					connecting it to vercel with prisma. now it's time to paint
					the frontend with my data and style these components.
				</p>
				<p className="my-2">
					click{" "}
					<a
						href="https://github.com/tiganabryan/wellness-dashboard/blob/main/prisma/schema.prisma"
						target="_blank"
					>
						HERE
					</a>{" "}
					to view the database schema.
				</p>
			</div>
		</React.Fragment>
	);
};

export default DevelopersNote;
