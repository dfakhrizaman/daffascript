import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import menuItems from "../../constants/drawerItems";
import useIsMobile from "../../hooks/useIsMobile";
import DetailModal from "../DetailModal";

interface Props {
  children: ReactNode | ReactNode[];
}

const Drawer = ({ children }: Props) => {
  const isMobile = useIsMobile();
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
      {location.pathname === "/" ? (
        children
      ) : (
        <Box
          sx={
            location.pathname !== "/" ? { overflowY: "auto", flexGrow: 1 } : {}
          }
        >
          {children}
        </Box>
      )}

      <DetailModal />
    </Box>
  );
};

export default Drawer;
