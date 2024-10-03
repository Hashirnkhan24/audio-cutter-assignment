import { Button } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <Button component={Link} href="/">
          Browse My Files
        </Button>
      </main>
    </div>
  );
}
