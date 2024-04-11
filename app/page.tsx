import { Flex, Text, Button } from "@radix-ui/themes";
import Image from "next/image";
import Pagination from "./components/Pagination";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
      <Pagination
        itemCount={100}
        currentPage={parseInt(searchParams.page)}
        pageSize={10}
      />
    </Flex>
  );
}
