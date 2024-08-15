import ContactCard from "./Components/ContactCard";
import Ubication from "./Components/Ubication";

export default function ContactModule() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen mt-16 overflow-x-hidden">
      <ContactCard />
      <Ubication />
    </main>
  );
}
