import React from "react";
import {
  Navbar,
  Header,
  Stats,
  Business,
  Billing,
  CardDeal,
  FAQ,
  OurServices,
  Footer,
  CopyRights,
} from "./components";

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
      <Billing />
      <CardDeal />
      <FAQ />
      <OurServices />
      <Footer />
      <CopyRights />
    </div>
  </div>
);
export default App;
