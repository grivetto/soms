import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { MenuSection } from "@/components/MenuSection"
import { EnvironmentSection } from "@/components/EnvironmentSection"
import { ReservationSection } from "@/components/ReservationSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <Hero />

      <MenuSection />

      <EnvironmentSection />

      <ReservationSection />
      <Footer />
    </main>
  );
}
