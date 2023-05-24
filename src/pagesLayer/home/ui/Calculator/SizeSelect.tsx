import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";

import { months, sizes } from "./mock";
import { styles } from "./styles";
import { OutlinedButton } from "../../../../../shared/components/Button";

interface Props {
  selectedSize: number;
  selectedMonths: number;
  handleSelectedSizeChange: (size: number) => void;
  handleSelectedMonthsChange: (months: number) => void;
}

export const SizeSelect: FC<Props> = ({
  selectedSize,
  selectedMonths,
  handleSelectedMonthsChange,
  handleSelectedSizeChange,
}) => {
  return (
    <>
      <Typography marginBottom='12px'>Выберите размер бокса</Typography>

      <Box marginBottom='36px' sx={styles.buttons}>
        {sizes.map((size) => (
          <OutlinedButton
            key={size}
            onClick={() => handleSelectedSizeChange(size)}
            isSelected={selectedSize === size}
            text={`${size} м²`}
          />
        ))}
      </Box>

      <Box marginBottom='36px' sx={styles.buttons}>
        {months.map((month) => (
          <OutlinedButton
            key={month}
            onClick={() => handleSelectedMonthsChange(month)}
            isSelected={selectedMonths === month}
            text={`${month}мес.`}
            borderColor="#253350"
          />
        ))}
      </Box>
    </>
  );
};
