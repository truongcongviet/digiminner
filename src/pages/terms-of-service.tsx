import {
  Box,
  BoxProps,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import * as React from "react";
import { NextPageWithLayout } from "../commons/types";
import PublicSiteLayout from "../layouts/siteLayout/PublicSiteLayout";

export interface ITermsOfServicePageProps {}

const TermsOfServicePage: NextPageWithLayout = (props: ITermsOfServicePageProps) => {
  const h3Style: BoxProps = {
    fontWeight: "bold",
    mt: 4,
    mb: 3,
    as: "h3",
    fontSize: "xl",
  };

  const h4Style: BoxProps = {
    fontWeight: "bold",
    mt: 3,
    mb: 2,
    as: "h4",
  };

  return (
    <Flex
      w={"full"}
      backgroundColor={"gray"}
      minH={"full"}
      pt={{ base: "130px", md: "196px" }}
      flex={1}
      direction={"column"}
      align={"center"}
      px={3}
    >
      <Box w={"846px"} maxW={"100%"}>
        <Box
          as={"h2"}
          textStyle={{ base: "text-title-8", md: "text-title-2" }}
          textShadow={"none !important"}
          textAlign={"center"}
          mb={{ base: "24px", md: "48px" }}
        >
          Terms of Service
        </Box>
        <Flex
          direction={"column"}
          gap={{ base: "20px", md: "50px" }}
          textStyle={"text-body-2"}
          color={"black"}
          mb={{ base: "50px", md: "152px" }}
        >
          Digi Miners is an entertainment platform where users (“you,” or “User”) can participate
          and receive a chance to win prizes. Once registration is completed, Digi Miners User
          receives an opportunity to mint an NFT which serves as entrance ticket to participate in
          the next level of the game. Then User purchases a lottery ticket which gives User a chance
          to win one of prizes at random. <br />
          chance to win one of prizes at random. These Terms of Use (“Terms”) govern your use of the
          Digi Miners website located at _________.com (including any successor URLs) (“Digi Miners
          Website,” “Website”), operated by UFM Trading limited and its affiliates (“UFM,” “we,”
          “us”). <br />
          These Terms form a legally binding agreement between you and UFM – please read them
          carefully. For the purposes of these Terms, any capitalized terms shall have the meaning
          assigned.
          <br />
          We make the Website available to you on the basis that you accept all of these Terms. By
          using the Website, or any site name product you are confirming that you have read,
          understand, and do hereby agree to be bound by all of these Terms of Use. If you do not
          agree and/or accept these Terms of Use, then you are hereby expressly prohibited from
          using the Website. <br />
          We reserve the right, in our sole discretion, to make changes to, add to, or amend these
          Terms of Use at any time and for any reason. By continuing to use the Website you will be
          deemed to have accepted the changes, additions, or amendments to these Terms of Use.
          <br />
          The content on the Website is not intended for use by any person or entity or jurisdiction
          in any country where such would be contrary to law or regulation, or which would subject
          us to any registration requirement within such jurisdiction or country. Accordingly, any
          persons who access the Website while breaking their local laws are doing it on their own
          initiative and will have to deal with any such consequences where licable.
          <br />
          The Website is intended for Users who are 18 years of age or older. By accessing or using
          the Website, you represent and warrant that you are of legal age to form a binding
          contract with UFM and meet the foregoing eligibility requirements. If you do not meet all
          of these requirements, you must not access or use the Website.
          <Box>
            <Box {...h3Style}>1. THE WEBSITE</Box>
            The Website and the Game is owned and operated by UFM Trading limited, a commercial
            company, registered in the Isle of Man under number _________, with a registered address
            of Peveril Buildings, Peveril Square, Douglas, Isle of Man, IM99 1RZ.
            <br />
            The Game includes all products, offerings, the game itself, and features offered by UFM
            through the Website (“Game”). Through the Website, you can mint NFTs and participate in
            a lottery to win money prizes. You can also sell NFTs which were not used in a lottery
            to other Users on the secondary marketplaces.
            <br />
            The Website may contain links or content from services not operated by UFM that provide
            additional content or features including but not limited payment services, digital asset
            wallets, NFT marketplaces, user data etc (“Third-Party Services”). Whether or not
            integrated into the Website, these Third-Party Services are provided under the terms of
            use and privacy policy of the relevant third-party provider, under that provider’s sole
            responsibility. UFM is not responsible or liable for the availability or accuracy of the
            Third-Party Services, or the services, products, or content available from the
            Third-Party Services. Links to or use of any Third-Party Services are not an endorsement
            by UFM of such Third-Party Services. Please consult the relevant Third-Party Service’s
            terms and conditions and/or privacy policy for more information.
          </Box>
          <Box>
            <Box {...h3Style}>2. INTELLECTUAL PROPERTY RIGHTS</Box>
            Unless otherwise indicated, the Website is our proprietary property, and all source
            code, databases, functionality, software, website designs, audio, video, text,
            photographs, and graphics on the Website (collectively, the “Content”) and the
            trademarks, service marks, and logos contained therein (the “Marks”) are owned or
            controlled by us or licensed to us, and are protected by copyright and trademark laws
            and various other intellectual property rights and unfair competition international laws
            and international conventions.
            <br />
            The Content and the Marks are provided on the Website “AS IS” for your information and
            personal use only. Except as expressly provided in these Terms of Use, no part of the
            Website and/or no Content or Marks may be copied, reproduced, aggregated, republished,
            uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed,
            sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without
            our express prior written permission.
            <br />
            Provided that you are eligible to use the Website, you are granted a limited license to
            access and use the Website and to download or print a copy of any portion of the Content
            to which you have properly gained access solely for your personal, non-commercial use.
            We reserve all rights not expressly granted to you in and to the Website, the Content,
            and the Marks.
          </Box>
          <Box>
            <Box {...h3Style}>3. ACCOUNT</Box>
            <Box {...h4Style}>Account Creation.</Box>
            To create a User account, you must connect your digital currency wallet following the
            instructions (steps) that will be displayed on the Website.
            <br />
            When creating a User account, you must agree to these Terms, and by doing so you
            represent and warrant that you (i) are eighteen (18) years old or older; (ii) agree to
            these Terms of Use; (iii) will use the Website and Game in compliance with these Terms
            and any licable law, rule or regulation; and (iv) you are not located in a country that
            the U.S. government, European Union and/or United Nations has placed embargo restriction
            on and you are not on the U.S. government, European Union or United Nations list of
            restricted parties or persons. <br />
            For the avoidance of doubt, you shall not use or access the Website at any time from a
            country that the U.S. government, European Union and/or United Nations has placed
            embargo restriction on or if you are added to the U.S. government, European Union or
            United Nations list of restricted parties or persons.
            <Box {...h4Style}>Account Use.</Box>
            The Website and User account are free for individual, non-commercial, personal use. You
            shall not sign up on behalf of or act in coordination with another individual, group of
            individuals and/or a company.
            <Box {...h4Style}>Account Security.</Box>
            Please choose a strong password, use a password manager, store your information
            securely, do not share your account information with third parties and observe other
            security best practices. We are not liable for the loss or theft of your password or
            other account information. It is your responsibility to take all measures to secure
            access to your login and account information, including your password. We strongly
            encourage you to set up two-factor authentication. You are responsible for the actions
            of any person using your User account, including without your prior consent.
            <br />
            You agree to report the theft of your information, login information, or password,
            unauthorized access to your account and/or any other fraudulent or unauthorized
            third-party use of your account, to us as quickly as possible, by contacting us at the
            “Contact us” button on the Website.
            <Box {...h4Style}>Prohibited Account Uses.</Box>
            <UnorderedList
              px={2}
              style={{
                listStyleType: "lower-alpha",
              }}
            >
              <ListItem>
                Multiple Accounts. You may not create more than one User account and/or manage the
                User account(s) of other Users (even if given explicit permission by such Users).
                Only a natural person can create an account, and partnerships, joint ventures,
                and/or corporate accounts are prohibited.
              </ListItem>
              <ListItem>
                Associating Accounts. You may not collude with or otherwise act in association or
                conjunction with other User accounts, whether formally or informally, in order to
                attempt to circumvent or circumvent these Terms; attempt to create or create an
                unfair competitive advantage and/or other unfair or artificial advantage in the
                Game.
              </ListItem>
              <ListItem>
                Account Re-creation. You may not create a User Account if your User account has been
                temporarily suspended or if we have permanently deleted a User Account associated
                with you in the past.
              </ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Box {...h3Style}>4. WALLET</Box>
            To participate in the Game each User has to connect his own external wallet (MetaMask or
            other Ethereum-compatible wallet) which will be used by User to pay for tickets in order
            to participate in a lottery and where User’s wins will be sent.
            <br />
            In the Game each User account has a corresponding unique and personal storage where
            User’s wins are stored (“Treasury”). To receive the money won in the Game User needs to
            confirm the transaction in User’s personal external wallet by signing it digitally.
          </Box>
          <Box>
            <Box {...h3Style}>5. USER REPRESENTATIONS</Box>
            By using the Website you represent and warrant that:
            <OrderedList px={2}>
              <ListItem>
                all registration information you submit will be true, accurate, current, and
                complete;
              </ListItem>
              <ListItem>
                you will maintain the accuracy of such information and promptly update such
                registration information as necessary;
              </ListItem>
              <ListItem>
                you have the legal capacity and you agree to comply with these Terms of Use;
              </ListItem>
              <ListItem>you are not under the age of 18;</ListItem>
              <ListItem>
                not a minor in the jurisdiction in which you reside, or if a minor, you have
                received parental permission to use the Website;
              </ListItem>
              <ListItem>
                you will not access the Website through automated or non-human means, whether
                through a bot, script, or otherwise;
              </ListItem>
              <ListItem>
                you will not use the Website for any illegal or unauthorized purpose;
              </ListItem>
              <ListItem>
                your use of the Website will not violate any licable law or regulation.
              </ListItem>
            </OrderedList>
            If you provide any information that is untrue, inaccurate, not current, or incomplete,
            we have the right to suspend or terminate your account and refuse any and all current or
            future use of the Website (or any portion thereof).
          </Box>
          <Box>
            <Box {...h3Style}>6. PROHIBITED ACTIVITIES</Box>
            You may not access or use the Website for any purpose other than that for which we make
            the Website available. The Website may not be used in connection with any commercial
            endeavors except those that are specifically endorsed or roved by us.
            <br />
            As a User of the Website, you agree not to:
            <UnorderedList
              px={2}
              style={{
                listStyleType: "lower-alpha",
              }}
            >
              <ListItem>
                Systematically retrieve data or other content from the Website to create or compile,
                directly or indirectly, a collection, compilation, database, or directory without
                written permission from us.
              </ListItem>
              <ListItem>
                Make any unauthorized use of the Website, including collecting usernames and/or
                email addresses of users by electronic or other means for the purpose of sending
                unsolicited email, or creating user accounts by automated means or under false
                pretenses.
              </ListItem>
              <ListItem>
                Use a buying agent or purchasing agent to make purchases on the Website.
              </ListItem>
              <ListItem>Use the Website to advertise or offer to sell goods and services.</ListItem>
              <ListItem>
                Circumvent, disable, or otherwise interfere with security-related features of the
                Website, including features that prevent or restrict the use or copying of any
                Content or enforce limitations on the use of the Website and/or the Content
                contained therein.
              </ListItem>
              <ListItem>Engage in unauthorized framing of or linking to the Website.</ListItem>
              <ListItem>
                Trick, defraud, or mislead us and other users, especially in any attempt to learn
                sensitive account information such as user passwords.
              </ListItem>
              <ListItem>
                Make improper use of our support services or submit false reports of abuse or
                misconduct.
              </ListItem>
              <ListItem>
                Engage in any automated use of the system, such as using scripts to send comments or
                messages, or using any data mining, robots, or similar data gathering and extraction
                tools.
              </ListItem>
              <ListItem>
                Interfere with, disrupt, or create an undue burden on the Website or the networks or
                services connected to the Website .
              </ListItem>
              <ListItem>
                Attempt to impersonate another user or person or use the username of another user.
              </ListItem>
              <ListItem>Sell or otherwise transfer your profile.</ListItem>
              <ListItem>
                Use any information obtained from the Website in order to harass, abuse, or harm
                another person.
              </ListItem>
              <ListItem>
                Use the Website as part of any effort to compete with us or otherwise use the
                Website and/or the Content for any revenue-generating endeavor or commercial
                enterprise.
              </ListItem>
              <ListItem>
                Decipher, decompile, disassemble, or reverse engineer any of the software comprising
                or in any way making up a part of the Website .
              </ListItem>
              <ListItem>
                Attempt to bypass any measures of the Website designed to prevent or restrict access
                to the Website , or any portion of the Website .
              </ListItem>
              <ListItem>
                Harass, annoy, intimidate, or threaten any of our employees or agents engaged in
                providing any portion of the Website to you.
              </ListItem>
              <ListItem>
                Delete the copyright or other proprietary rights notice from any Content.
              </ListItem>
              <ListItem>
                Copy or adapt the Website ’s software, including but not limited to Flash, PHP,
                HTML, JavaScript, or other code.
              </ListItem>
              <ListItem>
                Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or
                other material, including excessive use of capital letters and spamming (continuous
                posting of repetitive text), that interferes with any party’s uninterrupted use and
                enjoyment of the Website or modifies, impairs, disrupts, alters, or interferes with
                the use, features, functions, operation, or maintenance of the Website.
              </ListItem>
              <ListItem>
                Upload or transmit (or attempt to upload or to transmit) any material that acts as a
                passive or active information collection or transmission mechanism, including
                without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web
                bugs, cookies, or other similar devices (sometimes referred to as “spyware” or
                “passive collection mechanisms” or “pcms”).
              </ListItem>
              <ListItem>
                Except as may be the result of standard search engine or Internet browser usage,
                use, launch, develop, or distribute any automated system, including without
                limitation, any spider, robot, cheat utility, scraper, or offline reader that
                accesses the Website , or using or launching any unauthorized script or other
                software.
              </ListItem>
              <ListItem>
                Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Website .
              </ListItem>
              <ListItem>
                Use the Website in a manner inconsistent with any licable laws or regulations.
              </ListItem>
              <ListItem>[other]</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Box {...h3Style}>7. PAYMENT</Box>
            When you make a payment in connection with the Game, your payment will be processed by
            one of the Third-Party Service payment providers “Payment Provider.”
            <br />
            Once your external wallet is connected, the payment will be processed automatically by
            the relevant Payment Provider once you decide to purchase a ticket to participate in a
            lottery.
            <br />
            You acknowledge and agree that due to the nature of Blockchain technology, once a
            transaction has been processed, the transaction data will be documented on the
            Blockchain.
          </Box>
          <Box>
            <Box {...h3Style}>8. SUBMISSIONS</Box>
            You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or
            other information regarding the Website ("Submissions") provided by you to us are
            non-confidential and shall become our sole property. We shall own exclusive rights,
            including all intellectual property rights, and shall be entitled to the unrestricted
            use and dissemination of these Submissions for any lawful purpose, commercial or
            otherwise, without acknowledgment or compensation to you.
            <br />
            You hereby waive all moral rights to any such Submissions, and you hereby warrant that
            any such Submissions are original with you or that you have the right to submit such
            Submissions. You agree there shall be no recourse against us for any alleged or actual
            infringement or mis ropriation of any proprietary right in your Submissions.
          </Box>
          <Box>
            <Box {...h3Style}>9. THIRD-PARTY WEBSITES AND CONTENT</Box>
            The Website or as may contain (or you may be sent via the Website ) links to other
            websites ("Third-Party Websites") as well as articles, photographs, text, graphics,
            pictures, designs, music, sound, video, information, applications, software, and other
            content or items belonging to or originating from third parties ("Third-Party Content").{" "}
            <br />
            Such Third-Party Websites and Third-Party Content are not investigated, monitored, or
            checked for accuracy, ropriateness, or completeness by us, and we are not responsible
            for any Third-Party Websites accessed through the Website or any Third-Party Content
            posted on, available through, or installed from the Website, including the content,
            accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of
            or contained in the Third-Party Websites or the Third-Party Content.
            <br />
            Inclusion of, linking to, or permitting the use or installation of any Third-Party
            Websites or any Third-Party Content does not imply roval or endorsement thereof by us.
            If you decide to leave the Website and access the Third-Party Websites or to use or
            install any Third-Party Content, you do so at your own risk, and you should be aware
            these Terms of Use no longer govern.
            <br />
            You should review the licable terms and policies, including privacy and data gathering
            practices, of any website to which you navigate from the Website or relating to any
            applications you use or install from the Website. Any purchases you make through
            Third-Party Websites will be through other websites and from other companies, and we
            take no responsibility whatsoever in relation to such purchases which are exclusively
            between you and the licable third party.
            <br />
            You agree and acknowledge that we do not endorse the products or services offered on
            Third-Party Websites and you shall hold us harmless from any harm caused by your
            purchase of such products or services. Additionally, you shall hold us harmless from any
            losses sustained by you or harm caused to you relating to or resulting in any way from
            any Third-Party Content or any contact with Third-Party Websites.
          </Box>
          <Box>
            <Box {...h3Style}>10. VIOLATIONS </Box>
            You shall not use the Website, including the Game and/or your User account in any way
            that violates these Terms. We reserve the right to limit a User account from accessing
            the Website, temporarily suspend a User account and/or permanently suspend a User
            account where such User is suspected of violating or has actually violated these Terms.
            <br />
            We reserve the right to enquire into account activity considered suspicious and limit
            your access to the Game and/or temporarily suspend your User account during such
            investigation, including where such activity has been flagged by other Users. Where we
            have contacted you concerning suspicious activity you will provide any requested
            information.
            <br />
            In case of permanent suspension, you will then have a period of thirty (30) days to
            transfer any wins or NFTs from your Treasury to an external wallet. You agree and
            acknowledge that if you do not make such transfer within the thirty (30) day period, any
            and all wins will be permanently irretrievable. We shall not be responsible for any
            related loss.
            <br />
            We reserve the right to withhold any prize(s) you have won in the event you are
            suspected of violating or have violated these Terms.
            <br />
            If we take any action pursuant to this Section, you may have a right of appeal. You may
            contact us at by contacting us at the “Contact us” button on the Website and providing
            us with your name, username, email address, the full details of the issue, and why you
            disagree with the outcome. We will make sure that your complaint is investigated and
            answered as soon as possible.
            <br />
            You have a right to report any fraudulent or illegal activities of other Users. We in
            our sole discretion reserve the right to enquire into account activity considered
            suspicious and limit their access to the Game and/or temporarily suspend their User
            account during such investigation. Any reporting will be kept strictly confidential and
            not disclosed to a third party, unless (i) to the extent required by licable law or
            regulation, or (ii) pursuant to a subpoena or order of a court or regulatory,
            self-regulatory or legislative body of competent jurisdiction, or (iii) in connection
            with any regulatory report, audit, or inquiry, or (iv) where requested by a regulator.
          </Box>
          <Box>
            <Box {...h3Style}>11. INDEMNIFICATION</Box>
            You agree to defend, indemnify, and hold us harmless, including our subsidiaries,
            affiliates, and all of our respective officers, agents, partners, and employees, from
            and against any loss, damage, liability, claim, or demand, including reasonable
            attorneys' fees and expenses, made by third party due to or arising out of:
            <OrderedList px={2}>
              <ListItem>use of the Website</ListItem>
              <ListItem>breach of these Terms of Use</ListItem>
              <ListItem>
                any breach of your representations and warranties set forth in these Terms of Use
              </ListItem>
              <ListItem>
                your violation of the rights of a third party, including but not limited to
                intellectual property rights
              </ListItem>
              <ListItem>
                any overt harmful act toward any other use of the Website with whom you connected
                via the Website
              </ListItem>
            </OrderedList>
            Notwithstanding the foregoing, we reserve the right, at your expense, to assume the
            exclusive defense and control of any matter for which you are required to indemnify us,
            and you agree to cooperate, at your expense, with our defense of such claims. We will
            use reasonable efforts to notify you of any such claim, action or proceeding which is
            subject to this indemnification upon becoming aware of it.
          </Box>
          <Box>
            <Box {...h3Style}>12. DISCLAIMER</Box>
            YOU AGREE THAT YOUR USE OF THE WEBSITE WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT
            PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE
            WEBSITE AND/OR , AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE
            WEBSITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE WEBSITE AND WE WILL
            ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF
            CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
            RESULTING FROM YOUR ACCESS TO AND USE OF THE WEBSITE, (3) ANY UNAUTHORIZED ACCESS TO OR
            USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL
            INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM
            THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO
            OR THROUGH THE WEBSITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY
            CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE
            USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE WEBSITE. WE
            DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE
            ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE WEBSITE, ANY HYPERLINKED WEBSITE, OR
            ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE
            WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION
            BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
          </Box>
          <Box>
            <Box {...h3Style}>13. LIMITATION OF LIABILITY</Box>
            To the fullest extent permitted by licable law we disclaim all liability arising out of
            or in connection with the Website and/or Game. We shall not be held liable for:
            <UnorderedList
              px={2}
              style={{
                listStyleType: "lower-alpha",
              }}
            >
              <ListItem>
                your trust in any declaration, information and/or data provided on the Website,
                and/or any social media or blog platform operated by us;
              </ListItem>
              <ListItem>
                loss of Users’ Content, data, prize, revenue, or cryptocurrencies;
              </ListItem>
              <ListItem>temporary or permanent account suspensions;</ListItem>
              <ListItem>direct or indirect damage resulting from the use of the Game;</ListItem>
              <ListItem>
                interruptions in the Website or Game, and/or any losses caused by errors, bugs,
                breaches and/or malfunctions;
              </ListItem>
              <ListItem>technologies provided by third parties;</ListItem>
              <ListItem>a malfunction or cyberattack;</ListItem>
              <ListItem>the actions of any third party or by a User’s use of the Website;</ListItem>
              <ListItem>
                any case of force majeure, including a failure of the blockchain protocol used to
                run the Game not caused by us.
              </ListItem>
            </UnorderedList>
            You understand and accept the risks inherent in the provision of information, blockchain
            technology, and any sort of tokens, and agree that we shall not be liable for any
            failure of the foregoing technologies and/or breach of the security of the Website
            and/or Game unless caused by gross negligence on our part.
            <br />
            You agree and acknowledge that our total aggregate liability to you for any claims
            arising out of or relating to these Terms or your access to or use of (or your inability
            to access or use) any portion of the Website is limited to the amounts you actually paid
            us under these Terms in the twelve (12) month period preceding the date the claim arose.
          </Box>
          <Box>
            <Box {...h3Style}>14. USER DATA</Box>
            We will maintain certain data that you transmit to the Website for the purpose of
            managing the performance of the Website as well as data relating to your use of the
            Website. You may learn more about the data that we may collect in our Privacy Policy.
            <br />
            Although we perform regular routine backups of data, you are solely responsible for all
            data that you transmit or that release to any activity you have undertaken using the
            Website. You agree that we shall have no liability to you for any loss or corruption of
            any such data, and you hereby waive any right of action against us arising from any such
            loss or corruption of such data.
          </Box>
          <Box>
            <Box {...h3Style}>15. ASSUMPTION OF RISK</Box>
            You accept and acknowledge each of the following:
            <UnorderedList
              px={2}
              style={{
                listStyleType: "lower-roman",
              }}
            >
              <ListItem>
                The prices of Blockchain assets including but not limited to cryptocurrencies are
                subject to fluctuations. We cannot guarantee that any purchasers of NFT will not
                lose money
              </ListItem>
              <ListItem>
                You are solely responsible for any taxes apply to your NFT-related transactions,
                according to your own country’s or region’s tax rules. We are not responsible for
                determining the taxes that apply to your transactions on the Website.
              </ListItem>
              <ListItem>
                There are risks and limitations associated with using an Internet-based currency,
                including, but not limited to, the risk of hardware, software, and Internet
                connections, the risk of malicious software introduction, and the risk that third
                parties may obtain unauthorized access to information stored within your wallet. You
                accept and acknowledge that we will not be responsible for any communication
                failures, disruptions, errors, distortions, or delays you may experience when using
                the Blockchain.
              </ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Box {...h3Style}>16. TERMINATION</Box>
            Account Deletion by User
            <br />
            You may terminate these Terms at any time by deleting your User account and
            discontinuing your use of the Website.
            <br />
            Your account can be deleted by either selling your NFTs on the secondary marketplace or
            burning them through sending to the burner wallet.
            <br />
            The deletion of your account will result in the irreversible deletion of all User data
            associated with the account. You must save any prizes, awards, and cryptocurrencies
            stored on the Treasury to an external wallet before any deletion request. Any awards
            and/or cryptocurrency stored on the Treasury that have not been transferred out of your
            account at the date of deletion will be permanently irretrievable. We will not be
            responsible for the permanent loss of any awards and/or cryptocurrency that was not
            saved prior to a deletion request.
            <br />
            Account termination by us
            <br />
            We may, upon notice to you, terminate your User account at any time if you are in breach
            of these Terms. Where your User account is terminated, we will provide the reasons for
            the termination. We may suspend your User account prior to sending the communication if
            we need to take immediate action. We will not be liable to you or to any other person as
            a result of any such suspension or termination. <br />
            We may at any time, for any reason and in our sole discretion, terminate these Terms and
            suspend and/or discontinue all or part of the Game without notice. Users agree, to the
            fullest extent permitted by law, that any suspension or termination of access to the
            Game may be without notice, and that we shall not be liable for the consequences of any
            such suspension or termination. <br />
            In case of termination of these Terms, we will provide you with the opportunity to
            withdraw your awards and cryptocurrencies, unless the termination or suspension of the
            account was decided due to a violation of these Terms, particularly in the case of
            fraudulent, abusive, or illegal activity. To the fullest extent permitted by licable law
            and notwithstanding anything to the contrary, the termination and/or suspension of a
            User account will be without prejudice to any other legal action that we may take
            against the User.
          </Box>
          <Box>
            <Box {...h3Style}>17. GOVERNING LAW. VENUE</Box>
            The rights and obligations of the parties hereunder and the interpretation of these
            Terms will be governed by the laws of Isle of Man, without giving effect to its
            principles of conflicts of law. If either party brings against the other party any
            proceeding arising out of these Terms, that party may bring proceedings only in the
            courts of Isle of Man and no other courts, and each party hereby submits to the
            exclusive jurisdiction of those courts for purposes of any such proceeding.
          </Box>
          <Box>
            <Box {...h3Style}>18. MISCELLANEOUS</Box>
            These Terms of Use and any policies or operating rules posted by us on the Website
            constitute the entire agreement and understanding between you and us. Our failure to
            exercise or enforce any right or provision of these Terms of use shall not operate as a
            waiver of such right or provision. These Terms of Use operate to the fullest extent
            permissible by law. We may assign any or all of our rights and obligations to others at
            any time. We shall not be responsible or liable for any loss, damage, delay, or failure
            to act caused by any cause beyond our reasonable control. If any provision or part of a
            provision of these Terms of Use is determined to be unlawful, void, or unenforceable,
            that provision or part of the provision is deemed severable from these Terms of Use and
            does not affect the validity and enforceability of any remaining provisions. There is no
            joint venture, partnership, employment or agency relationship created between you and us
            as a result of these Terms of Use or use of the Website. You agree that these Terms of
            Use will not be construed against us by virtue of having drafted them. You hereby waive
            any and all defenses you may have based on the electronic form of these Terms of Use and
            the lack of signing by the parties hereto to execute these Terms of Use.
          </Box>
          <Box>
            <Box {...h3Style}>19. CONTACT US</Box>
            In order to resolve a complaint regarding the Website or to receive further information
            regarding use of the Website, please contact us through the “Contact us” button on the
            Website.
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

TermsOfServicePage.Layout = PublicSiteLayout;

export default TermsOfServicePage;
