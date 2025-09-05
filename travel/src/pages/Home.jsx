import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import Footers from "../components/Footer";
import HomePage from "../components/HomePage";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* <ThemeToggle /> */}
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footers />
      <StarBackground />
    </div>
  );
};
