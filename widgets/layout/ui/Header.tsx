import { FC } from "react";
import Link from "next/link";
// import Image from "next/image";
import { Box, Typography } from "@mui/material";

import { styles } from "./styles";
// import LogoIcon from "../../../images/logo.svg";

export const Header: FC = () => {
  return (
    <Box component='header' sx={styles.header}>
      <Box sx={styles.header.content}>
        <Link href='/'>
          <Box sx={styles.header.logo}>
            {/* <Image style={{ width: 30, height: 30, marginRight: 8 }} alt='logo' src={LogoIcon} /> */}
            <Typography fontSize={24} fontWeight={500}>
              SAQTA
            </Typography>
          </Box>
        </Link>
        <Box component='nav'>
          <Box component='ul' sx={styles.header.links}>
            <Box component='li'>
              <Link href='about'>О Компании</Link>
            </Box>
            <Box component='li'>
              <Link href='services'>Услуги</Link>
            </Box>
            <Box component='li'>
              <Link href='addresses'>Адреса и Контакты</Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
