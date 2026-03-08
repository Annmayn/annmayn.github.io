import { Box, Dialog, Flex, Text, VisuallyHidden } from "@radix-ui/themes";
import { useState } from "react";

interface CertificateDetailProps {
  src: string;
  name: string;
}
export default function CertificateDetail({
  src,
  name,
}: CertificateDetailProps) {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <Box>
      <Dialog.Root onOpenChange={() => setShowDetail(!showDetail)}>
        <VisuallyHidden>
          <Dialog.Title>{name}</Dialog.Title>
        </VisuallyHidden>
        <Dialog.Trigger>
          <img
            onClick={() => setShowDetail(true)}
            src={src}
            alt={name}
            style={{
              objectFit: "cover",
              minHeight: "150px",
              height: "150px",
              minWidth: "250px",
              width: "250px",
            }}
          />
        </Dialog.Trigger>
        <Dialog.Content maxWidth="80vw" maxHeight="80vh">
          <Flex direction="column">
            <Text>{name}</Text>
            <img
              onClick={() => setShowDetail(true)}
              src={src}
              alt={name}
              style={{
                objectFit: "cover",
              }}
            />
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </Box>
  );
}
