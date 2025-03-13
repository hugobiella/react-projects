import IconButton from "@mui/material/IconButton";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import React from "react";
import { useTheme } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";

export type ThemeToggleButtonProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
};

const ThemeToggleButton = (props: ThemeToggleButtonProps) => {
  const mobileCheck = useMediaQuery("(min-width: 500px)");
  const {
    ColorModeContext = React.createContext({ toggleColorMode: () => {} }),
  } = props;
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <>
      <IconButton
        sx={{
          mr: 2,
          display: "flex",
          alignItems: "center",
          gap: 1,
          borderRadius: "8px", // bordas arredondadas
          padding: "6px 12px", // ajusta o padding para um formato mais retangular
          ":hover": {
            backgroundColor: theme.palette.mode === "dark" ? "#424242" : "#f0f0f0", // cor de fundo de hover
          },
        }}
        title={theme.palette.mode + " mode"}
        aria-label={theme.palette.mode + " mode button"}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness4Icon />
        ) : (
          <Brightness7Icon />
        )}
        {mobileCheck && (
          <Typography variant="body2">
            {theme.palette.mode === "dark" ? "Dark Mode" : "Light Mode"}
          </Typography>
        )}
      </IconButton>
    </>
  );
};

export default ThemeToggleButton;
