import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/material";

import { styles } from "./styles";
import Logo from "../../../public/images/saqta.png";

export const Header: FC = () => {
  return (
    <Box component='header' sx={styles.container}>
      <Box display='flex' justifyContent='center'>
        <Box sx={styles.container.menu}>
          <Box sx={styles.container.content}>
            <Link href='/'>
              <Image className='logo-image' alt='logo' src={Logo} />
            </Link>
            <Box component='nav'>
              <Box component='ul' sx={styles.container.links}>
                <Box component='li'>
                  <Link href='services'>Услуги</Link>
                </Box>
                <Box component='li'>
                  <Link href='prices'>Цены</Link>
                </Box>
                <Box component='li'>
                  <Link href='about'>О Компании</Link>
                </Box>
                <Box component='li'>
                  <Link href='login'>Войти</Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};