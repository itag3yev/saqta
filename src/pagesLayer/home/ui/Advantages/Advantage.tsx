import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

interface Props {
  title: string;
  subtitle: string;
}

export const Advantage: FC<Props> = ({ title, subtitle }) => {
  return (
    <Box>
      <Typography component='h3' fontSize={18} fontWeight={500} marginRight='10px'>
        {title}
      </Typography>
      <Typography fontSize={14}>{subtitle}</Typography>
    </Box>
  );
};
