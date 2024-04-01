import { Flex, Text, Button } from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
    </Flex>
  );
}
