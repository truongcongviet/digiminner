import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import ArrowTopIcon from "/public/assets/images/buttons/arrow-top.svg";
import ArrowBottomIcon from "/public/assets/images/buttons/arrow-bot.svg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export interface IHomeFAQProps {}
export interface IHomeFAQDataProps {
  data: {
    title: string;
    content: string;
  }[];
}
const dataDefault = [
  {
    title: "What is Digi Miners?",
    content:
      "An interactive mini lottery game entwined with a collection of 10,000 pixel-style miner NFTs. The NFT miners grant access to weekly lottery tickets. Each week there are lots of valuable prizes up for grabs in the form of ore, which can instantly be converted to fiat currency.",
  },
  {
    title: "What blockchain is Digi Miners backed by?",
    content:
      "Digi Miners is backed by Ethereum, the world’s first blockchain to truly popularise the concept of non-fungible tokens and as of today holds a commanding lead in terms of liquidity.</br></br>This makes Digi Miners’ NFTs ERC-721 tokens.",
  },
  {
    title: "What is the total supply of miner NFTs?",
    content: "There will only be a maximum of 10,000 miners in circulation.",
  },
  {
    title: "How do I get a miner?",
    content:
      "There are 2 ways for users to mint miner NFTs:</br></br>1. Official Website</br></br>Miners will be available via a free mint at digi-miners.io on a first come first served basis, until all 10,000 have been minted. Once all 10,000 free NFTs have been minted, they will no longer be available via the official website.</br></br>2. Secondary Marketplace</br></br>As each free NFT is minted, they will appear one-by-one in holders’ ERC-721 compatible wallets and can be traded on supported secondary marketplaces like Opensea and Rarible indefinitely.",
  },
  {
    title: "Is it a free mint?",
    content:
      "Yes, Digi Miners will be a free mint via digi-miners.io until all 10,000 NFTs have been minted. Users will only have to pay gas. After this, the NFTs will be available on supported secondary marketplaces at a price TBD by holders.",
  },
  {
    title: "How many miners can be minted per wallet?",
    content: `Whitelisted users will be able to mint 2 per wallet in the pre-sale. After this, miners are limited to 1 per wallet in the public sale. Be sure to join the <a href='#' style="color:red">whitelist here.</a>`,
  },
  {
    title: "What is a “ticket”?",
    content:
      "A ticket is your chance to “mine” (win) valuable ore which can be converted to fiat currency.</br></br>Every week NFT holders can go to digi-miners.io and enter into the lottery by staking their NFT and paying a small fee. In return, they receive their ticket which represents their participation in the competition. No further action is then required; prizes are automatically transferred to winning wallets.",
  },
  {
    title: "How much does a ticket cost?",
    content: "NFT holders will need to pay 0.01 ETH per ticket.",
  },
  {
    title: "How many tickets can I buy?",
    content:
      "The weekly ticket limited is 10 per miner NFT. For example, if you hold 10 miner NFTs, you can purchase 100 tickets. If you want to purchase more tickets than your weekly allowance, you will need to buy more NFTs miners first.",
  },
  {
    title: "What is the weekly lottery prize?",
    content:
      "When the weekly timer runs out, everyone who entered is presented with a lump of rock. They can then pick away at the rock to reveal if they won something of value. There are different levels of ore that you can win. For example, the top prize is golden ore.</br></br>The mines award these different levels of ores programmatically, and transparently display winners in the Mining Halls of Fame. Ore value is calculated in ETH.</br></br>Immediately after earning something of value, the user has the option to sell their ore. This will trigger the payout in ETH to be made instantly.",
  },
  {
    title: "What are the miner’s traits?",
    content:
      "A miner’s traits are both decorative and practical. The traits have different rarity levels (called “mining levels”) that affect your miner’s ability to mine (“win”) better ores in the weekly competitions. The more rare your miner’s traits, the better ore the higher chance you have of mining higher value ore thus earning more money.</br></br>Miner NFTs are split into male and female. Below is a breakdown of all the possible NFT traits:</br></br>Male:</br>&nbsp;&nbsp;&nbsp;&nbsp;Helmet</br>&nbsp;&nbsp;&nbsp;&nbsp;Pickaxe</br>&nbsp;&nbsp;&nbsp;&nbsp;Boots</br>&nbsp;&nbsp;&nbsp;&nbsp;Beard</br>&nbsp;&nbsp;&nbsp;&nbsp;Gloves</br>&nbsp;&nbsp;&nbsp;&nbsp;T-shirt</br>&nbsp;&nbsp;&nbsp;&nbsp;Background</br></br>Female:</br>&nbsp;&nbsp;&nbsp;&nbsp;Belt</br>&nbsp;&nbsp;&nbsp;&nbsp;Hammer</br>&nbsp;&nbsp;&nbsp;&nbsp;Steppers</br>&nbsp;&nbsp;&nbsp;&nbsp;Hair</br>&nbsp;&nbsp;&nbsp;&nbsp;Gloves</br>&nbsp;&nbsp;&nbsp;&nbsp;T-shirt</br>&nbsp;&nbsp;&nbsp;&nbsp;Background</br>",
  },
  {
    title: "What is the mining level?",
    content: `Mining level is a sum of your miner’s traits that determine your miner’s ability to mine (“win) better ore in the weekly competitions.</br></br>Miners start with a score of 0 and then for each of it’s traits, the following scores are added on depending on their rarity level:</br></br>Iron trait = +0 points</br>Bronze trait = +5 points</br>Emerald trait = +10 points</br>Gold trait = +25 points</br>Diamond trait = +45 points</br>Vortexia trait = +75 points</br></br>Below is a breakdown of the possible “points” per trait:</br></br>Male:</br>Helmet – iron/ bronze/ emerald/ gold/ diamond/ vortexia</br>&nbsp;&nbsp;&nbsp;&nbsp;Pickaxe – iron/ bronze/ emerald/ gold/ diamond/ vortexia</br>&nbsp;&nbsp;&nbsp;&nbsp;Boots – iron/ bronze/ emerald/ gold/ diamond/ vortexia</br>&nbsp;&nbsp;&nbsp;&nbsp;Beard – iron trait (+0 points)</br>&nbsp;&nbsp;&nbsp;&nbsp;Gloves – iron trait (+0 points)</br>&nbsp;&nbsp;&nbsp;&nbsp;T-shirt – iron trait (+0 points)</br>&nbsp;&nbsp;&nbsp;&nbsp;Background – iron trait (+0 points)</br></br>Female:</br>&nbsp;&nbsp;&nbsp;&nbsp;Belt – iron/ bronze/ emerald/ gold/ diamond/ vortexia</br>&nbsp;&nbsp;&nbsp;&nbsp;
      Hammer – iron/ bronze/ emerald/ gold/ diamond/ vortexia</br>&nbsp;&nbsp;&nbsp;&nbsp;Steppers – iron/ bronze/ emerald/ gold/ diamond/ vortexia</br>&nbsp;&nbsp;&nbsp;&nbsp;Hair – iron trait (+0 points)</br>&nbsp;&nbsp;&nbsp;&nbsp;Gloves – iron trait (+0 points)</br>&nbsp;&nbsp;&nbsp;&nbsp;T-shirt – iron trait (+0 points)</br>&nbsp;&nbsp;&nbsp;&nbsp;Background – iron trait (+0 points)</br></br>The total number of points earned from traits #1, #2 and #3 for both male and female miners.</br></br>The number of points determine which mining level tier the NFT falls into:</br></br>0 - 25 points = Mining Level 0</br></br>26 - 49 points = Mining level I</br></br>50 - 74 points = Mining Level II</br></br>75 - 100 points = Mining Level Max</br></br>The rarest and most valuable miner NFT would be:</br></br>Helmet/ Belt (vortexia level +75 points) + Pickaxe/ Hammer (vortexia level +75 points) + Boots/ Steppers (vortexia level +75 points) = 225 points (Mining Level Max)
      `,
  },
];

