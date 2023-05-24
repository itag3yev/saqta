import { FC } from "react";
import { Button } from "@mui/material";

interface Props {
  text: string;
  color?: string;
  borderColor?: string;
  isSelected?: boolean;
  onClick: () => void;
}

export const OutlinedButton: FC<Props> = ({
  text,
  onClick,
  borderColor = "#E7CF9F",
  color = "#253350",
  isSelected = false,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={isSelected ? "contained" : "outlined"}
      style={{
        textTransform: "lowercase",
        color: isSelected ? "#FFF" : color,
        borderColor,
        backgroundColor: isSelected ? borderColor : "transparent",
        borderWidth: 2,
        boxShadow: "none",
        fontSize: 16,
      }}
    >
      {text}
    </Button>
  );
};
