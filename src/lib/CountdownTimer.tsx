import React, { useEffect, useState } from "react"

const CountdownTimer = (): React.JSX.Element => {
	const targetDate = new Date("2025-03-12T00:00:00")
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})

	const calculateTimeLeft = (): void => {
		const now = new Date()
		const difference = targetDate.getTime() - now.getTime()
		if (difference <= 0) {
			setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
			return
		}

		const days = Math.floor(difference / (1000 * 60 * 60 * 24))
		const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
		const seconds = Math.floor((difference % (1000 * 60)) / 1000)

		setTimeLeft({ days, hours, minutes, seconds })
	}

	useEffect(() => {
		calculateTimeLeft()

		const timer = setInterval(() => {
			setTimeLeft((prevTime) => {
				if (prevTime.seconds > 0) {
					return { ...prevTime, seconds: prevTime.seconds - 1 }
				} else if (prevTime.minutes > 0) {
					return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 }
				} else if (prevTime.hours > 0) {
					return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 }
				} else if (prevTime.days > 0) {
					return { days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 }
				}
				return prevTime
			})
		}, 1000)

		return (): void => clearInterval(timer)
	}, [])

	const TimeUnit = ({ value, label }: { value: number; label: string }): React.JSX.Element => (
		<div className="mx-4 flex flex-col items-center">
								<span className="mb-2 text-4xl font-bold text-black">{value.toString().padStart(2, "0")}</span>
			<span className="text-sm text-gray-400">{label}</span>
		</div>
	)

	return (
		<div className="bottom-4 left-4 rounded-lg bg-transparent p-8 text-center sm:absolute lg:-ml-4 lg:max-w-[25%] lg:justify-start">
			{timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
				<>
					<div className="mb-4 text-sm font-bold text-black">Event Starts In</div>
					<div className="flex justify-center">
						{timeLeft.days && <TimeUnit value={timeLeft.days} label="Days" />}
						<TimeUnit value={timeLeft.hours} label="Hours" />
						<TimeUnit value={timeLeft.minutes} label="Minutes" />
						{!timeLeft.days && <TimeUnit value={timeLeft.seconds} label="Seconds" />}
					</div>
				</>
			) : (
				<>{/* <div className="mb-12 text-2xl font-bold text-white sm:hidden">Event Is Live</div> */}</>
			)}
		</div>
	)
}

export default CountdownTimer
