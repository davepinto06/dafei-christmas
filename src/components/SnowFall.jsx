import { useEffect } from "preact/hooks"
import { gsap, Linear, Sine } from "gsap"
import "./SnowFall.css"

export default function SnowFall() {
  useEffect(() => {
    const container = document.getElementById("snowfall-container")
    if (!container) return

    gsap.set(container, { perspective: 600 })

    const total = 150
    const w = window.innerWidth
    const h = window.innerHeight

    for (let i = 0; i < total; i++) {
      const div = document.createElement("div")
      gsap.set(div, {
        attr: { class: "dot" },
        x: R(0, w),
        y: R(-200, -150),
        z: R(-200, 200),
      })
      container.appendChild(div)
      animm(div)
    }

    function animm(elm) {
      gsap.to(elm, R(3, 6.5), {
        y: h + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -15,
      })
      gsap.to(elm, R(5, 7), {
        x: "+=100",
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
      })
    }

    function R(min, max) {
      return min + Math.random() * (max - min)
    }
  }, [])

  return null
}
