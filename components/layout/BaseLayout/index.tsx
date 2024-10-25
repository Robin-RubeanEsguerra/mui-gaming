"use client";
import { FC, PropsWithChildren } from "react";
import useStyles from "./useStyle";
import Header from "../../header/Header/index";
type BaseType = PropsWithChildren;

const BaseLayout: FC<BaseType> = ({ children }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.mainContent}>
      <div className={classes.containerContent}>
        <Header title="HOME" />
        {children}
      </div>
    </div>
  );
};

export default BaseLayout;
