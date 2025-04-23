import Feedback from "@/components/landingPage/Feedback";
import Hero from "@/components/landingPage/Hero";

import Schemes from "@/components/landingPage/Schemes";

export default async function Home() {
  return (
    <main className="">
      <Hero />
      <Schemes />
      <Feedback />
    </main>
  );
}
