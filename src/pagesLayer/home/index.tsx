import { FC } from "react";

import { Advantages, Services, Calculator, Banner } from "./ui";

const Home: FC = () => {
  return (
    <>
      <Banner />
      <Services />
      <Advantages />
      {/* <Calculator /> */}
    </>
  );
};

export default Home;
