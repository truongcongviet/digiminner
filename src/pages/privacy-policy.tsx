import {
  Box,
  BoxProps,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";
import { NextPageWithLayout } from "../commons/types";
import PublicSiteLayout from "../layouts/siteLayout/PublicSiteLayout";

export interface IPrivacyPolicyPageProps {}

const PrivacyPolicyPage: NextPageWithLayout = (props: IPrivacyPolicyPageProps) => {
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
          Privacy policy
        </Box>
        <Flex
          direction={"column"}
          gap={{ base: "20px", md: "50px" }}
          textStyle={{ base: "text-body-3", md: "text-body-2" }}
          color={"black"}
          mb={{ base: "50px", md: "152px" }}
        >
          <Box>
            <Box {...h4Style}>Introduction</Box>
            UFM Trading limited and its affiliates (“UFM,” “we,” or “us”) want you to be familiar
            with how we collect, use and disclose information. This Privacy Policy describes our
            practices in connection with the information that we collect.
            <br />
            We understand that when you visit our website located at _________.com (including any
            successor URLs) (“Site”) you trust us with your personal information.
            <br />
            We take your privacy very seriously. In this privacy notice, we describe our privacy
            policy. We seek to explain to you in the clearest way possible what information we
            collect, how we use it, and what rights you have in relation to it. We hope you take
            some time to read through it carefully, as it is important. If there are any terms in
            this privacy policy that you do not agree with, please discontinue the use of our Site
            and our services.
            <br />
            This privacy policy applies to all information collected through our Site and/or any
            related services, sales, marketing or events (we refer to them collectively in this
            privacy policy as the "Services").
            <br />
            This Policy is part of the Terms of Use, as it is set forth directly therein.
            Capitalized terms not directly defined here shall have the meaning given to them in the
            Terms of Use.
          </Box>

          <Box>
            <Box {...h4Style}>
              Please read this privacy policy carefully as it will help you make informed decisions
              about sharing your personal information with us.
            </Box>
            <Box>
              <Box mb={2}>TABLE OF CONTENTS</Box>

              <OrderedList listStylePosition={"inside"}>
                <ListItem>
                  <Link href={"#what-information-do-we-collect"}>
                    WHAT INFORMATION DO WE COLLECT?
                  </Link>
                </ListItem>
                <ListItem>
                  {" "}
                  <Link href={"#how-do-we-collect-and-store-data-and-transmit-your-information"}>
                    HOW DO WE COLLECT AND STORE DATA AND TRANSMIT YOUR INFORMATION?
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"#how-we-protect-your-information"}>
                    HOW WE PROTECT YOUR INFORMATION?
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"#how-do-we-use-your-information"}>
                    HOW DO WE USE YOUR INFORMATION?
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"#will-your-information-be-shared-with-anyone"}>
                    WILL YOUR INFORMATION BE SHARED WITH ANYONE?
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"#do-we-use-cookies-and-other-tracking-technologies"}>
                    DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"#is-your-information-transferred-internationally"}>
                    IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"#what-is-our-stance-on-third-party-website"}>
                    WHAT IS OUR STANCE ON THIRD-PARTY WEBSITE?
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"#how-long-do-we-keep-your-information"}>
                    HOW LONG DO WE KEEP YOUR INFORMATION?
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"#how-do-we-keep-your-information-safe"}>
                    HOW DO WE KEEP YOUR INFORMATION SAFE?
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"#do-we-collect-information-from-minors"}>
                    DO WE COLLECT INFORMATION FROM MINORS?
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"#what-are-your-privacy-rights"}>WHAT ARE YOUR PRIVACY RIGHTS?</Link>
                </ListItem>
                <ListItem>
                  <Link href={"#do-we-make-updates-to-this-policy"}>
                    DO WE MAKE UPDATES TO THIS POLICY?
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"#how-can-you-contact-us"}>HOW CAN YOU CONTACT US?</Link>
                </ListItem>
              </OrderedList>
            </Box>
          </Box>

          <Box>
            <Box {...h3Style} id={"what-information-do-we-collect"}>
              WHAT INFORMATION DO WE COLLECT?
            </Box>
            <Box {...h4Style}>Personal information you disclose to us</Box>
            <Box>
              We collect personal information that you voluntarily provide to us when expressing an
              interest in obtaining information about us or our products and services, when
              participating in activities on the Site or otherwise contacting us.
              <br />
              The personal information that we collect depends on the context of the user's
              interactions with us and the Site, the choices you make and the products and features
              you use. The personal information we COLLECT can include the following:
            </Box>
            <UnorderedList px={3}>
              <ListItem>Name</ListItem>
              <ListItem>Email address</ListItem>
              <ListItem>Username and password</ListItem>
              <ListItem>Crypto wallet address</ListItem>
              <ListItem>Social media handle</ListItem>
              <ListItem>
                IP address (we may also derive your approximate location from your IP address)
              </ListItem>
              <ListItem>
                In-game activity, such as NFTs minted or acquired, games completed, NFT
                transactions, prizes withdrawal
              </ListItem>
            </UnorderedList>
            All personal information provided to us via the user must be true, complete and
            accurate, and the user is required to notify us of any changes to such personal
            information.
            <Box {...h4Style}>Information automatically collected</Box>
            We automatically collect certain information when you visit, use or navigate the Site.
            This information does not reveal your specific identity (like your name or contact
            information) but may include device and usage information, such as your IP address,
            browser and device characteristics, operating system, language preferences, referring
            URLs, device name, country, location, information about how and when you use our Site
            and other technical information. This information is primarily needed to maintain the
            security and operation of our Site, and for our internal analytics and reporting
            purposes.
            <br />
            Like many businesses, we also collect information through cookies and similar
            technologies. You can find out more about this in our Cookie Policy.
            <Box {...h4Style}>Information collected from other Sources</Box>
            We may obtain information about you from other sources, such as public databases, joint
            marketing partners, social media platforms (such as Facebook), as well as from other
            third parties. Examples of the information we receive from other sources include: social
            media profile information (your full name, gender, date of birth, email address, current
            city, state and country, user identification numbers for your contacts, profile picture
            URL and any other information that you choose to make public); marketing leads and
            search results and links, including paid listings (such as sponsored links).
          </Box>

          <Box id="how-do-we-collect-and-store-data-and-transmit-your-information">
            <Box {...h3Style}>HOW DO WE COLLECT AND STORE DATA AND TRANSMIT YOUR INFORMATION?</Box>
            We usually collect and store information including in paper, physical and electronic
            form provided by you when you communicate with us by email, web-based form, letter,
            facsimile or other means, including when:
            <UnorderedList px={3}>
              <ListItem>We provide you with our services via telephone, email or our Site</ListItem>
              <ListItem>
                We provide you with assistance or support for our products or services
              </ListItem>
              <ListItem>
                You participate in our functions, events or activities or on our social media pages
              </ListItem>
              <ListItem>
                You request that we provide you with information concerning our products or services
              </ListItem>
              <ListItem>You upload or submit information to us or our Site</ListItem>
              <ListItem>
                You complete any forms requesting information from you, including on registration
                with us, complete any survey or provide feedback to us concerning our products or
                services.
              </ListItem>
            </UnorderedList>
            Where practicable we will only collect information from you personally. However, we will
            also collect your information through our partners and third parties who supply services
            to us.
            <br />
            Please note that we use our own and third party computer servers including our Site
            hosts, data backups and payment gateway(s), which may be located Overseas and your
            information will likely be stored and transmitted Overseas as part of the normal
            operation of our business.
            <br />
            We also collect information from your computer or mobile device automatically when you
            browse our Site. This information may include:
            <UnorderedList px={3}>
              <ListItem>The date and time of your visi</ListItem>
              <ListItem>Your domain</ListItem>
              <ListItem>Locality</ListItem>
              <ListItem>Operating system</ListItem>
              <ListItem>The server your computer or mobile is using to access our Site</ListItem>
              <ListItem>Your browser and version number</ListItem>
              <ListItem>Search terms you have entered to find our Site or access our Site</ListItem>
              <ListItem>
                Pages and links you have accessed both on our Site and on other webSite
              </ListItem>
              <ListItem>The last website you visited</ListItem>
              <ListItem>The pages of our Site that you access</ListItem>
              <ListItem>The device you use to access our Site and your IP Address</ListItem>
            </UnorderedList>
            While we do not use some of this information to identify personally, we may record
            certain information about your use of our Site such as which pages you visit and the
            time and date of your visit and that information could potentially be used to identify
            you. <br />
            It may be possible for us to identify you from information collected automatically from
            your visit(s) to our Site. If you have registered an account with us, we will able to
            identify you through your user name and password when you log into our Site. Further, if
            you access our Site via links in an email we have sent you, we will be able to identify
            you.
            <br />
            The device you use to access our Site may collect information about you including your
            location using longitude and latitude co-ordinates obtained through GPS, Wi-Fi or cell
            site tri-angulation.
            <br />
            For information about your ability to restrict the collection and use of such
            information, please use the settings available on your device.
            <br />
            We may use statistical analytics software tools and software known as cookies which
            transmit data to third party servers located Overseas. To our knowledge, our analytic
            providers do not identify individual users or associate your IP Address with any other
            data held by them.
          </Box>

          <Box
            id="how-we-protect-your-information
          "
          >
            <Box {...h3Style}>HOW WE PROTECT YOUR INFORMATION?</Box>
            We will endeavour to take all reasonable steps to keep secure and protect any
            information which we hold about you, including:
            <br />
            <UnorderedList px={3}>
              <ListItem>Securing our physical premises and digital storage media</ListItem>
              <ListItem>
                Using technologies to ensure that your information is encrypted and sent across the
                Internet securely
              </ListItem>
              <ListItem>
                Placing password protection and access control over our information technology
                systems and databases to limit access and protect electronic information from
                unauthorised interference, access, modification and disclosure
              </ListItem>
              <ListItem>Taking regular back-ups of our electronic systems</ListItem>
            </UnorderedList>
            Notwithstanding that we will take all reasonable steps to keep your information secure,
            data transmission over the internet is never guaranteed to be completely secure. We do
            not and cannot warrant the security of any information you transmit to us or from any
            online services.
          </Box>
          <Box id="how-do-we-use-your-information">
            <Box {...h3Style}>HOW DO WE USE YOUR INFORMATION?</Box>
            We use personal information collected via our Site for a variety of business purposes
            described below.
            <br />
            We process your personal information for these purposes in reliance on our legitimate
            business interests ("Business Purposes"), in order to enter into or perform a contract
            with you ("Contractual"), with your consent ("Consent"), and/or for compliance with our
            legal obligations ("Legal Reasons"). We indicate the specific processing grounds we rely
            on next to each purpose listed below. We use the information we collect or receive:
            <br />
            <UnorderedList px={3}>
              <ListItem>
                To facilitate account creation and log in process: If you choose to link your
                account with us to a third party account (such as your Google or Facebook account),
                we use the information you allowed us to collect from those third parties to
                facilitate account creation and log in process.
              </ListItem>
              <ListItem>
                To send you marketing and promotional communications: We and/or our third party
                marketing partners may use the personal information you send to us for our marketing
                purposes, if this is in accordance with your marketing preferences. You can opt-out
                of our marketing emails at any time (see the "Your Privacy Rights" below).
              </ListItem>
              <ListItem>
                To protect our Site: We may use your information as part of our efforts to keep our
                Site safe and secure (for example, for fraud monitoring and prevention).
              </ListItem>
              <ListItem>
                To enforce our terms, conditions and policies: for Business Purposes, Legal Reasons,
                and/or possibly Contractual.
              </ListItem>
              <ListItem>
                To respond to legal requests and prevent harm: If we receive a subpoena or other
                legal request, we may need to inspect the data we hold to determine how to respond.
              </ListItem>
              <ListItem>
                TFor other Business Purposes: We may use your information for other Business
                Purposes, such as data analysis, identifying usage trends, determining the
                effectiveness of our promotional campaigns and to evaluate and improve our Site,
                products, services, marketing and your experience.
              </ListItem>
            </UnorderedList>
          </Box>
          <Box id={"will-your-information-be-shared-with-anyone"}>
            <Box {...h3Style}>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</Box>
            We only share and disclose your information in the following situations:
            <br />
            <UnorderedList px={3}>
              <ListItem>
                Compliance with Laws. We may disclose your information where we are legally required
                to do so in order to comply with applicable law, governmental requests, a judicial
                proceeding, court order, or legal process, such as in response to a court order or a
                subpoena (including in response to public authorities to meet national security or
                law enforcement requirements).
              </ListItem>
              <ListItem>
                Vital Interests and Legal Rights. We may disclose your information where we believe
                it is necessary to investigate, prevent, or take action regarding potential
                violations of our policies, suspected fraud, situations involving potential threats
                to the safety of any person and illegal activities, or as evidence in litigation in
                which we are involved.
              </ListItem>
              <ListItem>
                Vendors, Consultants and Other Third-Party Service Providers. We may share your data
                with:
                <UnorderedList
                  px={2}
                  style={{
                    listStyleType: "disclosure-closed",
                  }}
                >
                  <ListItem>
                    Our related entities, employees, officers, agents, contractors, other companies
                    that provide services to us, sponsors, government agencies or other third
                    parties to satisfy the purposes for which the information was collected (as
                    outlined above) or for another purpose if that other purpose is closely related
                    to the primary purpose of collection and an individual would reasonably expect
                    us to disclose the information for that secondary purpose
                  </ListItem>
                  <ListItem>
                    Third parties who help us analyse the information we collect so that we can
                    administer, support, improve or develop our business and the services we provide
                    to you
                  </ListItem>
                  <ListItem>
                    Merchants and the recipients of funds to identify you as the sender of the funds
                    and to a party whom sends you funds in connection with a transfer to you of
                    funds
                  </ListItem>
                  <ListItem>
                    Third parties, including those in the blockchain and fintech industry, marketing
                    and advertising sectors, to use your information in order to let you know about
                    goods and services which may be of interest to you
                  </ListItem>
                  <ListItem>
                    Our professional advisers such as consultants, bankers, professional indemnity
                    insurers, brokers and auditors so that we can meet our regulatory obligations,
                    and administer, support, improve or develop our business
                  </ListItem>
                  <ListItem>
                    To debt recovery agencies who assist us with the recovery of debts owed to us.
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                Restructure, Merger, Acquisition. We may disclose personal information collected
                from you to facilitate the sale of all or a substantial part of our assets or
                business or to companies with which we propose to merge or who propose to acquire us
                and their advisers. In the event of a proposed restructure or sale of our business
                (or part of our business) or where a company proposes to acquire or merge with us,
                we may disclose personal information to the buyer and their advisers without your
                consent subject to compliance with the law If we sell the business and the sale is
                structured as a share sale, you acknowledge that this transaction will not
                constitute the ‘transfer’ of personal information.{" "}
              </ListItem>
              <ListItem>
                With your Consent. We may disclose your personal information for any other purpose
                with your consent.
              </ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <Box {...h3Style} id={"do-we-use-cookies-and-other-tracking-technologies"}>
              DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </Box>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to
            access or store information. Specific information about how we use such technologies and
            how you can refuse certain cookies is set out in our Cookie Policy.
            <br />
          </Box>

          <Box id="is-your-information-transferred-internationally">
            <Box {...h3Style}>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</Box>
            Our servers are located in _______. If you are accessing our Site from outside _______,
            please be aware that your information may be transferred to, stored, and processed by us
            in our facilities and by those third parties with whom we may share your personal
            information (see “WILL YOUR INFORMATION BE SHARED WITH ANYONE?” Section above), in
            _________ and other countries.
            <br />
            If you are a resident in the European Economic Area, then these countries may not have
            data protection or other laws as comprehensive as those in your country. We will however
            take all necessary measures to protect your personal information in accordance with this
            privacy policy and applicable law.
          </Box>

          <Box id="what-is-our-stance-on-third-party-website">
            <Box {...h3Style}>WHAT IS OUR STANCE ON THIRD-PARTY WEBSite?</Box>
            The Site may contain advertisements from third parties that are not affiliated with us
            and which may link to other webSite, online services or mobile applications. We cannot
            guarantee the safety and privacy of data you provide to any third parties. Any data
            collected by third parties is not covered by this privacy policy. We are not responsible
            for the content or privacy and security practices and policies of any third parties,
            including other webSite, services or applications that may be linked to or from the
            Site. You should review the policies of such third parties and contact them directly to
            respond to your questions.
          </Box>

          <Box id="how-long-do-we-keep-your-information">
            <Box {...h3Style}>HOW LONG DO WE KEEP YOUR INFORMATION?</Box>
            We will only keep your personal information for as long as it is necessary for the
            purposes set out in this privacy policy, unless a longer retention period is required or
            permitted by law (such as tax, accounting or other legal requirements). No purpose in
            this policy will require us keeping your personal information for longer than 1 year.
            <br />
            When we have no ongoing legitimate business need to process your personal information,
            we will either delete or anonymize it, or, if this is not possible (for example, because
            your personal information has been stored in backup archives), then we will securely
            store your personal information and isolate it from any further processing until
            deletion is possible.
          </Box>

          <Box id="how-do-we-keep-your-information-safe">
            <Box {...h3Style}>HOW DO WE KEEP YOUR INFORMATION SAFE?</Box>
            We have implemented appropriate technical and organizational security measures designed
            to protect the security of any personal information we process. However, please note
            that we cannot guarantee that the internet in itself is 100% secure. Although we will do
            our best to protect your personal information, transmission of personal information to
            and from our Site is at your own risk. We would like to advise our users to only access
            the services within a secure environment.
          </Box>

          <Box id="do-we-collect-information-from-minors">
            <Box {...h3Style}>DO WE COLLECT INFORMATION FROM MINORS?</Box>
            We do not knowingly solicit data from or market to children under 18 years of age. By
            using the Site, you represent that you are at least 18 years of age or that you are the
            parent or guardian of such a minor and consent to such minor dependent’s use of the Site
            and Apps. If we learn that personal information from users less than 18 years of age has
            been collected, we will deactivate the account and take reasonable measures to promptly
            delete such data from our records. If you become aware of any data we have collected
            from children under age 18, please contact us through the “Contact us” button on the
            Website.
          </Box>

          <Box id="what-are-your-privacy-rights">
            <Box {...h3Style}>WHAT ARE YOUR PRIVACY RIGHTS?</Box>
            In some regions (like the European Economic Area), you have certain rights under
            applicable data protection laws. These may include the right (i) to request access and
            obtain a copy of your personal information, (ii) to request rectification or erasure;
            (iii) to restrict the processing of your personal information; and (iv) if applicable,
            to data portability. In certain circumstances, you may also have the right to object to
            the processing of your personal information. To make such a request, please email us
            through the “Contact us” button on the Website.
            <br />
            We will consider and act upon any request in accordance with applicable data protection
            laws.
            <br />
            If we are relying on your consent to process your personal information, you have the
            right to withdraw your consent at any time. Please note however that this will not
            affect the lawfulness of the processing completed before its withdrawal.
            <br />
            If you are resident in the European Economic Area and you believe we are unlawfully
            processing your personal information, you also have the right to lodge a complaint to
            your local data protection supervisory authority.
            <br />
            Cookies and similar technologies: Most Web browsers are set to accept cookies by
            default. If you prefer, you can usually choose to set your browser to remove cookies and
            to reject cookies. If you choose to remove cookies or reject cookies, this could affect
            certain features or services of our Site. For further information, please see our Cookie
            Policy.
            <br />
            Opting out of email marketing: You can unsubscribe from our marketing email list at any
            time by clicking on the unsubscribe link in the emails that we send or by contacting us
            using the details provided below. You will then be removed from the marketing email list
            – however, we will still need to send you service-related emails that are necessary for
            the administration and use of your account. You can also opt-out by:
            <br />
            <UnorderedList px={3}>
              <ListItem>
                Noting your preferences at the time you register your account with the Site
              </ListItem>
              <ListItem>Logging into your account settings and updating your preferences</ListItem>
              <ListItem>Contacting us using the contact information provided below</ListItem>
            </UnorderedList>
          </Box>

          <Box id="do-we-make-updates-to-this-policy">
            <Box {...h3Style}>DO WE MAKE UPDATES TO THIS POLICY?</Box>
            We may update this privacy policy from time to time. The updated version will be
            indicated by an updated “Revised” date and the updated version will be effective as soon
            as it is accessible. If we make material changes to this privacy policy, we may notify
            you either by prominently posting a notice of such changes or by directly sending you a
            notification. We encourage you to review this privacy policy frequently to be informed
            of how we are protecting your information.
          </Box>

          <Box id="how-can-you-contact-us">
            <Box {...h3Style}>HOW CAN YOU CONTACT US?</Box>
            If you have any queries in relation to this policy, you wish to access or correct the
            information we hold about you, or make a complaint, please contact us in writing through
            the “Contact us” button on the Website.
            <br />
            We aim to acknowledge receipt of all privacy complaints from you within 15 working days
            and resolve all complaints within 60 business days. Where we cannot resolve a complaint
            within that period, we will notify you of the reason for the delay as well as advising
            the time by which we expect to resolve the complaint.
            <br />
            In order to disclose information to you in response to a request for access we may
            require you to provide us with certain information to verify your identity. Local laws
            may contain exceptions which may affect your right to access your information.
            <br />
            We may (depending on the request) charge you a fee to access the information. We will
            inform you of any fees payable in respect of accessing your information prior to
            actioning your request. All requests for information will be handled in a reasonable
            period of time (within 15 calendar days after the request is made).
            <br />
            If you wish to have your information deleted, please contact us using the details above
            and we will take reasonable steps to delete the information (unless we are obliged to
            keep it for legal or auditing purposes). To the extent that any information is stored on
            a blockchain it may be impracticable, unfeasible or impossible to delete.
            <br />
            In the event that you believe that there has been a breach of law, we invite you to
            contact us as soon as possible.
            <br />
            If you are not satisfied with our handling of a complaint or the outcome of a complaint
            you may make an application via the “Contact us” button on the Website.
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

PrivacyPolicyPage.Layout = PublicSiteLayout;

export default PrivacyPolicyPage;
