"use client";

import { useState } from "react";
import { Text, Box, Button, ScrollArea, Stack } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const sidebarTools = [
  { label: "Remover", icon: "/eraser-off.svg", href: "/remover" },
  { label: "Splitter", icon: "/prism-light.svg", href: "/splitter" },
  { label: "Pitcher", icon: "/device-mobile-vibration.svg", href: "/pitcher" },
  {
    label: "Key BPM Finder",
    icon: "/keyframe-align-center.svg",
    href: "/key-bpm-finder",
  },
  { label: "Cutter", icon: "/cut.svg", href: "/cutter" },
  { label: "Joiner", icon: "/arrows-join-2.svg", href: "/joiner" },
  { label: "Recorder", icon: "/microphone.svg", href: "/recorder" },
  { label: "Karaoke", icon: "/disc.svg", href: "/karaoke" },
];

export default function Sidebar() {
  const [opened, setOpened] = useState(true);
  const pathname = usePathname();

  return (
    <Stack bg="#1c1c26" align="center" justify="space-evenly">
      {/* Sidebar Toggle Button */}
      <Button
        onClick={() => setOpened((prev) => !prev)}
        bg="#1c1c26"
        m={0}
        p={0}
      >
        <Image
          src="/side-toggle.svg"
          alt="Toggle Sidebar"
          width={40}
          height={40}
        />{" "}
      </Button>

      {/* Sidebar */}
      {opened && (
        <Box bg="#1c1c26" py="lg" mih="80vh">
          {/* Scrollable Tool List */}
          <ScrollArea
            style={{
              height: "400px",
              overflowY: "scroll",
            }}
          >
            <Stack>
              {sidebarTools.map((tool, index) => {
                // Determine if the link is active
                const isActive = pathname === tool.href;

                return (
                  <Link
                    href={tool.href}
                    key={index}
                    style={{
                      textDecoration: "none",
                      opacity: isActive ? 1 : 0.7,
                      transition: "opacity 0.2s ease",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onMouseEnter={(e) => {
                      // Change opacity on hover
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      // Revert opacity if not active
                      e.currentTarget.style.opacity = isActive ? "1" : "0.7";
                    }}
                  >
                    <Image
                      src={tool.icon}
                      alt={tool.label}
                      width={35}
                      height={35}
                    />{" "}
                    <Text c="#eee" size="sm" style={{ textAlign: "center" }}>
                      {tool.label}
                    </Text>
                  </Link>
                );
              })}
            </Stack>
          </ScrollArea>

          {/* Support Link */}
          <Box mt="xl">
            <Link
              href="/support"
              style={{
                textDecoration: "none",
                opacity: pathname === "/support" ? 1 : 0.7,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/help-circle.svg"
                alt="Support"
                width={40}
                height={40}
              />{" "}
              <Text c="#eee">Support</Text>
            </Link>
          </Box>
        </Box>
      )}
      {/* Custom scrollbar CSS */}
      <style jsx global>{`
        /* Custom Scrollbar Styles for ScrollArea */
        .mantine-ScrollArea-scrollbar {
          background: #1c1c26; /* Background of the scrollbar track */
        }
        .mantine-ScrollArea-thumb {
          background: #665dc3; /* Color of the scrollbar thumb */
        }
      `}</style>
    </Stack>
  );
}
