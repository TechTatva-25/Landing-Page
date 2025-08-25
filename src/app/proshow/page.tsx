import { getMetadata } from "@/lib/_utils"
import LineUp from "@/lib/lineup"

export const metadata = getMetadata("TechTatva 25 | Conclave")

export default function Proshow(): React.JSX.Element {
	return (
		<>
			<LineUp></LineUp>
		</>
	)
}
