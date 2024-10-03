"use client";
import { useState } from "react";
import {
  Flex,
  Button,
  TextInput,
  Select,
  Modal,
  Text,
  CloseButton,
} from "@mantine/core";
import { FaPlay } from "react-icons/fa";

interface AudioEditorProps {
  onCancel: () => void; // Accept onCancel prop
}

export const AudioEditor: React.FC<AudioEditorProps> = ({ onCancel }) => {
  const [audioSelected, setAudioSelected] = useState(true); // Assume audio is selected
  const [modalOpened, setModalOpened] = useState(false); // For cancel modal
  const [startTime, setStartTime] = useState("00:00"); // Start time for trimming
  const [endTime, setEndTime] = useState("00:00"); // End time for trimming
  const [format, setFormat] = useState<string>("mp3"); // Default format

  const handlePlayPause = () => {
    // Logic to play/pause the audio
  };

  const handleSave = () => {
    // Logic to save trimmed audio
  };

  return (
    <Flex w="100vw" h="100vh" bg={"#17171e"} c="#eee">
      {audioSelected && (
        <Flex align="center" justify="center" direction="column" w="100%">
          {/* Waveform Visualization Section */}
          <Flex
            h="60vh"
            w="80vw"
            bg="#28283d"
            justify="center"
            align="center"
            mb="lg"
            style={{ borderRadius: "8px" }}
          >
            {/* Placeholder for waveform visualization */}
            <Text c="#d8d8e2" size="xl">
              Waveform Visualization Here
            </Text>
          </Flex>

          {/* Bottom Bar */}
          <Flex justify="space-between" align="center" w="90vw" px="3rem">
            {/* Play/Pause Button */}
            <Button
              variant="light"
              radius={50}
              w="7rem"
              onClick={handlePlayPause}
              bg="#1c1c26"
              c="#eee"
            >
              <FaPlay />
            </Button>

            {/* Start and End Time Input Fields */}
            <Flex gap="md">
              <TextInput
                label="Start Time"
                value={startTime}
                type="number"
                onChange={(event) => setStartTime(event.currentTarget.value)}
                c="#eee"
                styles={{
                  input: { backgroundColor: "#17171e", color: "#eee" },
                  label: { color: "#d8d8e2" },
                }}
                size="md"
                radius={50}
              />
              <TextInput
                label="End Time"
                value={endTime}
                type="number"
                onChange={(event) => setEndTime(event.currentTarget.value)}
                c="#eee"
                size="md"
                styles={{
                  input: { backgroundColor: "#17171e", color: "#eee" },
                  label: { color: "#d8d8e2" },
                }}
                radius={50}
              />
            </Flex>

            {/* Audio Format Selector */}
            <Select
              label="Format"
              value={format}
              onChange={(value: string | null) => {
                setFormat(value || "mp3"); // Set the format to the selected value or default to "mp3"
              }}
              data={[
                { value: "mp3", label: "MP3" },
                { value: "wav", label: "WAV" },
              ]}
              size="md"
              styles={{
                input: { backgroundColor: "#28283d", color: "#eee" },
                label: { color: "#d8d8e2" },
              }}
            />

            {/* Save Button */}
            <Button
              variant="outline"
              c="#eee"
              size="md"
              onClick={handleSave}
              styles={{
                root: { border: "2px solid #665dc3" },
              }}
            >
              Save
            </Button>
          </Flex>

          {/* Cancel Button in Top Right */}
          <CloseButton
            variant="subtle"
            c="#eee"
            size="3rem"
            mt="8px"
            styles={{
              root: { position: "absolute", top: "30px", right: "30px" },
            }}
            onClick={onCancel}
          />
        </Flex>
      )}

      {/* Modal for Cancel Confirmation */}
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Are you sure you want to finish editing?"
        centered
      >
        <Text c="#d8d8e2" size="md">
          Any associated audio track settings will be deleted along with it.
        </Text>
        <Flex justify="space-between" mt="lg">
          <Button
            variant="outline"
            c="#eee"
            styles={{ root: { border: "2px solid #665dc3" } }}
            onClick={() => setModalOpened(false)}
          >
            Cancel
          </Button>
          <Button
            variant="filled"
            c="#eee"
            bg="#ff4d4f"
            onClick={() => {
              setModalOpened(false);
              setAudioSelected(false); // Return to initial state
            }}
          >
            Yes, Finish Editing
          </Button>
        </Flex>
      </Modal>
    </Flex>
  );
};
