import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useValue } from '../../../../main/context/ContextProvider';

const Content = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const {
    state: { dailyKT },
    dispatch,
  } = useValue();

  return (
    <Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        <Typography>
          <strong>GENERAL</strong>
        </Typography>
        <br></br>

        <Typography>
          TestKnow(“Company” or “we” or “us” or “our”) respects the privacy of
          its users (“user” or “you”) that use our website located at
          https://www.TestKnow.com, including other media forms, media channels,
          mobile website or mobile application related or connected thereto
          (collectively, the “Website”). The following Company privacy policy
          (“Privacy Policy”) is designed to inform you, as a user of the
          Website, about the types of information that Company may gather about
          or collect from you in connection with your use of the Website. It
          also is intended to explain the conditions under which Company uses
          and discloses that information, and your rights in relation to that
          information. Changes to this Privacy Policy are discussed at the end
          of this document. Each time you use the Website, however, the current
          version of this Privacy Policy will apply. Accordingly, each time you
          use the Website you should check the date of this Privacy Policy
          (which appears at the beginning of this document) and review any
          changes since the last time you used the Website.
        </Typography>
        <br></br>
        {/* <Typography>
          The Website is hosted in the United States of America and is subject
          to U.S. state and federal law. If you are accessing our Website from
          other jurisdictions, please be advised that you are transferring your
          personal information to us in the United States, and by using our
          Website, you consent to that transfer and use of your personal
          information in accordance with this Privacy Policy. You also agree to
          abide by the applicable laws of applicable states and U.S. federal law
          concerning your use of the Website and your agreements with us. Any
          persons accessing our Website from any jurisdiction with laws or
          regulations governing the use of the Internet, including personal data
          collection, use and disclosure, different from those of the
          jurisdictions mentioned above may only use the Website in a manner
          lawful in their jurisdiction. If your use of the Website would be
          unlawful in your jurisdiction, please do not use the Website.{' '}
        </Typography>
        <br></br> */}
        <Typography>
          BY USING OR ACCESSING THE WEBSITE, YOU ARE ACCEPTING THE PRACTICES
          DESCRIBED IN THIS PRIVACY POLICY.
        </Typography>
        <br></br>
        <Typography>
          <strong>
            GATHERING, USE AND DISCLOSURE OF NON-PERSONALLY-IDENTIFYING
            INFORMATION
          </strong>
        </Typography>
        <br></br>
        <Typography>
          <strong></strong>
        </Typography>

        <Typography>
          “Non-Personally-Identifying Information” is information that, without
          the aid of additional information, cannot be directly associated with
          a specific person. “Personally-Identifying Information,” by contrast,
          is information such as a name or email address that, without more, can
          be directly associated with a specific person. Like most website
          operators, Company gathers from users of the Website
          Non-Personally-Identifying Information of the sort that Web browsers,
          depending on their settings, may make available. That information
          includes the user’s Internet Protocol (IP) address, operating system,
          browser type and the locations of the websites the user views right
          before arriving at, while navigating and immediately after leaving the
          Website. Although such information is not Personally-Identifying
          Information, it may be possible for Company to determine from an IP
          address a user’s Internet service provider and the geographic location
          of the visitor’s point of connectivity as well as other statistical
          usage data. Company analyzes Non-Personally-Identifying Information
          gathered from users of the Website to help Company better understand
          how the Website is being used. By identifying patterns and trends in
          usage, Company is able to better design the Website to improve users’
          experiences, both in terms of content and ease of use. From time to
          time, Company may also release the Non-Personally-Identifying
          Information gathered from Website users in the aggregate, such as by
          publishing a report on trends in the usage of the Website.
        </Typography>
        <br></br>
        <Typography>
          <strong>
            <em>Web Cookies</em>
          </strong>
        </Typography>
        <br></br>
        <Typography>
          A “Web Cookie” is a string of information which assigns you a unique
          identification that a website stores on a user’s computer, and that
          the user’s browser provides to the website each time the user submits
          a query to the website. We use cookies on the Website to keep track of
          services you have used, to record registration information regarding
          your login name and password, to record your user preferences, to keep
          you logged into the Website and to facilitate purchase procedures.
          Company also uses Web Cookies to track the pages that users visit
          during each Website session, both to help Company improve users’
          experiences and to help Company understand how the Website is being
          used. As with other Non-Personally-Identifying Information gathered
          from users of the Website, Company analyzes and discloses in
          aggregated form information gathered using Web Cookies, so as to help
          Company, its partners and others better understand how the Website is
          being used. COMPANY USERS WHO DO NOT WISH TO HAVE WEB COOKIES PLACED
          ON THEIR COMPUTERS SHOULD SET THEIR BROWSERS TO REFUSE WEB COOKIES
          BEFORE ACCESSING THE WEBSITE, WITH THE UNDERSTANDING THAT CERTAIN
          FEATURES OF THE WEBSITE MAY NOT FUNCTION PROPERLY WITHOUT THE AID OF
          WEB COOKIES. WEBSITE USERS WHO REFUSE WEB COOKIES ASSUME ALL
          RESPONSIBILITY FOR ANY RESULTING LOSS OF FUNCTIONALITY.{' '}
        </Typography>
        <br></br>
        <Typography>
          <strong></strong>
        </Typography>
        <br></br>
        <Typography>
          <strong>
            <em>Third-Party Advertisers</em>
          </strong>
        </Typography>
        <br></br>
        <Typography>
          We may use third-party advertising companies to serve ads when you
          visit the Website. These companies may use information (not including
          any Personally-Identifying Information) about your visits to the
          Website and other websites that are contained in Web Cookies in order
          to provide advertisements about goods and services of interest to you.
          Using a tool created by the Network Advertising Initiative, you can
          opt out of several third-party ad servers’ and networks’ Web Cookies
          simultaneously. If you would like more information about this practice
          and to know your choices about not having this information used by
          these companies, please follow the following links:{' '}
          <a
            style={{ wordBreak: 'break-word' }}
            href="https://www.networkadvertising.org/understanding-online-advertising/"
          >
            https://www.networkadvertising.org/understanding-online-advertising/
          </a>
          . Please contact us if you would like to know the identity of the
          third-party advertising companies we are currently using to serve ads.
        </Typography>
        <br></br>
        <Typography>
          We may allow advertisers to choose the characteristics of users who
          will see their advertisements, and we may use any of the
          Non-Personally Identifying Information we have collected (including
          information you may have decided not to show to other users, such as
          your birth year or other sensitive personal information or
          preferences) to select the appropriate audience for those
          advertisements. We do not identify you to the advertiser.
        </Typography>
        <br></br>
        <Typography>
          <strong>
            <em>Analytics</em>
          </strong>
        </Typography>
        <br></br>
        <Typography>
          We may use third-party vendors, including Google, who use first-party
          cookies (such as the Google Analytics cookie) and third-party cookies
          (such as the DoubleClick cookie) together to inform, optimize and
          serve ads based on your past activity on the Website, including Google
          Analytics for Display Advertising. The information collected may be
          used to, among other things, analyze and track data, determine the
          popularity of certain content and better understand online activity.
          If you do not want any information to be collected and used by Google
          Analytics, you can install an opt-out in your web browser
          (https://tools.google.com/dlpage/gaoptout/) and/or opt out from Google
          Analytics for Display Advertising or the Google Display Network by
          using Google’s Ads Settings (
          <a href="http://www.google.com/settings/ads">
            www.google.com/settings/ads
          </a>
          ).
        </Typography>
        <br></br>
        <Typography>
          <strong>
            <em>Aggregated and Non-Personally-Identifying Information</em>
          </strong>
        </Typography>
        <br></br>
        <Typography>
          We may share aggregated and Non-Personally Identifying Information we
          collect under any of the above circumstances. We may also share it
          with third parties and our affiliate companies to develop and deliver
          targeted advertising on the Website and on websites of third parties.
          We may combine Non-Personally Identifying Information we collect with
          additional Non-Personally Identifying Information collected from other
          sources. We also may share aggregated information with third parties,
          including advisors, advertisers and investors, for the purpose of
          conducting general business analysis. For example, we may tell our
          advertisers the number of visitors to the Website and the most popular
          features or services accessed. This information does not contain any
          Personally-Identifying Information and may be used to develop website
          content and services that we hope you and other users will find of
          interest and to target content and advertising.{' '}
        </Typography>
        <br></br>
        <Typography>
          <strong>
            <em>Mobile Device Additional Terms</em>
          </strong>
        </Typography>
        <br></br>
        <Typography>
          <strong>• Mobile Device</strong>. If you use a mobile device to access
          the Website or download any of our applications, we may collect device
          information (such as your mobile device ID, model and manufacturer),
          operating system, version information and IP address.
        </Typography>
        <br></br>
        <Typography>
          <strong>• Geo-Location Information</strong>. Unless we have received
          your prior consent, we do not access or track any location-based
          information from your mobile device at any time while downloading or
          using our mobile application or our services, except that it may be
          possible for Company to determine from an IP address the geographic
          location of your point of connectivity, in which case we may gather
          and use such general location data.
        </Typography>
        <br></br>
        <Typography>
          <strong>SOCIAL MEDIA </strong>
        </Typography>
        <br></br>
        <Typography>
          We may provide you the option to connect your account on the Website
          to your account on some social networking sites for the purpose of
          logging in, uploading information or enabling certain features on the
          Website. When logging in using your social network credentials, we may
          collect the Personally-Identifying Information you have made publicly
          available on the social networking site, such as your name, profile
          picture, cover photo, username, gender, friends network, age range,
          locale, friend list and any other information you have made public.
          Once connected, other users may also be able to see information about
          your social network, such as the size of your network and your
          friends, including common friends. By connecting your account on the
          Website to your account on any social networking site, you hereby
          consent to the continuous release of information about you to us. We
          will not send any of your account information to the connected social
          networking site without first disclosing that to you. Each social
          network may further allow you to set privacy controls around your
          information on their system, and our collection of information will
          always follow such controls and permissions. This feature is subject
          to continuous change and improvement by us and each social networking
          site involved, and therefore the available features and shared
          information are subject to change without notice to you.
        </Typography>
        <br></br>
        <Typography>
          <strong>
            COLLECTION, USE AND DISCLOSURE OF PERSONALLY-IDENTIFYING INFORMATION{' '}
          </strong>
        </Typography>
        <br></br>
        <Typography>
          As defined above, Personally-Identifying Information is information
          that can be directly associated with a specific person. Company may
          collect a range of Personally-Identifying Information from and about
          Website users. Much of the Personally-Identifying Information
          collected by Company about users is information provided by users
          themselves when (1) registering for our service, (2) logging in with
          social network credentials, (3) participating in polls, contests,
          surveys or other features of our service, or responding to offers or
          advertisements, (4) communicating with us, (5) creating a public
          profile or (6) signing up to receive newsletters. That information may
          include each user’s name, address, email address and telephone number,
          and, if you transact business with us, financial information such as
          your payment method (valid credit card number, type, expiration date
          or other financial information). We also may request information about
          your interests and activities, your gender, age, date of birth,
          username, hometown and other demographic or relevant information as
          determined by Company from time to time. Users of the Website are
          under no obligation to provide Company with Personally-Identifying
          Information of any kind, with the caveat that a user’s refusal to do
          so may prevent the user from using certain Website features.
        </Typography>
        <br></br>
        <Typography>
          BY REGISTERING WITH OR USING THE WEBSITE, YOU CONSENT TO THE USE AND
          DISCLOSURE OF YOUR PERSONALLY-IDENTIFYING INFORMATION AS DESCRIBED IN
          THIS “COLLECTION, USE AND DISCLOSURE OF PERSONALLY-IDENTIFYING
          INFORMATION” SECTION.
        </Typography>
        <br></br>
        <Typography>
          <strong></strong>
        </Typography>
        <br></br>
        <Typography>
          <strong>
            <em>Company Communications</em>
          </strong>
        </Typography>
        <br></br>
        <Typography>
          We may occasionally use your name and email address to send you
          notifications regarding new services offered by the Website that we
          think you may find valuable. We may also send you service-related
          announcements from time to time through the general operation of the
          service. Generally, you may opt out of such emails at the time of
          registration or through your account settings, though we reserve the
          right to send you notices about your account, such as service
          announcements and administrative messages, even if you opt out of all
          voluntary email notifications.
        </Typography>
        <br></br>
        <Typography>
          <strong>
            <em>Company Disclosures: </em>
          </strong>
        </Typography>
        <br></br>
        <Typography>
          Company will disclose Personally-Identifying Information under the
          following circumstances:{' '}
        </Typography>
        <br></br>
        <Typography>
          <strong>• By Law or to Protect Rights.</strong> When we believe
          disclosure is appropriate, we may disclose Personally-Identifying
          Information in connection with efforts to investigate, prevent or take
          other action regarding illegal activity, suspected fraud or other
          wrongdoing; to protect and defend the rights, property or safety of
          Company, our users, our employees or others; to comply with applicable
          law or cooperate with law enforcement; to enforce our Terms of Use or
          other agreements or policies, in response to a subpoena or similar
          investigative demand, a court order or a request for cooperation from
          a law enforcement or other government agency; to establish or exercise
          our legal rights; to defend against legal claims; or as otherwise
          required by law. In such cases, we may raise or waive any legal
          objection or right available to us.
        </Typography>
        <br></br>
        <Typography>
          <strong>• Marketing Communications.</strong> Unless users opt-out from
          receiving Company marketing materials upon registration, Company may
          email users about products and services that Company believes may be
          of interest to them. If you wish to opt-out of receiving marketing
          materials from Company, you may do so by following the unsubscribe
          link in the email communications, by going to your account settings
          (if applicable) or contacting us using the contact information below.
        </Typography>
        <br></br>
        <Typography>
          <strong>• Third-Party Marketing Communications. </strong>Unless users
          opt-out from receiving marketing materials upon registration, Company
          may provide users’ email information to third parties, so that those
          third parties may directly contact them about additional products and
          services. To cease having your email information provided to third
          parties, you may do so by going to your account settings (if
          applicable) or contacting us using the contact information below. Even
          after opting-out, you may continue to receive marketing emails from
          third parties to whom Company already has provided your email
          information. You will be responsible for directly contacting such
          third parties to request cessation of further marketing emails.
        </Typography>
        <br></br>
        <Typography>
          <strong>• Third-Party Service Providers.</strong> We may share your
          Personally-Identifying Information, which may include your name and
          contact information (including email address) with our authorized
          service providers that perform certain services on our behalf. These
          services may include fulfilling orders, providing customer service and
          marketing assistance, performing business and sales analysis,
          supporting the Website’s functionality and supporting contests,
          sweepstakes, surveys and other features offered through the Website.
          We may also share your name, contact information and credit card
          information with our authorized service providers who process credit
          card payments. These service providers may have access to personal
          information needed to perform their functions but are not permitted to
          share or use such information for any other purpose.
        </Typography>
        <br></br>
        <Typography>
          <strong>• Business Transfers; Bankruptcy.</strong> Company reserves
          the right to transfer all Personally-Identifying Information in its
          possession to a successor organization in the event of a merger,
          acquisition, bankruptcy or other sale of all or a portion of Company’s
          assets. Other than to the extent ordered by a bankruptcy or other
          court, the use and disclosure of all transferred
          Personally-Identifying Information will be subject to this Privacy
          Policy, or to a new privacy policy if you are given notice of that new
          privacy policy and are given an opportunity to affirmatively opt-out
          of it. Personally-Identifying Information submitted or collected after
          a transfer, however, may be subject to a new privacy policy adopted by
          the successor organization.{' '}
        </Typography>
        <br></br>
        <Typography>
          <strong>
            <em>
              Changing Personally-Identifying Information; Account Termination{' '}
            </em>
          </strong>
        </Typography>
        <br></br>
        <Typography>
          You may at any time review or change your Personally-Identifying
          Information by going to your account settings (if applicable) or
          contacting us using the contact information below. Upon your request,
          we will deactivate or delete your account and contact information from
          our active databases. Such information will be deactivated or deleted
          as soon as practicable based on your account activity and accordance
          with our deactivation policy and applicable law. To make this request,
          either go to your account settings (if applicable) or contact us as
          provided below. We will retain in our files some
          Personally-Identifying Information to prevent fraud, to troubleshoot
          problems, to assist with any investigations, to enforce our Terms of
          Use and to comply with legal requirements as is permitted by law.
          Therefore, you should not expect that all your Personally-Identifying
          Information will be completely removed from our databases in response
          to your requests. Additionally, we keep a history of changed
          information to investigate suspected fraud with your account.
        </Typography>
        <br></br>
        <Typography>
          <strong>
            <em>General Use</em>
          </strong>
        </Typography>
        <br></br>
        <Typography>
          Company uses the Personally-Identifying Information in the file we
          maintain about you, and other information we obtain from your current
          and past activities on the Website (1) to deliver the products and
          services that you have requested; (2) to manage your account and
          provide you with customer support; (3) to communicate with you by
          email, postal mail, telephone and/or mobile devices about products or
          services that may be of interest to you either from us, our affiliate
          companies or other third parties; (4) to develop and display content
          and advertising tailored to your interests on the Website and other
          sites; (5) to resolve disputes and troubleshoot problems; (6) to
          measure consumer interest in our services; (7) to inform you of
          updates; (8) to customize your experience; (9) to detect and protect
          us against error, fraud and other criminal activity; (10) to enforce
          our Terms of Use; and (11) to do as otherwise described to you at the
          time of collection. At times, we may look across multiple users to
          identify problems. In particular, we may examine your
          Personally-Identifying Information to identify users using multiple
          user IDs or aliases. We may compare and review your
          Personally-Identifying Information for accuracy and to detect errors
          and omissions. We may use financial information or payment method to
          process payment for any purchases made on the Website, enroll you in
          the discount, rebate, and other programs in which you elect to
          participate, to protect against or identify possible fraudulent
          transactions and otherwise as needed to manage our business.
        </Typography>
        <br></br>
        <Typography>
          <strong>
            COLLECTION AND USE OF INFORMATION BY THIRD PARTIES GENERALLY
          </strong>
        </Typography>
        <br></br>
        <Typography>
          Company contractually prohibits its contractors, affiliates, vendors
          and suppliers from disclosing Personally-Identifying Information
          received from Company, other than in accordance with this Privacy
          Policy. However, third parties are under no obligation to comply with
          this Privacy Policy with respect to Personally-Identifying Information
          that users provide directly to those third parties, or that those
          third parties collect for themselves. These third parties include
          advertisers, providers of games, utilities, widgets and a variety of
          other third-party applications accessible through the Website. Company
          neither owns nor controls the third-party websites and applications
          accessible through the Website. Thus, this Privacy Policy does not
          apply to information provided to or gathered by the third parties that
          operate them. Before visiting a third party, or using a third-party
          application, whether by means of a link on the Website, directly
          through the Website or otherwise, and before providing any
          Personally-Identifying Information to any such third party, users
          should inform themselves of the privacy policies and practices (if
          any) of the third party responsible for that website or application,
          and should take those steps necessary to, in those users’ discretion,
          protect their privacy.
        </Typography>
        <br></br>
        <Typography>
          <strong>SECURITY</strong>
        </Typography>
        <br></br>
        <Typography>
          We take the security of your Personally-Identifying Information
          seriously and use reasonable electronic, personnel and physical
          measures to protect it from loss, theft, alteration or misuse.
          However, please be advised that even the best security measures cannot
          fully eliminate all risks. We cannot guarantee that only authorized
          persons will view your information. We are not responsible for
          third-party circumvention of any privacy settings or security
          measures.{' '}
        </Typography>
        <br></br>
        <Typography>
          We are dedicated to protect all information on the Website as is
          necessary. However, you are responsible for maintaining the
          confidentiality of your Personally-Identifying Information by keeping
          your password confidential. You should change your password
          immediately if you believe someone has gained unauthorized access to
          it or your account. If you lose control of your account, you should
          notify us immediately.
        </Typography>
        <br></br>
        <Typography>
          <strong>PRIVACY POLICY CHANGES</strong>
        </Typography>
        <br></br>
        <Typography>
          Company may, in its sole discretion, change this Privacy Policy from
          time to time. Any and all changes to Company’s Privacy Policy will be
          reflected on this page and the date new versions are posted will be
          stated at the top of this Privacy Policy. Unless stated otherwise, our
          current Privacy Policy applies to all information that we have about
          you and your account. Users should regularly check this page for any
          changes to this Privacy Policy. Company will always post new versions
          of the Privacy Policy on the Website. However, Company may, as
          determined in its discretion, decide to notify users of changes made
          to this Privacy Policy via email or otherwise. Accordingly, it is
          important that users always maintain and update their contact
          information.
        </Typography>

        <h3>CHILDREN</h3>

        <Typography>
          The Children's Online Privacy Protection Act ("COPPA") protects the
          online privacy of children under 13 years of age. We do not knowingly
          collect or maintain Personally-Identifying Information from anyone
          under the age of 13, unless or except as permitted by law. Any person
          who provides Personally-Identifying Information through the Website
          represents to us that he or she is 13 years of age or older. If we
          learn that Personally-Identifying Information has been collected from
          a user under 13 years of age on or through the Website, then we will
          take the appropriate steps to cause this information to be deleted. If
          you are the parent or legal guardian of a child under 13 who has
          become a member of the Website or has otherwise transferred
          Personally-Identifying Information to the Website, please contact
          Company using our contact information below to have that child's
          account terminated and information deleted.
        </Typography>
        <br></br>
        <Typography>
          <strong>CALIFORNIA PRIVACY RIGHTS</strong>
        </Typography>
        <br></br>
        <Typography>
          California Civil Code Section 1798.83, also known as the "Shine The
          Light" law, permits our users who are California residents to request
          and obtain from us, once a year and free of charge, information about
          the Personally-Identifying Information (if any) we disclosed to third
          parties for direct marketing purposes in the preceding calendar year.
          If applicable, this information would include a list of the categories
          of the Personally-Identifying Information that was shared and the
          names and addresses of all third parties with which we shared
          Personally-Identifying Information in the immediately preceding
          calendar year. If you are a California resident and would like to make
          such a request, please submit your request in writing to our privacy
          officer as listed below.{' '}
        </Typography>
        <br></br>
        <Typography>
          <strong>DO-NOT-TRACK POLICY</strong>
        </Typography>
        <br></br>
        <Typography>
          Most web browsers and some mobile operating systems include a
          Do-Not-Track (“DNT”) feature or setting you can activate to signal
          your privacy preference not to have data about your online browsing
          activities monitored and collected. The Website does currently respond
          to DNT browser signals or mechanisms.
        </Typography>
        <br></br>
        <Typography>
          <strong>CONTACT: </strong>
        </Typography>
        <br></br>
        <Typography>
          {' '}
          If you have any questions regarding our Privacy Policy, please us at:{' '}
        </Typography>

        <Typography>Email: example@gmail.com</Typography>

        {/* <Box width={1} height={1} marginY={4}>
          <img
            height={'100%'}
            width={'100%'}
            src={'https://assets.maccarianagency.com/backgrounds/img4.jpg'}
            alt="Remote working"
            loading="lazy"
            style={{
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              objectFit: 'cover',
              borderRadius: 8,
              width: '100%',
              height: '100%',
              maxHeight: 400,
            }}
          />
        </Box>
        <Typography
          variant={'h4'}
          color={'primary'}
          align={'center'}
          fontWeight={'normal'}
        >
          “So many teams struggle to make their onboarding experience anywhere
          near as good as their core product, so the results of this is poor
          retention”
        </Typography>
        <Box marginY={4}>
          <Typography variant={'h5'} gutterBottom>
            Big heading for a new topic
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
          <Box marginTop={2}>
            <ul>
              <li>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </li>
              <li>
                <Typography>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
      <Box marginY={4}>
        <ImageList
          variant="quilted"
          cols={3}
          rowHeight={isMd ? 300 : 220}
          gap={isMd ? 16 : 8}
        >
          {photos.map((item, i) => (
            <ImageListItem key={i} cols={item.cols || 2} rows={item.rows || 1}>
              <img
                height={'100%'}
                width={'100%'}
                src={item.src}
                alt="..."
                loading="lazy"
                style={{
                  objectFit: 'cover',
                  cursor: 'poiner',
                  borderRadius: 8,
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }} paddingBottom={4}>
        <Box>
          <Typography variant={'h5'} gutterBottom>
            Small heading for a smaller transition
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </Box>
      </Box>
      <Box
        component={Card}
        boxShadow={2}
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row-reverse' }}
        sx={{ backgroundImage: 'none' }}
      >
        <Box
          sx={{
            width: { xs: 1, md: '50%' },
            position: 'relative',
          }}
        >
          <Box
            component={'img'}
            height={1}
            width={1}
            src={'https://assets.maccarianagency.com/backgrounds/img1.jpg'}
            alt="..."
            loading="lazy"
            sx={{
              objectFit: 'cover',
              maxHeight: 360,
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
            }}
          />
          <Box
            component={'svg'}
            viewBox="0 0 112 690"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            sx={{
              position: 'absolute',
              bottom: 0,
              top: '-50%',
              left: 0,
              right: 0,
              color: theme.palette.background.paper,
              transform: 'scale(2)',
              height: 1,
              width: 'auto',
              transformOrigin: 'top center',
              display: { xs: 'none', md: 'block' },
            }}
          >
            <path
              d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z"
              fill="currentColor"
            />
          </Box>
        </Box>
        <CardContent
          sx={{
            position: 'relative',
            width: { xs: 1, md: '50%' },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant={'h6'} gutterBottom>
                  Download our sturtup giude
                </Typography>
                <Typography color={'text.secondary'}>
                  Small heading for a smaller transition
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Name *"
                  variant="outlined"
                  name={'name'}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email *"
                  variant="outlined"
                  name={'email'}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  size={'large'}
                  fullWidth
                  variant={'contained'}
                  type={'submit'}
                  sx={{ height: 54 }}
                >
                  Download
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }} paddingY={4}>
        <Typography color={'text.secondary'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
      </Box>
      <Box paddingY={4}>
        <Divider />
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
      >
        <Box display={'flex'} alignItems={'center'}>
          <Avatar
            sx={{ width: 50, height: 50, marginRight: 2 }}
            src={'https://assets.maccarianagency.com/avatars/img3.jpg'}
          />
          <Box>
            <Typography fontWeight={600}>Jhon Anderson</Typography>
            <Typography color={'text.secondary'}>May 19, 2021</Typography>
          </Box>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <Typography color={'text.secondary'}>Share:</Typography>
          <Box marginLeft={0.5}>
            <IconButton aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Content;
