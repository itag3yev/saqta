import { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import { Roboto } from "next/font/google";
import cm from "classnames";

import { Header } from "./Header";
import { Footer } from "./Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={cm(roboto.className, "main-layout")}>
      <Header />
      <Box className='main' component='main'>
        {children}
      </Box>
      <Footer />
    </div>
  );
};
