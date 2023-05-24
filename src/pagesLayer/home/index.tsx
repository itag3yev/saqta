import { FC } from "react";

import { Advantages, Services, Calculator } from "./ui";

const Home: FC = () => {
  return (
    <>
      <Advantages />
      <Services />
      <Calculator />
    </>
  );
};

export default Home;
