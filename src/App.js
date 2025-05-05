import Header from "./components/1.Header";
import About from "./components/3.Himself";
import Hero from "./components/2.Hero";
import Feedbacks from "./components/4.Feedbacks";
import Services from "./components/5.Clinic";
import Topics from "./components/6.Approaches";
import Questions from "./components/7.Faq";
import Location from "./components/8.Contact";
import Footer from "./components/9.Footer";
import Prefooter from "./components/10.Prefooter";
import WhatsAppButton from "./components/Whastapp";


function App() {
  return (
    <div className="App">
      <Header/>      
      <Hero/>
      <About/>
      <Feedbacks/>
      <Services/>
      <Topics/>
      <Questions/>
      <Location/>
      <Prefooter/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  );
}

export default App;
