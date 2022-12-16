import React from "react";
import { Navbar, Header, Stats, Business } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden text-white">
    <div className="sm:px-16 px-6">
      <div className="xl:max-w-[1280px] w-full mx-auto">
        <Navbar />
      </div>
    </div>

    <div className="xl:max-w-[1280px] w-full mx-auto">
      <Header />
      <Stats />
      <Business />
    </div>
  </div>
);
export default App;
