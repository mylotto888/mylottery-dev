import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Mint from "@/components/layouts/Mint";
import NavBar from "@/components/layouts/NavBar";

export default function Home() {
  return (
    <main className="bg-white">
      <NavBar />
      <Header />
      <Mint />
      <Footer />
    </main>
  )
}
