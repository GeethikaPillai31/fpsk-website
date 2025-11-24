import { Header } from "@/components/Header";

function App() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background from Bottom */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #6366f1 100%)",
        }}
      />
      
      <Header />
      <main className="pt-24 relative z-10">
        {/* Landing page content will go here */}
      </main>
    </div>
  );
}

export default App;
