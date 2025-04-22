import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

async function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
export default async function Home() {
  await wait(3000);
  return (
    <main className="">
      <Navbar/>
      <Hero/>
    </main>
  );
}
