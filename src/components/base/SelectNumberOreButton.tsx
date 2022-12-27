import { Button, Image } from "@chakra-ui/react";
import AddImg from "/public/assets/images/buttons/add.svg";
import SubImg from "/public/assets/images/buttons/sub.svg";

export interface ISelectNumberOreButtonProps {
  type: "add" | "sub";
}

export default function SelectNumberOreButton(props: ISelectNumberOreButtonProps) {
  const { type } = props;

  if (type === "add") {
    return (
      <Button variant={"unstyled"} minW={"0"} height={"auto"}>
        <Image src={AddImg.src} cursor={"pointer"} />
      </Button>
    );
  } else {
    return (
      <Button variant={"unstyled"} minW={"0"} height={"auto"}>
        <Image src={SubImg.src} cursor={"pointer"} />
      </Button>
    );
  }
}
