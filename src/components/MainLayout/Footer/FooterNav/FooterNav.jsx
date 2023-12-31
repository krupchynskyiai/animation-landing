import { Box } from "components/Box";
import { Logo } from "./Logo/Logo";
import { NavList } from "./NavList/NavList";

export const FooterNav = ({ scale }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height="45px"
      mb="24px"
      width="100%"
    >
      <Logo />
      <NavList />
    </Box>
  );
};
