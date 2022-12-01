import Header from './components/Header'
import MainSection from './components/MainSection'
import Footer from './components/Footer'
import sida1 from './assets/sida2.png'
import sida2 from './assets/sida3.png'
import sida3 from './assets/sida4.png'

function App() {
  return (
    <div className='relative overflow-x-hidden'>
        <img src={sida1}  className="fixed z-50 w-10 h-10 floatAround" />
        <img src={sida2}  className="fixed z-50 w-14 h-14 floatAround" />
        <img src={sida3}  className="fixed z-50 w-20 h-20 floatAround" />
        <Header />
        <MainSection />
        <Footer />
    </div>
  );
}

export default App;
