import { FC } from "react";
import { Box } from "@mui/material";

import { styles } from "./styles";
import { StorageFeatures } from "./ui/StorageFeatures";

const Services: FC = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box className='block'>
        <StorageFeatures />
      </Box>
    </Box>
  );
};

export default Services;
