"use client"

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  createStyles,
  Navbar,
  Group,
  Code,
  getStylesRef,
  rem,
  Text,
} from "@mantine/core";
import {
  LuGraduationCap,
  LuHome,
  LuFileText,
  LuUser,
  LuLogOut,
  LuBanknote
} from "react-icons/lu";

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.sm} ${theme.spacing.sm}`,
    borderRadius: theme.radius.lg,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color: theme.colors.blue,
    //   theme.colorScheme === "dark"
    //     ? theme.colors.dark[2]
    //     : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
      },
    },
  },
}));

const data = [
  { link: "/dashboard/asesi", label: "Home", icon: <LuHome size={20}/> },
  {
    link: "/dashboard/asesi/profil",
    label: "Profil Anda",
    icon: <LuUser size={20}/>,
  },
  {
    link: "/dashboard/asesi/skemasertifikasi",
    label: "Skema Sertifikasi",
    icon: <LuGraduationCap size={20}/>,
  },
  {
    link: "/dashboard/asesi/asesmen",
    label: "Asesmen Anda",
    icon: <LuFileText size={20}/>,
  },
  {
    link: "/dashboard/asesi/pembayaran",
    label: "Konfirmasi Pembayaran",
    icon: <LuBanknote size={20}/>,
  },
];

const user = [
    {
        src: "@public/assets/images/asesor.jpg",
        label: "Budiman",
        id: "2007411040"
    }
]

export default function NewSidebar() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Home");

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        // event.preventDefault();
        setActive(item.label);
      }}
    >
      {/* <item.icon className={classes.linkIcon} size={20} stroke={1.5} /> */}
      <div className="inline-flex">
        <span className="mr-3">{item.icon}</span>
        <span>{item.label}</span>
      </div>
    </Link>
  ));

  return (
    <Navbar  style={{ height: '100vh' }} width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="center">
          <div className="flex flex-col">
            <p className="mx-auto text-lg text-primary-blue font-semibold mb-3">S.I.LSP</p>
            <Image src="/assets/images/asesor2.jpg"
            alt="logoAsesi"
            width={200}
            height={200}
            className="rounded-full object-cover w-[100px] h-[100px] mb-4" />
            <p className="mx-auto text-primary-blue font-semibold">Nur Sifa Amalia</p>
            <p className="mx-auto">2007411040</p>
          </div>
        </Group>
        <div className="">
          {links}
        </div>
      </Navbar.Section>

      {/* <Navbar.Section className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section> */}
      <Navbar.Section className={classes.footer}>
        <Link 
          href="/"
          className="inline-flex w-full items-center p-3 text-red-600 m-1 hover:bg-red-100 rounded-xl">
          <LuLogOut className="mr-3" size={20}/>
          <span>Log Out</span>
        </Link>
      </Navbar.Section>
    </Navbar>
  )

}
