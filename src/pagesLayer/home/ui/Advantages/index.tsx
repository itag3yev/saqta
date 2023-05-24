import { Box, Typography } from "@mui/material";
import { FC } from "react";

import { Advantage } from "./Advantage";

import { styles } from "./styles";
import { advantages } from "./mock";

export const Advantages: FC = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box className='block'>
        <Typography textAlign='center' fontSize={36} fontWeight={500} marginBottom='50px'>
          НАШИ ПРЕИМУЩЕСТВА
        </Typography>
        <Box sx={styles.wrapper.advantages}>
          {advantages.map(({ title, subtitle }, index) => (
            <Advantage key={`advantage-${index}`} title={title} subtitle={subtitle} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