const SlideFAQ3 = ({ data }: IHomeFAQDataProps) => {
  const boxFAQRef = useRef<any>(null);
  const show = 2;

  useEffect(() => {
    ScrollTrigger.getAll().forEach((t) => {
      t.scroll(0);
      t.kill(true);
    });
    const listFAQ = gsap.utils.toArray(".faqList > div");
    listFAQ.forEach((elem: any, index) => {
      // gsap.set(elem, {
      //   clearProps: "transform",
      // });
      ScrollTrigger.create({
        // animation: scene1,
        trigger: elem,
        start: "center 95%",
        end: "bottom bottom",
        // scrub: 0.2,
        // pin: true,
        // markers: true,
        onEnter: () => {
          const tl = gsap.timeline();
          index - 1 >= 0 &&
            tl.to(
              ".faqList_item_" + (index - 1),
              { scaleX: 1, opacity: 1, ease: "power3.inOut" },
              0
            );
          let j = 1;
          for (let i = index; i < listFAQ.length; i++) {
            if (index === listFAQ.length - 1) {
              tl.to(".faqList_item_" + index, { scaleX: 1, opacity: 1, ease: "power3.inOut" }, 0);
            } else if (index >= 2) {
              tl.to(
                ".faqList_item_" + i,
                {
                  scaleX: 1 - parseFloat("0." + j),
                  opacity: 0.8,
                  ease: "power3.inOut",
                },
                0
              );
              j++;
            }
          }
        },
        onLeaveBack: () => {
          const tl = gsap.timeline();
          let j = 1;
          for (let i = index - 1; i < listFAQ.length; i++) {
            if (index > 2) {
              tl.to(
                ".faqList_item_" + i,
                {
                  scaleX: 1 - parseFloat("0." + j),
                  opacity: 0.8,
                  ease: "power3.inOut",
                },
                0
              );
              j++;
            }
          }
        },
      });
    });
  }, []);

  return (
    <Box
      m={{
        base: "17px auto",
        md: "64px auto",
      }}
      w={{
        // base: "335px",
        md: "630px",
      }}
      mx={{
        base: "20px",
      }}
      className="gallery"
    >
      <Accordion ref={boxFAQRef} className={"faqList"} defaultIndex={[0]}>
        {data.map((items: any, index) => (
          <AccordionItem
            key={index}
            className={"faqList_item_" + index}
            bg="rgba(210, 250, 117, 0.1)"
            mb={"16px"}
            p="24px"
            opacity={1}
            style={{
              transform:
                index >= show
                  ? `scaleX(` +
                    (1.1 - parseFloat("0." + index) < 0.3 ? 0.3 : 1.1 - parseFloat("0." + index)) +
                    `)`
                  : `scaleX(1)`,
            }}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton p={0}>
                    <Box
                      flex="1"
                      textAlign="left"
                      color="white"
                      textStyle={{ base: "text-body-1-1", md: "text-title-3" }}
                    >
                      {items.title}
                    </Box>
                    {isExpanded ? (
                      <Image src={ArrowTopIcon.src} cursor={"pointer"} />
                    ) : (
                      <Image src={ArrowBottomIcon.src} cursor={"pointer"} />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  p={"16px 0px 0px 0px"}
                  color="white"
                  textAlign={"initial"}
                  opacity="0.6"
                  textStyle={{ base: "text-body-3", md: "text-body-2" }}
                  dangerouslySetInnerHTML={{ __html: items.content }}
                ></AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default function HomeFAQ(props: IHomeFAQProps) {
  return (
    <Box bg="violet.dark" pb="50px" textAlign="center">
      <Text
        pt={{
          base: "254px",
          md: "568px",
        }}
        textStyle={"text-title-4"}
        color="white"
      >
        FAQ
      </Text>
      <SlideFAQ3 data={dataDefault} />
    </Box>
  );
}
