import prisma from "../../lib/prisma";
import UserGreeting from "./components/UserGreeting";
import WellnessCheckIn from "./components/WellnessCheckIn";
import SystemsOverview from "./components/SystemsOverview";
import DevelopersNote from "./components/DevelopersNote";

export default function Home() {
	return (
		<main className="p-10 justify-center bg-pinky-white">
			<DevelopersNote />
			<UserGreeting />
			<WellnessCheckIn />
			<SystemsOverview />
		</main>
	);
}
