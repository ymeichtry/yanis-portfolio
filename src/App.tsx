import { useEffect, useState } from "react";
import Homepage from "./Pages/Homepage.tsx";
import Pageload from "./components/pageload/Pageload.tsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? <Pageload /> : <Homepage />}
    </div>
  );
}

export default App;
