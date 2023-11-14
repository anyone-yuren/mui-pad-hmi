import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Box, Button, CSSObject, Theme, styled, useTheme } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import BarIcon from "../SvgIcon/BarIcon";
import TopIcon from "../SvgIcon/TopIcon";
import HomeIcon from "../SvgIcon/HomeIcon";
import IoIcon from "../SvgIcon/IoIcon";
import CloudIcon from "../SvgIcon/CloudIcon";

import { useGlobaltore } from "../../store/global";

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(15)} + 1px)`,
  },
});

const DrawerFooter = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const DrawerHeader = styled(DrawerFooter)(({ theme }) => ({
  marginBlock: theme.spacing(4),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const LeftNavBar = () => {
  const setActive = useGlobaltore((state) => state.setActive);
  const { setDialogOpen, dialogOpen, setClickPoints, setActiveApp } =
    useGlobaltore((state) => state);
  const theme = useTheme();
  return (
    <Drawer variant="permanent">
      <DrawerHeader>
        <TopIcon fontSize={120} />
      </DrawerHeader>
      <List
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box>
          <ListItem
            key={"homeIcon"}
            disablePadding
            onClick={(event) => {
              setClickPoints({
                x: event.clientX,
                y: event.clientY,
              });
              setTimeout(() => {
                setActiveApp("Dashboard");
                !dialogOpen && setDialogOpen();
              }, 200);
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                }}
              >
                <HomeIcon fontSize={84} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"homeIcon"}
            disablePadding
            onClick={(event) => {
              setClickPoints({
                x: event.clientX,
                y: event.clientY,
              });
              setTimeout(() => {
                setActiveApp("IOSignal");
                !dialogOpen && setDialogOpen();
              }, 200);
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                }}
              >
                <IoIcon fontSize={84} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"homeIcon"}
            disablePadding
            onClick={(event) => {
              setClickPoints({
                x: event.clientX,
                y: event.clientY,
              });
              setTimeout(() => {
                setActiveApp("Cloud");
                !dialogOpen && setDialogOpen();
              }, 200);
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                }}
              >
                <CloudIcon fontSize={84} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </Box>
      </List>
      <DrawerFooter>
        <ListItemButton
          onClick={() => {
            setActive();
            window.scrollTo(0, 0);
          }}
          sx={{
            justifyContent: "center",
          }}
        >
          <BarIcon />
        </ListItemButton>
      </DrawerFooter>
    </Drawer>
  );
};

export default LeftNavBar;
