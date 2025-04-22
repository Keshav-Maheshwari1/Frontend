import Feedback from "@/components/landingPage/Feedback";
import Hero from "@/components/landingPage/Hero";
import Navbar from "@/components/landingPage/Navbar";
import Schemes from "@/components/landingPage/Schemes";


async function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
export default async function Home() {
  await wait(3000);
  return (
    <main className="">
      <Navbar/>
      <Hero/>
      <Schemes/>
      <Feedback/>
      
    </main>
  );
}
