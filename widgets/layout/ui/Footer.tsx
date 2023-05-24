import { FC } from "react";
import { Box, Typography } from "@mui/material";

import { styles } from "./styles";

export const Footer: FC = () => {
  return (
    <Box component='footer' sx={styles.footer}>
      <Typography>SAQTA {new Date().getFullYear()}</Typography>
    </Box>
  );
};
