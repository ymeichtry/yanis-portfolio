import { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import Homepage from "./Pages/Homepage";
import Pageload from "./Components/pageload/Pageload";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <div>
        {loading ? <Pageload /> : <Homepage />}
      </div>
    </HelmetProvider>
  );
}

export default App;
