import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";
import BuyKelys from "./components/BuyKelys";
import Voting from "./components/Voting";
import Whitepaper from "./components/Whitepaper";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-6 space-y-10">
        <section id="home" className="text-center">
          <h1 className="text-4xl font-bold">Bienvenue sur Kelys</h1>
          <p className="mt-2 text-lg">Investissez dans des projets entrepreneuriaux et votez pour les subventions.</p>
        </section>

        <section id="ico" className="text-center">
          <h2 className="text-2xl font-semibold">ICO Kelys</h2>
          <Countdown />
          <BuyKelys />
        </section>

        <section id="voting" className="text-center">
          <h2 className="text-2xl font-semibold">Votez pour un projet</h2>
          <Voting />
        </section>

        <section id="whitepaper" className="text-center">
          <h2 className="text-2xl font-semibold">Whitepaper</h2>
          <Whitepaper />
        </section>

        <section id="faq" className="text-center">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
