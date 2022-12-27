import { Button, Image } from "@chakra-ui/react";
import Twitter from "/public/assets/images/buttons/twitter.svg";

export interface ITwiterButtonProps {}

export default function TwiterButton(props: ITwiterButtonProps) {
  return (
    <a target="_blank" href="https://twitter.com/digiminers_" rel="noopener noreferrer">
      <Button variant={"unstyled"} minW={"0"} height={"auto"}>
        <Image src={Twitter.src} cursor={"pointer"} />
      </Button>
    </a>
  );
}
