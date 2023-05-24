import { Box, Typography } from "@mui/material";
import { FC } from "react";

import { styles } from "./styles";

interface Props {
  title: string;
  serviceDescriptionList: string[];
}

export const ServiceCard: FC<Props> = ({ title, serviceDescriptionList }) => {
  return (
    <Box sx={styles.card}>
      <Typography textTransform='uppercase' fontSize={25} fontWeight={500} marginBottom='24px'>
        {title}
      </Typography>
      <Box style={{ padding: "0px 24px" }} component='ul'>
        {serviceDescriptionList.map((description, index) => (
          <Box component='li' key={`description-${index}`}>
            <Typography fontSize={16} lineHeight='24px'>
              {description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
