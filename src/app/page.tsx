import prisma from "../../lib/prisma";
import UserGreeting from "./components/UserGreeting";
import WellnessCheckIn from "./components/WellnessCheckIn";
import SystemsOverview from "./components/SystemsOverview";

export default function Home() {
	return (
		<main>
			<UserGreeting />
			<WellnessCheckIn />
			<SystemsOverview />
		</main>
	);
}
