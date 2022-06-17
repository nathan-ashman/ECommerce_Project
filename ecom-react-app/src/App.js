import './App.css';
import './styles.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Banner from './components/Banner';
import NewProducts from './components/NewProducts';
import CTASales from './components/CTASales';
import SeasonalSales from './components/SeasonalSales';
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Products />
      <Banner />
      <NewProducts />
      <CTASales />
      <SeasonalSales />
    </>
  );
}

export default App;
