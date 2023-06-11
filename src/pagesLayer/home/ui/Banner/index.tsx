import { FC } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

import { styles } from "./styles";
import BannerImage from "../../../../../public/images/storage.jpeg";

export const Banner: FC = () => {
  return (
    <Box style={{ position: "relative" }}>
      <Image className='banner-image' src={BannerImage} alt='banner' />
      <Box sx={styles.centered}>
        <Typography style={{ color: "#f7ed4a" }} fontSize='68px' lineHeight={1.2} marginBottom='24px' fontWeight={700}>
          Saqta Self Storage
        </Typography>
        <Typography color='white' fontSize='24px' lineHeight={1.6} fontWeight={700}>
          Склады для бизнеса и личного хранения
        </Typography>
      </Box>
    </Box>
  );
};
