import { Link } from "react-router-dom";
import "./App.css";
// import americanoPic from "./imgallpd/americano.jpg";
import allProduct from "./imgallpd/index";
console.log(allProduct);

function App() {
  return (
    <div className="flex flex-col justify-between gap-6 font-bold">
      <h1 className="text-center text-5xl">Home Page for dev</h1>

      <Link to="/home">
        <button>home</button>
      </Link>
      <Link to="/login">
        <button>login</button>
      </Link>
      <Link to="/register">
        <button>register</button>
      </Link>
      <Link to="/allProduct">
        <button>allProduct</button>
      </Link>
      <Link to="/cart">
        <button>cart</button>
      </Link>
      <Link to="/payment">
        <button>payment</button>
      </Link>

      {/* ###### ALL PICTURE ###### */}

      <img src={allProduct.americano} width={120} height={120} />
      <img src={allProduct.brewedcoffee} width={120} height={120} />
      <img src={allProduct.cafemocha} width={120} height={120} />
      <img src={allProduct.caramelmacchiato} width={120} height={120} />
      <img src={allProduct.custardcream} width={120} height={120} />
      <img src={allProduct.darkchoc} width={120} height={120} />
      <img src={allProduct.expressoconpana} width={120} height={120} />
      <img src={allProduct.iceclassicchoc} width={120} height={120} />
      <img src={allProduct.iceflatwhite} width={120} height={120} />
      <img src={allProduct.JumboSausage} width={120} height={120} />
      <img src={allProduct.maltydelight} width={120} height={120} />
      <img src={allProduct.mochafrap} width={120} height={120} />
      <img src={allProduct.myrtillusCheeseCake} width={120} height={120} />
      <img src={allProduct.prunus} width={120} height={120} />
      <img src={allProduct.shot} width={120} height={120} />
      <img src={allProduct.softoatmilk} width={120} height={120} />
      <img src={allProduct.strawberrytart} width={120} height={120} />
      <img src={allProduct.YuzuColdBrew} width={120} height={120} />
    </div>
  );
}

export default App;
