import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  height?: string | number | undefined | null;
}

const TemplateCard = ({ children, height }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "22px",
        height: height || "150px",
      }}
    >
      {children}
    </Box>
  );
};

export default TemplateCard;
