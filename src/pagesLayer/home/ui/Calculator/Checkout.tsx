import { Box, Button, Typography } from "@mui/material";
import { CSSProperties, FC, ReactNode } from "react";

import { styles } from "./styles";
import { PRICE_FOR_SQAURE } from "../../../../../shared/constants";

interface Props {
  size: number;
  months: number;
}

export const Checkout: FC<Props> = ({ size, months }) => {
  const pricePerMonth = size * PRICE_FOR_SQAURE;

  return (
    <Box sx={styles.checkout}>
      <Box sx={{ ...styles.checkout.section, ...styles.checkout.divider }}>
        <Text isBold>Стоимость в месяц</Text>
        <Box display='flex'>
          <Text>Площадь:</Text>
          <Text isBold style={{ marginLeft: "4px" }}>{`${size}м²`}</Text>
        </Box>
        <Box display='flex'>
          <Text>Цена за м²:</Text>
          <Text isBold style={{ marginLeft: "4px" }}>
            {`${PRICE_FOR_SQAURE.toLocaleString("en-US")}₸`}
          </Text>
        </Box>
      </Box>
      <Box sx={styles.checkout.section}>
        <Box>
          <Text isBold>{`${pricePerMonth.toLocaleString("en-US")}₸/мес`}</Text>
          <Box display='flex'>
            <Text>Итог:</Text>
            <Text isBold style={{ marginLeft: "4px" }}>
              {`${(pricePerMonth * months).toLocaleString("en-US")}₸`}
            </Text>
          </Box>
        </Box>

        <Button variant='contained' style={{ backgroundColor: "#253350", color: "#FFF", width: "196px" }}>
          Заказать
        </Button>
      </Box>
    </Box>
  );
};

const Text: FC<{ children: ReactNode; isBold?: boolean; style?: CSSProperties }> = ({
  children,
  isBold = false,
  ...rest
}) => (
  <Typography fontSize='16px' lineHeight='24px' color='#212529' fontWeight={isBold ? "bolder" : 400} {...rest}>
    {children}
  </Typography>
);
