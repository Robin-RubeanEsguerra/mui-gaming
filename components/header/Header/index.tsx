"use client";
import React, { FC, PropsWithChildren } from "react";
import useStyles from "./useStyles";
import Image from "next/image";
import showdownLogo from "../../../assets/showdownLogo.png";

type HeaderType = PropsWithChildren;
const Header: FC<HeaderType> = ({ children }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.headerColor}>
      <Image
        src={showdownLogo}
        alt="ShowDownlLogo"
        className={classes.showdownLogo}
      />
      <div className={classes.headerContainer}>{children}</div>
    </div>
  );
};

export default Header;
