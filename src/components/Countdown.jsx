import { useEffect, useState } from "preact/hooks"
import "./CountDown.css"

export default function Countdown() {
  const calculateTimeLeft = () => {
    const now = new Date()
    const christmas = new Date(now.getFullYear(), 11, 25)

    if (now > christmas) {
      christmas.setFullYear(christmas.getFullYear() + 1)
    }

    const diff = christmas - now

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="countdown-container">
      <h1 className="countdown-title">Christmas Countdown</h1>
      <div className="countdown-grid">
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.days}</span>
          <p className="countdown-label">Days</p>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.hours}</span>
          <p className="countdown-label">Hours</p>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.minutes}</span>
          <p className="countdown-label">Minutes</p>
        </div>
        <div className="countdown-item">
          <span className="countdown-value">{timeLeft.seconds}</span>
          <p className="countdown-label">Seconds</p>
        </div>
      </div>
    </div>
  )
}
