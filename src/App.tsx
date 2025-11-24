import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { cn } from "@/lib/utils";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <div className="flex gap-4 justify-center mb-8">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Vite + React
        </h1>
        <div className={cn("card bg-white rounded-lg shadow-lg p-6 mb-4")}>
          <button
            onClick={() => setCount((count) => count + 1)}
            className={cn(
              "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            )}
          >
            count is {count}
          </button>
          <p className="mt-4 text-gray-600">
            Edit{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">src/App.tsx</code>{" "}
            and save to test HMR
          </p>
        </div>
        <p className="read-the-docs text-center text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
