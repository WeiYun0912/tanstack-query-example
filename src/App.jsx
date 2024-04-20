import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Header from "./components/Header";
import "./App.css";

import Dashboard2 from "./components/Dashboard2";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 5000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />{" "}
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/about" element={<About />} />

          <Route path="/dashboard2" element={<Dashboard2 />} />

          {/* Add more routes as needed */}
        </Routes>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
