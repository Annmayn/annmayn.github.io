import { Avatar, Flex, Text } from "@radix-ui/themes";

interface CompanyHistoryProps {
  name: string;
  from: string;
  to: string;
  textFirst?: boolean;
  logo?: string;
}

export default function CompanyHistory({
  name,
  from,
  to,
  textFirst = true,
  logo,
}: CompanyHistoryProps) {
  return (
    <Flex
      gap="8"
      direction={{
        initial: "column",
        sm: textFirst ? "row" : "row-reverse",
      }}
    >
      <Flex direction={"column"}>
        <Flex align={"center"} gapX={"3"}>
          <Avatar fallback={name[0]} src={logo} />
          <Text size={"4"} weight={"bold"}>
            {name}
          </Text>
        </Flex>
        <Text weight={"light"} size={"3"}>
          {from} - {to}
        </Text>
      </Flex>
      <Text>Working at {name} Image</Text>
    </Flex>
  );
}
