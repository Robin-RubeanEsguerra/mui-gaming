"use client";

import Link from "next/link";
import { FC } from "react";

type TabsType = {
  label: string;
  link: string;
  isActive?: true;
};
const Tabs: FC<TabsType> = ({ label, isActive, link }) => {
  return isActive && <Link href={link}>{label}</Link>;
};

export default Tabs;
