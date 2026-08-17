import { Box, Dialog, Flex, Text, VisuallyHidden } from "@radix-ui/themes";

interface CertificateDetailProps {
  src: string;
  name: string;
}

export default function CertificateDetail({
  src,
  name,
}: CertificateDetailProps) {
  return (
    <Box>
      <Dialog.Root>
        <VisuallyHidden>
          <Dialog.Title>{name}</Dialog.Title>
        </VisuallyHidden>
        <Dialog.Trigger>
          <img
            src={src}
            alt={name}
            style={{ objectFit: "cover", height: 150, width: "100%" }}
          />
        </Dialog.Trigger>
        <Dialog.Content maxWidth="80vw" maxHeight="80vh">
          <Flex direction="column" gap="3">
            <Text weight="bold">{name}</Text>
            <img
              src={src}
              alt={name}
              style={{ objectFit: "contain", maxHeight: "70vh" }}
            />
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </Box>
  );
}
