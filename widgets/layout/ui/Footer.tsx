import { FC } from "react";
import { Box, Typography } from "@mui/material";

import { styles } from "./styles";

export const Footer: FC = () => {
  return (
    <Box component='footer' sx={styles.footer}>
      <Typography>@ Copyright {new Date().getFullYear()} by SAQTA. All rights reserved.</Typography>
    </Box>
  );
};
