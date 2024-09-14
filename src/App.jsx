import AllRoutes from "./routes/AllRoutes.jsx";
import { Header, Footer } from "./components/index.jsx";

const App = () => {
  return (
    <main>
      <Header />
      <AllRoutes />
      <Footer />
    </main>
  );
};

export default App;
