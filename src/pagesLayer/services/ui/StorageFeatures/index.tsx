import { Box, Typography } from "@mui/material";
import { FC } from "react";

import { features } from "./mock";
import { styles } from "./styles";
import Image from "next/image";

export const StorageFeatures: FC = () => {
  return (
    <>
      <Typography textAlign='center' fontSize={40} fontWeight={500} marginBottom='8px'>
        Услуги
      </Typography>
      <Typography margin='0 auto' width='730px' textAlign='center' fontSize={16} lineHeight={2} fontWeight={400}>
        Наши помещения забиты удобствами, которые помогут вам в хранении. Мы возьмем на себя все усилия и заботы о
        самостоятельном хранении — от помощи при переезде до надежной безопасности и удобного доступа впоследствии.
      </Typography>

      <Box sx={styles.grid} marginTop='64px'>
        {features.map(({ title, img }, index) => (
          <Box display='flex' alignItems='center' key={`feature-${index}`}>
            <Image src={`/images/icons/${img}`} width={65} height={65} alt='feature icon' />
            <Typography marginLeft='16px' fontSize={20} fontWeight='bold'>
              {title}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};
