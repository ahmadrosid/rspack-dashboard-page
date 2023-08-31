import { Sidebar } from "./components/sidebar";
import { Header } from "./components/header";
import { HighlightCard } from "./components/highlight-card";
import { TailwindIndicator } from "./components/tailwind-indicator";
import { ReportCard } from "./components/report-card";

function App() {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="p-12 flex-1 bg-gray-100 space-y-4">
          <Header />
          <HighlightCard />
          <ReportCard />
        </main>
      </div>
      <TailwindIndicator />
    </>
  );
}

export default App;
