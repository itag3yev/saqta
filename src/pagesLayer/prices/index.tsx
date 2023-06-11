import { FC } from "react";
import { Box, Typography } from "@mui/material";

import { PricesTable } from "./Table";

const Prices: FC = () => {
  return (
    <Box style={{ background: "#f1f1f1", paddingBottom: "24px" }}>
      <div className='block'>
        <Typography textTransform='uppercase' textAlign='center' fontSize={36} fontWeight={300} marginBottom='24px'>
          Цены
        </Typography>

        <PricesTable />
      </div>
    </Box>
  );
};

export default Prices;