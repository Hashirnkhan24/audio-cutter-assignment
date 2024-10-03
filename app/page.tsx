"use client";
import { useRef, useState } from "react"; // Import useRef and useState
import { Flex, Title, Text, Button } from "@mantine/core";
import Link from "next/link";
import Sidebar from "./components/Sidebar";
import { AudioEditor } from "./components/AudioEditor";

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement>(null); // Create a reference to the file input
  const [isAudioSelected, setIsAudioSelected] = useState(false); // State to track if audio is selected

  const handleBrowseFiles = () => {
    // Trigger the click on the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      console.log("Selected file:", file); // Handle the file
      setIsAudioSelected(true); // Update state to indicate audio is selected
    }
  };

  const handleCancel = () => {
    setIsAudioSelected(false); // Reset state when canceling
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input value
    }
  };

  return (
    <Flex w="100vw" h="100vh" bg={"#17171e"} c="#eee">
      <Sidebar />
      {isAudioSelected ? (
        <AudioEditor onCancel={handleCancel} /> // Pass the handleCancel function to AudioEditor if needed
      ) : (
        <Flex
          align="center"
          justify="center"
          direction="column"
          gap="xl"
          mih="100vh"
          w="100vw"
        >
          <Flex
            align="center"
            justify="space-between"
            w="12vw"
            styles={{
              root: { textTransform: "uppercase" },
            }}
          >
            <Text size="sm" style={{ fontWeight: 700 }}>
              How it works
            </Text>
            <Text
              size="sm"
              style={{ fontWeight: 700 }}
              component={Link}
              href="/joiner"
            >
              Joiner
            </Text>
          </Flex>
          <Title c="#eee" size="3rem">
            Audio Cutter
          </Title>
          <Text size="1.5rem" c="#d8d8e2">
            Free editor to trim and cut any audio file online
          </Text>
          <Button
            variant="outline"
            radius={50}
            mih="3rem"
            px="1.25rem"
            py="0.6rem"
            c="#eee"
            size="17px"
            mt="8px"
            styles={{
              root: { border: "2px solid #665dc3" },
            }}
            style={{ fontWeight: 400 }}
            onClick={handleBrowseFiles} // Call function to trigger file input
          >
            Browse My Files
          </Button>

          {/* Hidden File Input */}
          <input
            type="file"
            accept="audio/*" // Accept audio files
            style={{ display: "none" }} // Hide the file input
            ref={fileInputRef} // Reference the file input
            onChange={handleFileChange} // Handle file selection
          />
        </Flex>
      )}
    </Flex>
  );
}
