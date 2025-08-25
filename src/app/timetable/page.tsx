import { getMetadata } from "@/lib/_utils"
import EventSchedule from "@/lib/EventSchedule"

export const metadata = getMetadata("TechTatva 25 | Timetable")

export default function Contact(): React.JSX.Element {
	return (
		<>
			<EventSchedule></EventSchedule>
		</>
	)
}
