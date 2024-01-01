import prisma from "../../lib/prisma";
import SelfCareToolkit from "./components/SelfCareToolkit/SelfCareToolkit";
import UserGreeting from "./components/UserGreeting";
import WellnessCheckIn from "./components/WellnessCheckIn";
import SystemsOverview from "./components/SystemsOverview";
import DevelopersNote from "./components/DevelopersNote";

export default function Home() {
	return (
		<main className="justify-center bg-pinky-white">
			<div className="flex-col lg:flex lg:flex-row  h-screen">
				<div className="flex-col basis-3/4 pt-10 pl-10 mb-10 lg:mb-0">
					{/* <DevelopersNote /> */}
					<UserGreeting />
					<WellnessCheckIn />
					<SystemsOverview />
				</div>

				<div className="w-full basis-1/4  bg-pink-grey rounded-bl-[3rem] rounded-tl-[3rem] bg-gradient-radial from-toolkit-start-pink from-10% via-toolkit-middle-pink via-80% to-toolkit-end-pink">
					<SelfCareToolkit />
				</div>
			</div>
		</main>
	);
}
