import { useEffect, useState } from "react";
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
    <div>
      {loading ? <Pageload /> : <Homepage />}
    </div>
  );
}

export default App;
