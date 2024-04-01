import Experiences from "@/components/Experiences";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Welcome />
      <Experiences />
    </main>
  );
}
