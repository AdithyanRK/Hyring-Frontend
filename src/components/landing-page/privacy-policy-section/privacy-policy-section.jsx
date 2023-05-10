import BoxTheme from "@/element/landing-page/box-theme/box-theme";
import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="hidden md:w-[95vw] mx-auto mb-20 mt-3 md:mt-16 max-w-[1800px] md:flex gap-10">
      <div className="h-fit min-w-[350px] flex">
        <BoxTheme
          top="8px"
          left="8px"
          boxStyle={
            "flex flex-col px-4 py-5 font-primary !justify-start !items-start  border-2 border-primary-brown w-full h-full bg-[#FFF9F3] rounded-[10px] w-full mx-auto"
          }
          bgBoxStyle={
            "min-w-[200px] w-full h-full rounded-[10px]  bg-primary-brown"
          }
          className="w-full"
        >
          <div className="font-primaryMedium mb-2 text-xl md:text-2xl mr-8">
            Privacy Policy
          </div>
          <div className="h-full overflow-auto">
            <div className="h-full">
              <ul className="text-sm font-primary ml-4 flex flex-col gap-1.5 mb-5">
                <Link
                  href={"/privacy-policy/#information-we-collect"}
                  scroll={false}
                >
                  <li className="cursor-pointer">1. Information We Collect</li>
                </Link>
                <Link
                  href={"/privacy-policy/#use-of-information"}
                  scroll={false}
                >
                  <li className="cursor-pointer">2. Use of Information</li>{" "}
                </Link>
                <Link
                  href={"/privacy-policy/#sharing-of-information"}
                  scroll={false}
                >
                  <li className="cursor-pointer">3. Sharing of Information</li>{" "}
                </Link>
                <Link
                  href={"/privacy-policy/#security-of-information"}
                  scroll={false}
                >
                  <li className="cursor-pointer">4. Security of Information</li>{" "}
                </Link>
                <Link href={"/privacy-policy/#cookie-tracking"} scroll={false}>
                  <li className="cursor-pointer">5. Cookies and Tracking</li>{" "}
                </Link>
                <Link href={"/privacy-policy/#children-privacy"} scroll={false}>
                  <li className="cursor-pointer">6. Children’s Privacy</li>{" "}
                </Link>
                <Link
                  href={"/privacy-policy/#changes-privacy-policy"}
                  scroll={false}
                >
                  <li className="cursor-pointer">
                    7. Changes to Privacy Policy
                  </li>{" "}
                </Link>
              </ul>

              <p className="text-xl mb-2.5 font-primaryMedium">Cookie Policy</p>
              <ul className="text-sm font-primary ml-4 flex flex-col gap-1.5">
                <Link href={"/privacy-policy/#eligibility"} scroll={false}>
                  <li className="cursor-pointer">1. What are Cookies?</li>
                </Link>
                <Link href={"/privacy-policy/#user-account"} scroll={false}>
                  <li className="cursor-pointer">2. Types of Cookies We Use</li>{" "}
                </Link>
                <Link href={"/privacy-policy/#job-posting"} scroll={false}>
                  <li className="cursor-pointer">
                    3. Changes to Cookie Policy
                  </li>{" "}
                </Link>
              </ul>
            </div>
          </div>
        </BoxTheme>
      </div>

      <div className="font-primary">
        <p className="font-primaryMedium text-4xl mb-5">
          Hyring Privacy Policy
        </p>
        <p className="text-lg font-primaryLight mb-5">
          EFFECTIVE DATE:{" "}
          <span className="text-lg font-primaryMedium">May 1, 2023</span>
        </p>

        <p className="font-primary text-lg mb-3">
          <strong>Hyring.com</strong> is committed to protecting the privacy and
          personal information of our users. This privacy policy explains how we
          collect, use, and protect your personal information when you use our
          website and services.
        </p>

        <div className="mb-4">
          <p
            className="font-primaryMedium text-lg mb-2"
            id="information-we-collect"
          >
            1. Information We Collect:
          </p>
          <p>
            We collect information when you create an account on our platform,
            search and apply for jobs, communicate with us or other users, and
            make payments. The information we collect includes your name, email
            address, phone number, job preferences, and payment information. We
            may also collect information about your device, location, and usage
            of our platform.
          </p>
        </div>
        <div className="mb-4">
          <p
            className="font-primaryMedium text-lg mb-2"
            id="use-of-information"
          >
            2. Use of Information:
          </p>
          <p>
            We use the information we collect to provide our services to you,
            including job search and placement, payment processing, and customer
            support. We may also use your information to improve our platform,
            personalize your experience, and communicate with you about our
            services and promotions.
          </p>
        </div>
        <div className="mb-4">
          <p
            className="font-primaryMedium text-lg mb-2"
            id="sharing-of-information"
          >
            3. Sharing of Information:
          </p>
          <p>
            We may share your personal information with third-party service
            providers who assist us in providing our services to you, including
            payment processors and marketing partners. We may also share your
            information with employers who have posted job listings on our
            platform. We do not sell your personal information to third parties.
          </p>
        </div>
        <div className="mb-4">
          <p
            className="font-primaryMedium text-lg mb-2"
            id="security-of-information"
          >
            4. Security of Information:
          </p>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, or misuse. We use
            industry-standard encryption and secure data storage to protect your
            information. However, no method of transmission over the internet or
            electronic storage is completely secure, and we cannot guarantee the
            absolute security of your information.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-primaryMedium text-lg mb-2" id="cookie-tracking">
            5. Cookies and Tracking:
          </p>
          <p>
            We use cookies and similar tracking technologies to improve your
            experience on our platform and to collect information about your
            usage of our website. You may choose to disable cookies in your
            browser settings, but this may affect your ability to use our
            platform.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-primaryMedium text-lg mb-2" id="children-privacy">
            6. Children’s Privacy:
          </p>
          <p>
            Our platform is not intended for use by children under the age of
            18. We do not knowingly collect personal information from children,
            and if we become aware that we have collected personal information
            from a child, we will delete it as soon as possible.
          </p>
        </div>
        <div className="mb-4">
          <p
            className="font-primaryMedium text-lg mb-2"
            id="changes-privacy-policy"
          >
            7. Changes to Privacy Policy:
          </p>
          <p>
            We reserve the right to modify this privacy policy at any time. If
            we make significant changes to the policy, we will notify you by
            email or by posting a notice on our platform. Your continued use of
            our platform after the changes become effective constitutes your
            acceptance of the revised privacy policy.
          </p>
        </div>

        <div className="font-primary">
          <p className="text-4xl font-primaryMedium mb-3">Cookie Policy</p>

          <div className="mb-4">
            <p className="font-primaryMedium text-lg mb-2" id="eligibility">
              1. What are Cookies?
            </p>
            <p>
              Cookies are small data files that are placed on your device when
              you visit our website. They allow us to recognize your device and
              remember your preferences, such as your login information and
              language settings.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-primaryMedium text-lg mb-2" id="user-account">
              2. Types of Cookies We Use:
            </p>
            <p className="mb-2">
              We use both session cookies and persistent cookies on our website.
              Session cookies are temporary cookies that are erased when you
              close your browser. Persistent cookies remain on your device for a
              set period of time or until you delete them.
            </p>
            <p className="mb-2">
              We use the following types of cookies on our website:
            </p>
            <div>
              <p className="mb-2">
                <strong>Essential Cookies:</strong> These cookies are necessary
                for the website to function properly, and they cannot be turned
                off in our system.
              </p>
              <p className="mb-2">
                <strong>Functional Cookies:</strong> These cookies allow us to
                remember your preferences and customize your experience on our
                website.
              </p>
              <p className="mb-2">
                <strong>Analytical Cookies:</strong> These cookies help us
                analyze how you use our website and improve its performance.
              </p>
              <p className="mb-2">
                <strong>Marketing Cookies:</strong> These cookies are used to
                deliver relevant advertisements to you based on your interests.
              </p>
              <p className="mb-2">
                <strong>Third-Party Cookies:</strong> We may use third-party
                cookies on our website for analytical and marketing purposes.
                These cookies are placed by third-party service providers, such
                as Google Analytics and AdWords. We do not have control over
                these cookies and their use is governed by the privacy policies
                of the third-party providers.
              </p>
              <p className="mb-2">
                <strong>Managing Cookies:</strong> You can control the use of
                cookies on our website by adjusting your browser settings. You
                can choose to block all cookies or only certain types of
                cookies. However, please note that blocking cookies may affect
                your ability to use some features of our website.
              </p>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-primaryMedium text-lg mb-2" id="job-posting">
              3. Changes to Cookie Policy:
            </p>
            <p>
              We reserve the right to modify this cookie policy at any time. If
              we make significant changes to the policy, we will notify you by
              email or by posting a notice on our website.
            </p>
          </div>

          <div className="mb-4">
            If you have any questions or concerns about our cookie policy,
            please contact us at{" "}
            <Link href="mailto:support@hyring.com" className="text-blue-500">
              support@hyring.com.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
