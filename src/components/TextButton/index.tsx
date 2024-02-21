import { Theme } from "@emotion/react";
import { Box, SxProps, Typography } from "@mui/material";
import { MouseEventHandler, ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[] | string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  sx?: SxProps<Theme>;
}

const TextButton = ({ children, onClick, sx }: Props) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "baseline" }}
    >
      <Typography
        sx={{
          color: "#333333",
          fontWeight: "bold",
          textDecoration: "underline",
          cursor: "pointer",
          ":hover": {
            textDecoration: "none",
            color: "#0080AA",
          },
          ...sx,
        }}
        onClick={onClick}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default TextButton;
