import { Box, Flex, Image } from "@chakra-ui/react";
import { memo, useEffect } from "react";
import Bronze from "/public/assets/images/ores/Bronze.png";
import Iron from "/public/assets/images/ores/Iron.png";
import OreMining from "/public/assets/images/ores/ore-mining.png";
import Diamond from "/public/assets/images/ores/Diamond.png";
import Ore1 from "/public/assets/images/ores/ore1.png";
import Vortexia from "/public/assets/images/ores/Vortexia.png";
import Emerald from "/public/assets/images/ores/Emerald.png";
import Ore2 from "/public/assets/images/ores/ore2.png";
import Gold from "/public/assets/images/ores/Gold.png";
import Ore3 from "/public/assets/images/ores/ore3.png";
import Pickaxe from "/public/assets/images/pickaxe.png";
import OreBroken1 from "/public/assets/images/ore-broken-1.png";
import OreBroken2 from "/public/assets/images/ore-broken-2.png";
import OreBroken3 from "/public/assets/images/ore-broken-3.png";
import gsap from "gsap";

export interface IOreProps {
  status?: "unmined" | "mining";
  type?: "1" | "2" | "3";
  resultType?: "Vortexia" | "Iron" | "Diamond" | "Gold" | "Bronze" | "Emerald";
}

function Ore({ resultType, status, type }: IOreProps) {
  const getResult = () => {
    let src;
    switch (resultType) {
      case "Bronze":
        src = Bronze.src;
        break;
      case "Diamond":
        src = Diamond.src;
        break;
      case "Emerald":
        src = Emerald.src;
        break;
      case "Gold":
        src = Gold.src;
        break;
      case "Iron":
        src = Iron.src;
        break;
      case "Vortexia":
        src = Vortexia.src;
        break;
      default:
        break;
    }
    if (!src) return <></>;
    return (
      <Box height={"76px"}>
        <Image src={src} />
      </Box>
    );
  };

  const getOre = () => {
    let src;
    if (status === "mining") {
      src = OreMining.src;
    } else {
      switch (type) {
        case "1":
          src = Ore1.src;
          break;

        case "2":
          src = Ore2.src;
          break;

        case "3":
          src = Ore3.src;
          break;

        default:
          src = Ore1.src;
          break;
      }
    }

    if (!src) return <></>;
    return (
      <Box height={"76px"}>
        <Image src={src} />
      </Box>
    );
  };

  const brokenEffect = (id: string) => {
    const tl2 = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.6,
      repeatRefresh: true,
    });

    tl2.to(
      `#${id}`,
      { opacity: 1, x: "random(-100, 100, 5)", y: "random(-100, 100, 5)", duration: 0.2 },
      0.2
    );

    tl2.to(`#${id}`, { duration: 0.2 });

    tl2.to(`#${id}`, { opacity: 0, duration: 0, x: 0, y: 0 });
  };

  const ore = !!resultType ? getResult() : getOre();

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
    });

    tl.to("#pickaxe", { rotation: -20, transformOrigin: "right bottom", duration: 0.2 });

    tl.to("#pickaxe", { rotation: 0, transformOrigin: "right bottom", duration: 1 });

    brokenEffect("dot1");
    brokenEffect("dot2");
    brokenEffect("dot3");
  }, []);

  return (
    <Flex position={"relative"} direction={"column"} align={"center"}>
      {!!resultType && (
        <Box mb={6} textStyle={"text-title-6"} color={"white"}>
          $0.11
        </Box>
      )}
      {ore}
      {status === "mining" && !resultType && (
        <>
          <Image
            src={OreBroken1.src}
            zIndex={"1"}
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            id={"dot1"}
            transform={"translate(-50%)"}
            maxW={"unset"}
          />
          <Image
            src={OreBroken2.src}
            zIndex={"1"}
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            id={"dot2"}
            transform={"translate(-50%)"}
            maxW={"unset"}
          />
          <Image
            src={OreBroken3.src}
            zIndex={"1"}
            position={"absolute"}
            top={"50%"}
            left={"50%"}
            id={"dot3"}
            transform={"translate(-50%)"}
            maxW={"unset"}
          />
          <Image
            id="pickaxe"
            src={Pickaxe.src}
            zIndex={"1"}
            position={"absolute"}
            top={"-95px"}
            left={"36px"}
            maxW={"unset"}
          />
        </>
      )}

      {!!resultType && (
        <Box w={"fit-content"} mt={"15px"} className={"text-body-1"} color={"white"}>
          {resultType}
        </Box>
      )}
    </Flex>
  );
}

export default memo(Ore);
