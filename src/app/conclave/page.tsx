import { getMetadata } from "@/lib/_utils"
import LineUp from "@/lib/lineup"

export const metadata = getMetadata("TechTatva 25 | Conclave - Grand Musical Extravaganza")

export default function Conclave(): React.JSX.Element {
	return (
		<>
			<LineUp></LineUp>
		</>
	)
}
