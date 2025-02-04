import ButtonGradient from "./assets/svg/ButtonGradient";
// import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Collaboration from "./components/Collaboration";


const App = () => {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* <Button className="mt-10" href="#login">
          Something
          </Button> */}
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />

      </div>
      <ButtonGradient />
    </>
  );
};

export default App;