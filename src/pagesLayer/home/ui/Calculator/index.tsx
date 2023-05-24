import { Box, Typography } from "@mui/material";
import { FC, useState } from "react";

import { SizeSelect } from "./SizeSelect";

import { styles } from "./styles";
import { sizes, months } from "./mock";
import { Checkout } from "./Checkout";

export const Calculator: FC = () => {
  const [selectedSize, setSelectedSize] = useState(() => sizes[0]);
  const [selectedMonths, setSelectedMonths] = useState(() => months[0]);

  const handleSelectedSizeChange = (size: number) => {
    setSelectedSize(size);
  };

  const handleSelectedMonthsChange = (months: number) => {
    setSelectedMonths(months);
  };

  return (
    <Box sx={styles.wrapper}>
      <Box className='block'>
        <Typography textTransform='uppercase' textAlign='center' fontSize={36} fontWeight={500} marginBottom='50px'>
          Калькулятор для хранения вещей
        </Typography>

        <Box sx={styles.content}>
          <SizeSelect
            selectedMonths={selectedMonths}
            selectedSize={selectedSize}
            handleSelectedSizeChange={handleSelectedSizeChange}
            handleSelectedMonthsChange={handleSelectedMonthsChange}
          />

          <Checkout size={selectedSize} months={selectedMonths} />
        </Box>
      </Box>
    </Box>
  );
};
