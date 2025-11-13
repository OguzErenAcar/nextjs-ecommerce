import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./../styles/components/navbar.module.scss";
import navbar from "@/components/navbar";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useCart } from "@/contexts/cartContext";
import { Badge } from "@mui/material";
import Image from "next/image";
import { useAuth } from "@/contexts/authContext";
import { pages } from "@/utils/router";
import { useRouter } from "next/router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

export default function AppAppBar() {
  const Cart = useCart();
  const cartsizeRef = useRef(Cart.cart.length);

  useEffect(() => {
    cartsizeRef.current = Cart.cart.length;
  }, [Cart.cart]);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const router = useRouter();

  const goToLink = (el: string) => {
    router.push(el);
  };

   const CartItem = (): React.ReactNode => {
    return (
      <ShoppingCartIcon
      onClick={()=>goToLink("/cart")}
      sx={{color:"black",cursor:"pointer",
        marginRight:2
      }}
      >
      </ShoppingCartIcon>
    );
  };

  const AuthGroup = (): React.ReactNode => {
    return (
      <>
        <Button
         sx={{width:110}}
          onClick={() => goToLink("")}
          color="primary"
          variant="contained"
          fullWidth
        >
          Sign in
        </Button>

        <Box sx={{ my: 2 }} />
        <Button
          sx={{width:110}}
          onClick={() => goToLink("")}
          color="primary"
          variant="outlined"
          fullWidth
        >
          Sign up
        </Button>
      </>
    );
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages
                .filter((a) => a.onNavbar)
                .map((el, i) => (
                  <Button
                    onClick={() => goToLink(el.path)}
                    key={i}
                    variant="text"
                    color="info"
                    size="small"
                  >
                    {el.name}
                  </Button>
                ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
          <CartItem />
            <AuthGroup />
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                {pages
                  .filter((a) => a.onNavbar)
                  .map((el, i) => (
                    <>
                      <MenuItem>
                        <Button
                          className="w-full"
                          onClick={() => goToLink(el.path)}
                        >
                          {el.name}
                        </Button>
                      </MenuItem>
                    </>
                  ))}
                <Divider sx={{ my: 3 }} />
                <CartItem />
                <AuthGroup />
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
