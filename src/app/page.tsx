import prisma from "../../lib/prisma";
import SelfCareToolkit from "./components/SelfCareToolkit/SelfCareToolkit";
import UserGreeting from "./components/UserGreeting";
import WellnessCheckIn from "./components/WellnessCheckIn";
import SystemsOverview from "./components/SystemsOverview";
import DevelopersNote from "./components/DevelopersNote";
import WellnessCheckInProvider from "./components/WellnessCheckInProvider";

export default function Home() {
	return (
		<main className="justify-center bg-pinky-white">
			<div className="flex-col lg:flex lg:flex-row  h-screen">
				<div className="flex flex-col basis-3/4 pt-10 px-10 mb-10 lg:mb-0">
					{/* <DevelopersNote /> */}
					<UserGreeting />
					{/* <WellnessCheckIn /> */}
					<WellnessCheckInProvider />
					<SystemsOverview />
				</div>

				<div className="w-full basis-1/4  bg-pink-grey sm:rounded-bl-[3rem] sm:rounded-tr-[0rem] rounded-t-[3rem] bg-gradient-radial from-magenta from-5% to-toolkit-end-pink">
					<SelfCareToolkit />
				</div>
			</div>
		</main>
	);
}
