import React from "react";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import MasterLayout from "../components/MasterLayout/MasterLayout";

const HomePage = () => {
  return (
    <MasterLayout>
      <Hero />
      <Feature />
    </MasterLayout>
  );
};

export default HomePage;
