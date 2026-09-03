import Section from '../components/section';
import Hero from '../components/hero';
import ProductListing from '../components/HomePage/productListing';
import { IoShirtOutline } from "react-icons/io5";
import { PiPantsLight } from "react-icons/pi";
import airJordanImg from '../assets/Laye 1.png';
import { useNavigate } from 'react-router-dom';


const categoryIcons = [
  { icon: <IoShirtOutline size={40} />, label: "Camisas" },
  { icon: <PiPantsLight size={40} />, label: "Shorts" },
];

const products = [
  {
    id: 1,
    name: "Camisa Rashguard Gross",
    image: "/placeholder-camisa.png",
    price: 129.9,
    priceDiscount: 99.9,
  },
  {
    id: 2,
    name: "Camisa Casual Gross",
    image: "/placeholder-camisa.png",
    price: 89.9,
  },
  {
    id: 3,
    name: "Short MMA Gross",
    image: "/placeholder-short.png",
    price: 119.9,
    priceDiscount: 99.9,
  },
  {
    id: 4,
    name: "Short MMA Gross Preto",
    image: "/placeholder-short.png",
    price: 119.9,
  },
];


const HomePage = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/produtos');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Hero />

      <div className="bg-[#f6f6f6] pb-20 pt-10">
        <h2 className="text-2xl font-semibold text-gray-700 px-2 md:px-20 lg:px-40 xl:px-58 mb-6">
          Coleções em destaque:
        </h2>

        <div className="grid sm:grid-cols-4 md:grid-cols-3 gap-3 px-2 md:px-20 lg:px-40 xl:px-58">
          {[
            "/collection-1.png",
            "/collection-2.png",
            "/collection-3.png",
          ].map((image, index) => (
            <div key={index} className="relative overflow-visible bg-white rounded-xl shadow aspect-square">
              <img
                src={image}
                alt={`Coleção ${index + 1}`}
                className="w-full h-full object-contain p-4"
              />
              <div className="absolute top-2 left-4 bg-lime-200 text-[12px] font-bold text-gray-900 px-3 py-[3px] rounded-full z-10">
                30% OFF
              </div>
              <div className="absolute bottom-6 left-4 z-10">
                <button
                  onClick={goToProducts}
                  className="bg-white text-primary text-sm font-semibold px-6 py-2 rounded-md shadow hover:bg-primary/10 transition"
                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>

        <Section>
          <div className="flex justify-center gap-6 flex-wrap px-4 md:px-0 mt-10">
            {categoryIcons.map((item, index) => (
              <div
                key={index}
                onClick={goToProducts}
                className="flex flex-col items-center gap-2 cursor-pointer group"
              >
                <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 group-hover:text-primary transition-colors">
                  {item.icon}
                </div>
                <span className="text-sm text-gray-700 font-medium group-hover:text-primary transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <ProductListing products={products} />
        </Section>
      </div>

      <section className="bg-white py-16 px-4 md:px-20 lg:px-32 flex flex-col md:flex-row items-center gap-12 relative">
        <div className="absolute left-1/2 -translate-x-1/2 md:left-44 md:translate-x-0 top-1/2 -translate-y-1/2 
          w-[300px] h-[300px] md:w-[400px] md:h-[400px] 
          rounded-full bg-gradient-to-t from-white to-purple-200/40 z-0">
        </div>

        <div className="flex-1 z-10">
          <img
            src={airJordanImg}
            alt="Air Jordan edição de colecionador"
            className="w-full max-w-md ml-0 mx-auto"
          />
        </div>

        <div className="flex-1 text-center md:text-left z-10">
          <p className="text-sm font-semibold text-primary mb-2">Oferta especial</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 leading-tight mb-4">
            Air Jordan edição de<br />colecionador
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <button
            onClick={goToProducts}
            className="bg-primary hover:bg-primary text-white px-12 py-2 rounded-lg font-semibold transition"
          >
            Ver Oferta
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
