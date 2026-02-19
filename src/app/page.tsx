import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { MenuSection } from "@/components/MenuSection"
import { EnvironmentSection } from "@/components/EnvironmentSection"
import { ActivitiesSection } from "@/components/ActivitiesSection"
import { EventsSection } from "@/components/EventsSection"
import { ReservationSection } from "@/components/ReservationSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <Header />
      <Hero />
      <EnvironmentSection />
      <MenuSection />
      <ActivitiesSection />
      <EventsSection />
      <ReservationSection />
      <Footer />
    </main>
  );
}
