import { Box, IconButton, Stack, Tooltip, useMediaQuery } from "@mui/material";
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import menuItems from "../../constants/drawerItems";

interface Props {
  children: ReactNode | ReactNode[];
}

const Drawer = ({ children }: Props) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        height: isMobile ? "100%" : "100vh",
        backgroundColor: "#F8F9FA",
      }}
    >
      {!isMobile && (
        <Box
          height="100%"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "24px",
            borderRight: "1px solid #DEE2E6",
            boxSizing: isMobile ? null : "border-box",
          }}
        >
          <Stack direction="column" justifyContent="center" spacing="20px">
            {menuItems.map((item) => (
              <Tooltip title={item.label} placement="right" key={item.id}>
                <IconButton
                  sx={{
                    backgroundColor: "white",
                    border:
                      location.pathname === item.route
                        ? "2px solid #333333"
                        : null,
                  }}
                  onClick={() => navigate(item.route)}
                >
                  {item.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Stack>
        </Box>
      )}
      {children}
    </Box>
  );
};

export default Drawer;
