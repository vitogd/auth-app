import { ReactElement } from "react";
import { IconButton } from "@chakra-ui/react";

interface IconButtonProps {
  icon: ReactElement;
  marginLeft?: number;
}

export function SocialIconButton(props: IconButtonProps) {
  return (
    <IconButton
      colorScheme="gray"
      variant="ghost"
      borderWidth={2}
      borderRadius={50}
      borderColor="gray.500"
      color="gray.500"
      size="lg"
      aria-label="Facebook"
      marginLeft={props.marginLeft}
      icon={props.icon}
    />
  );
}
