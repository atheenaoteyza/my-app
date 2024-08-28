import AllRoutes from "./routes/AllRoutes.jsx";
import { Header, Footer } from "./components/index.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default App;
