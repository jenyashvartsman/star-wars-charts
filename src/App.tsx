import { lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

const Characters = lazy(() => import("./pages/Characters"));
const Planets = lazy(() => import("./pages/Planets"));
const Strength = lazy(() => import("./pages/Strength"));

const routes = [
  { label: "Characters", path: "/characters" },
  { label: "Planets", path: "/planets" },
  { label: "Strength", path: "/strength" },
];

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <header className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold">Star Wars Charts</div>
          <nav>
            <ul className="flex gap-3">
              {routes.map((r) => (
                <li key={r.path}>
                  <NavLink
                    to={r.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium ${
                        isActive
                          ? "bg-slate-700 text-white"
                          : "text-slate-300 hover:bg-slate-800"
                      }`
                    }
                  >
                    {r.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* lazy loaded routes with suspense */}
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 w-full">
        <div className="bg-white rounded-lg shadow p-6">
          <Routes>
            <Route path="/characters" element={<Characters />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/strength" element={<Strength />} />
            <Route path="*" element={<Characters />} />
          </Routes>
        </div>
      </main>

      <footer className="text-center text-sm text-slate-500 py-4">
        © {new Date().getFullYear()} Star Wars Charts
      </footer>
    </div>
  );
}

export default App;
