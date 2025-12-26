import Image from "next/image";
import AudioPlayer from "../components/AudioPlayer";
import logo from "../assets/logo.png";

// Renamed 'App' to 'Home' to align with Next.js page conventions
export default function Home() {
  return (
    <div className="container">
      <header className="header">
        {/* These elements should correctly inherit the 'Berkshire Swash' font from globals.css */}
        <h1>Al Lubnaniya Radio</h1>
      </header>
      <main className="main-content">
        {/* The 'logo' class styles the Image component */}
        <Image src={logo} alt="Al Lubnaniya Radio Logo" className="logo" />

        {/* This <h2> element should correctly inherit the 'Changa' font from globals.css */}
        <h2>الإذاعة اللبنانية الدولية</h2>

        <AudioPlayer
          src="https://lbigroup.radioca.st/stream"
          title="Al Lubnaniya Radio – Live"
        />
      </main>
      <footer className="footer">
        <div>
          {/* These elements should correctly inherit the 'Berkshire Swash' and 'Changa' fonts from globals.css */}
          <h3>Al Lubnaniya Radio – Lebanon</h3>
          <p>الإذاعة اللبنانية الدولية</p>
        </div>
      </footer>
    </div>
  );
}

// The 'export default App;' pattern is replaced by 'export default function Home() {'
