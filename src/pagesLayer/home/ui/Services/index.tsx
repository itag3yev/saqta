import { Box, Typography } from "@mui/material";
import { FC } from "react";

import { ServiceCard } from "./ServiceCard";

import { styles } from "./styles";
import { cards } from "./mock";

export const Services: FC = () => {
  return (
    <Box className='block'>
      <Typography textTransform='uppercase' textAlign='center' fontSize={36} fontWeight={500} marginBottom='50px'>
        Услуги складского хранения
      </Typography>
      <Box sx={styles.cards}>
        {cards.map(({ title, serviceDescriptionList }, index) => (
          <ServiceCard key={`card-${index}`} title={title} serviceDescriptionList={serviceDescriptionList} />
        ))}
      </Box>
    </Box>
  );
};
