import { createElement } from "react"
import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

export default function App() {
	const [count, setCount] = useState(0)
	const currentYear = new Date().getFullYear()

	// prettier-ignore
	return createElement("div", {},
		createElement("div", {},
			createElement("a", {
				href: "https://vite.dev",
				target: "_blank"
			},
			createElement("img", {
				src: viteLogo,
				className: "logo",
				 alt: "Vite logo"
			})
		),
			createElement("a", {
				href: "https://react.dev",
				target: "_blank"
			},
			createElement("img", {
				src: reactLogo,
				className: "logo react",
				 alt: "React logo"
			})
		)),
		createElement("h1", {}, "Vite + React"),
		createElement("h1", {}, `${currentYear}`),
		createElement("div", {className: "card"},
			createElement('button', {
				onClick: () => setCount((count) => count + 1),
			},
		`count is ${count}`),
		createElement("p", {}, `Edit `, createElement("code", {}, "src/App.jsx"),
		` and save to test HRM`),),
		createElement("p", {className: "read-the-docs"}, "Click on the Vite and React logos to learn more")

)
}
