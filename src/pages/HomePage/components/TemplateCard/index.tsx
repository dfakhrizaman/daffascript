import { Theme } from "@emotion/react";
import { Box, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  height?: string | number | undefined | null;
  sx?: SxProps<Theme>;
}

const TemplateCard = ({ children, height, sx }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "22px",
        height: height || "150px",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default TemplateCard;
