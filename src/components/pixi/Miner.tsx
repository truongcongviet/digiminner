import { Input } from "@chakra-ui/react";
import { Stage, Sprite } from "@inlet/react-pixi";
import { forwardRef, LegacyRef } from "react";
import miner1 from "../../../public/assets/miner/miner-1.png";

interface InputFieldProps {}

const Miner = () => {
  return <Sprite image={"./assets/miner/miner-1.png"} x={150} y={150} />;
};

export default Miner;
