import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./theme/ThemeProvider";
import { ModeToggle } from "./theme/ModeToggle";

function App() {
	const [count, setCount] = useState(0);

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<>
				<div>
					<a href="https://vite.dev" target="_blank" rel="noreferrer">
						<img src={viteLogo} className="logo" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank" rel="noreferrer">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
				</div>
				<h1 className="text-my-color">Vite + React</h1>
				<div className="card">
					<Button
						onClick={() => setCount((count) => count + 1)}
						variant={"outline"}
					>
						count is {count}
					</Button>
					<Button variant="destructive" onClick={() => setCount(0)}>
						Reset
					</Button>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className="read-the-docs">
					Click on the Vite and React logos to learn more
				</p>
				<ModeToggle />
			</>
		</ThemeProvider>
	);
}

export default App;
