import BoxTheme from "@/element/landing-page/box-theme/box-theme";
import Link from "next/link";
import React from "react";

const TermsAndCondition = () => {
  return (
    <div className=" md:w-[95vw] mx-auto mb-20 mt-3 md:mt-16 max-w-[1800px] md:flex md:gap-0 lg:gap-10">
      <div className="h-fit min-w-[350px] hidden md:flex">
        <BoxTheme
          top="8px"
          left="8px"
          boxStyle={
            "flex flex-col px-4 py-5 font-primary !justify-start !items-start  border-2 border-primary-brown w-full h-full bg-[#FFF9F3] rounded-[10px] w-[95vw] mx-auto"
          }
          bgBoxStyle={
            "min-w-[200px] w-full h-full rounded-[10px]  bg-primary-brown"
          }
        >
          <div className="font-primaryMedium mb-2 text-xl md:text-2xl lg:text-3xl mr-8">
            Terms & Conditions
          </div>
          <div className="h-full overflow-auto">
            <div className="h-full">
              <p className="text-xl mb-2.5 font-primaryMedium">
                For Job Seekers
              </p>
              <ul className="text-sm font-primary ml-4 flex flex-col gap-1.5 mb-5">
                <Link href={"/terms-conditions/#Eligibility"} scroll={false}>
                  <li className="cursor-pointer">1. Eligibility</li>
                </Link>
                <Link href={"/terms-conditions/#User-Account"} scroll={false}>
                  <li className="cursor-pointer">2. User Account</li>{" "}
                </Link>
                <Link href={"/terms-conditions/#Job-Search"} scroll={false}>
                  <li className="cursor-pointer">3. Job Search</li>{" "}
                </Link>
                <Link href={"/terms-conditions/#Remote-Work"} scroll={false}>
                  <li className="cursor-pointer">4. Remote Work</li>{" "}
                </Link>
                <Link href={"/terms-conditions/#Payment"} scroll={false}>
                  <li className="cursor-pointer">5. Payment</li>{" "}
                </Link>
                <Link
                  href={"/terms-conditions/#Intellectual-Property"}
                  scroll={false}
                >
                  <li className="cursor-pointer">6. Intellectual Property</li>{" "}
                </Link>
                <Link href={"/terms-conditions/#User-Conduct"} scroll={false}>
                  <li className="cursor-pointer">7. User Conduct</li>{" "}
                </Link>
                <Link
                  href={"/terms-conditions/#Indemnification"}
                  scroll={false}
                >
                  <li className="cursor-pointer">8. Indemnification</li>{" "}
                </Link>
                <Link
                  href={"/terms-conditions/#Disclaimer-of-Warranties"}
                  scroll={false}
                >
                  <li className="cursor-pointer">
                    9. Disclaimer of Warranties
                  </li>{" "}
                </Link>
                <Link
                  href={"/terms-conditions/#Limitation-of-Liability"}
                  scroll={false}
                >
                  <li className="cursor-pointer">
                    10. Limitation of Liability
                  </li>{" "}
                </Link>
                <Link href={"/terms-conditions/#Governing-Law"} scroll={false}>
                  <li className="cursor-pointer">11. Governing Law</li>{" "}
                </Link>
                <Link
                  href={"/terms-conditions/#Changes-to-Terms-and-Conditions"}
                  scroll={false}
                >
                  <li className="cursor-pointer">
                    12. Changes to Terms and Conditions
                  </li>{" "}
                </Link>
              </ul>

              <p className="text-xl mb-2.5 font-primaryMedium">For Companies</p>
              <ul className="text-sm font-primary ml-4 flex flex-col gap-1.5">
                <Link href={"/terms-conditions/#eligibility"} scroll={false}>
                  <li className="cursor-pointer">1. Eligibility</li>
                </Link>
                <Link href={"/terms-conditions/#user-account"} scroll={false}>
                  <li className="cursor-pointer">2. User Account</li>{" "}
                </Link>
                <Link href={"/terms-conditions/#job-posting"} scroll={false}>
                  <li className="cursor-pointer">3. Job Postings</li>{" "}
                </Link>
                <Link
                  href={"/terms-conditions/#candidate-selection"}
                  scroll={false}
                >
                  <li className="cursor-pointer">4. Candidate Selection</li>{" "}
                </Link>
                <Link href={"/terms-conditions/#remote-work"} scroll={false}>
                  <li className="cursor-pointer">5. Remote Work</li>{" "}
                </Link>
                <Link href={"/terms-conditions/#payment"} scroll={false}>
                  <li className="cursor-pointer">6. Payment</li>{" "}
                </Link>
                <Link
                  href={"/terms-conditions/#intellectual-property"}
                  scroll={false}
                >
                  <li className="cursor-pointer">7. Intellectual Property</li>{" "}
                </Link>
                <Link href={"/terms-conditions/#user-conduct"} scroll={false}>
                  <li className="cursor-pointer">8. User Conduct</li>{" "}
                </Link>
                <Link
                  href={"/terms-conditions/#indemnification"}
                  scroll={false}
                >
                  <li className="cursor-pointer">9. Indemnification</li>{" "}
                </Link>
                <Link
                  href={"/terms-conditions/#disclaimer-of-warranties"}
                  scroll={false}
                >
                  <li className="cursor-pointer">
                    10. Disclaimer of Warranties
                  </li>
                </Link>
                <Link
                  href={"/terms-conditions/#limitation-of-liability"}
                  scroll={false}
                >
                  <li className="cursor-pointer">
                    11. Limitation of Liability
                  </li>
                </Link>
                <Link href={"/terms-conditions/#governing-law"} scroll={false}>
                  <li className="cursor-pointer">12. Governing Law</li>{" "}
                </Link>
                <Link
                  href={"/terms-conditions/#changes-to-terms-and-conditions"}
                  scroll={false}
                >
                  <li className="cursor-pointer">
                    12. Changes to Terms and Conditions
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </BoxTheme>
      </div>

      <div className="font-primary w-[95vw] mx-auto">
        <p className="font-primaryMedium text-4xl mb-5">
          Hyring Terms & Conditions
        </p>
        <p className="text-lg font-primaryLight mb-5">
          EFFECTIVE DATE:{" "}
          <span className="text-lg font-primaryMedium">May 1, 2023</span>
        </p>
        <p className="text-4xl font-primaryMedium mb-3">Job Seekers</p>

        <div className="mb-4">
          <p className="font-primaryMedium text-lg mb-2" id="Eligibility">
            1. Eligibility:
          </p>
          <p>
            To use our services, you must be at least 18 years old and eligible
            to work in India.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-primaryMedium text-lg mb-2" id="User-Account">
            2. User Account:
          </p>
          <p>
            To access our portal, you must create a user account. You are
            responsible for maintaining the confidentiality of your account
            information and any activities that occur under your account. You
            agree to provide accurate, current, and complete information during
            the registration process.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-primaryMedium text-lg mb-2" id="Job-Search">
            3. Job Search:
          </p>
          <p>
            Our portal allows you to search and apply for jobs posted by
            overseas companies. <strong>Hyring.com</strong> does not guarantee
            that you will be selected for an interview or hired for any job
            listed on our platform. We are not responsible for the accuracy or
            completeness of the job postings, and we do not endorse any
            particular employer.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-primaryMedium text-lg mb-2" id="Remote-Work">
            4. Remote Work:
          </p>
          <p>
            <strong>Hyring.com</strong> provides a platform for remote work with
            overseas companies. You agree to comply with all local laws and
            regulations regarding remote work. Hyring.com is not responsible for
            any disputes that may arise between you and your employer regarding
            remote work.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-primaryMedium text-lg mb-2" id="Payment">
            5. Payment:
          </p>
          <p>
            <strong>Hyring.com</strong> does not charge any fees to job seekers
            for using our services. However, we may receive a commission from
            employers for successfully placing a candidate. You agree to provide
            accurate and complete payment information when required.
          </p>
        </div>
        <div className="mb-4">
          <p
            className="font-primaryMedium text-lg mb-2"
            id="Intellectual-Property"
          >
            6. Intellectual Property:
          </p>
          <p>
            All content on <strong>Hyring.com</strong>, including text,
            graphics, logos, images, and software, is the property of{" "}
            <strong>Hyring.com</strong> and is protected by intellectual
            property laws. You may not reproduce, distribute, or modify any
            content on our platform without our written consent.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-primaryMedium text-lg mb-2" id="User-Conduct">
            7. User Conduct:
          </p>
          <p>
            You agree to use our platform for lawful purposes only. You may not
            engage in any activity that violates local, state, or federal laws,
            or that is harmful to others. You may not post or transmit any
            content that is illegal, offensive, or infringes on the intellectual
            property rights of others.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-primaryMedium text-lg mb-2" id="Indemnification">
            8. Indemnification:
          </p>
          <p>
            You agree to indemnify and hold harmless <strong>Hyring.com</strong>{" "}
            and its affiliates, officers, directors, employees, and agents from
            any claims, damages, or expenses (including attorneys’ fees) arising
            from your use of our platform or your violation of these terms and
            conditions.
          </p>
        </div>
        <div className="mb-4">
          <p
            className="font-primaryMedium text-lg mb-2"
            id="Disclaimer-of-Warranties"
          >
            9. Disclaimer of Warranties:
          </p>
          <p>
            <strong>Hyring.com</strong> provides our platform “as is” and
            without any warranties or guarantees of any kind, whether express or
            implied. We do not guarantee that our platform will be error-free or
            uninterrupted, and we are not responsible for any harm or damages
            caused by your use of our platform.
          </p>
        </div>
        <div className="mb-4">
          <p
            className="font-primaryMedium text-lg mb-2"
            id="Limitation-of-Liability"
          >
            10. Limitation of Liability:
          </p>
          <p>
            <strong>Hyring.com</strong> will not be liable for any direct,
            indirect, incidental, consequential, or punitive damages arising
            from your use of our platform or your inability to use our platform.
            Our liability will not exceed the amount paid by you, if any, to use
            our platform.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-primaryMedium text-lg mb-2" id="Governing-Law">
            11. Governing Law:
          </p>
          <p>
            These terms and conditions are governed by the laws of India,
            without regard to its conflicts of law principles. Any dispute
            arising from your use of our platform will be resolved in accordance
            with the arbitration rules of the Indian Arbitration and
            Conciliation Act, 1996.
          </p>
        </div>
        <div className="mb-4">
          <p
            className="font-primaryMedium text-lg mb-2"
            id="Changes-to-Terms-and-Conditions"
          >
            12. Changes to Terms and Conditions:
          </p>
          <p>
            <strong>Hyring.com</strong> reserves the right to modify these terms
            and conditions at any time. You will be notified of any changes via
            email or by posting a notice on our platform. Your continued use of
            our platform after the changes become effective constitutes your
            acceptance of the revised terms and conditions.
          </p>
        </div>

        <div className="font-primary">
          <p className="text-4xl font-primaryMedium mb-3">Companies</p>

          <div className="mb-4">
            <p className="font-primaryMedium text-lg mb-2" id="eligibility">
              1. Eligibility:
            </p>
            <p>
              To use our services, you must be a legally registered company in
              the country you operate from.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-primaryMedium text-lg mb-2" id="user-account">
              2. User Account:
            </p>
            <p>
              To access our portal, you must create a company account. You are
              responsible for maintaining the confidentiality of your account
              information and any activities that occur under your account. You
              agree to provide accurate, current, and complete information
              during the registration process.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-primaryMedium text-lg mb-2" id="job-posting">
              3. Job Postings:
            </p>
            <p>
              Our portal allows you to post job listings for positions in your
              company. You agree to provide accurate and complete information
              about the job listing, including job description, qualifications,
              and compensation. You are responsible for ensuring that your job
              posting complies with all local laws and regulations.
            </p>
          </div>
          <div className="mb-4">
            <p
              className="font-primaryMedium text-lg mb-2"
              id="candidate-selection"
            >
              4. Candidate Selection:
            </p>
            <p>
              <strong>Hyring.com</strong> provides a platform for you to review
              and select candidates for your job postings. You are solely
              responsible for selecting candidates and conducting any necessary
              background checks or interviews. <strong>Hyring.com</strong>
              does not guarantee the suitability or qualifications of any
              candidate.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-primaryMedium text-lg mb-2" id="remote-work">
              5. Remote Work:
            </p>
            <p>
              <strong>Hyring.com</strong> provides a platform for remote work
              with job seekers in India. You agree to comply with all local laws
              and regulations regarding remote work. <strong>Hyring.com</strong>
              is not responsible for any disputes that may arise between you and
              your remote worker regarding remote work.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-primaryMedium text-lg mb-2" id="payment">
              6. Payment:
            </p>
            <p>
              <strong>Hyring.com</strong> charges a commission for successfully
              placing a candidate. You agree to pay the commission in a timely
              manner according to the terms outlined by{" "}
              <strong>Hyring.com</strong>.
            </p>
          </div>
          <div className="mb-4">
            <p
              className="font-primaryMedium text-lg mb-2"
              id="intellectual-property"
            >
              7. Intellectual Property:
            </p>
            <p>
              All content on <strong>Hyring.com</strong>, including text,
              graphics, logos, images, and software, is the property of{" "}
              <strong>Hyring.com</strong> and is protected by intellectual
              property laws. You may not reproduce, distribute, or modify any
              content on our platform without our written consent.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-primaryMedium text-lg mb-2" id="user-conduct">
              8. User Conduct:
            </p>
            <p>
              You agree to use our platform for lawful purposes only. You may
              not engage in any activity that violates local, state, or federal
              laws, or that is harmful to others. You may not post or transmit
              any content that is illegal, offensive, or infringes on the
              intellectual property rights of others.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-primaryMedium text-lg mb-2" id="indemnification">
              9. Indemnification:
            </p>
            <p>
              You agree to indemnify and hold harmless{" "}
              <strong>Hyring.com</strong> and its affiliates, officers,
              directors, employees, and agents from any claims, damages, or
              expenses (including attorneys’ fees) arising from your use of our
              platform or your violation of these terms and conditions.
            </p>
          </div>
          <div className="mb-4">
            <p
              className="font-primaryMedium text-lg mb-2"
              id="disclaimer-of-warranties"
            >
              10. Disclaimer of Warranties:
            </p>
            <p>
              <strong>Hyring.com</strong> provides our platform “as is” and
              without any warranties or guarantees of any kind, whether express
              or implied. We do not guarantee that our platform will be
              error-free or uninterrupted, and we are not responsible for any
              harm or damages caused by your use of our platform.
            </p>
          </div>
          <div className="mb-4">
            <p
              className="font-primaryMedium text-lg mb-2"
              id="limitation-of-liability"
            >
              11. Limitation of Liability:
            </p>
            <p>
              <strong>Hyring.com</strong> will not be liable for any direct,
              indirect, incidental, consequential, or punitive damages arising
              from your use of our platform or your inability to use our
              platform. Our liability will not exceed the amount paid by you, if
              any, to use our platform.
            </p>
          </div>
          <div className="mb-4">
            <p className="font-primaryMedium text-lg mb-2" id="governing-law">
              12. Governing Law:
            </p>
            <p>
              These terms and conditions are governed by the laws of India,
              without regard to its conflicts of law principles. Any dispute
              arising from your use of our platform will be resolved in
              accordance with the arbitration rules of the Indian Arbitration
              and Conciliation Act, 1996.
            </p>
          </div>
          <div className="mb-4">
            <p
              className="font-primaryMedium text-lg mb-2"
              id="changes-to-terms-and-conditions"
            >
              13. Changes to Terms and Conditions:
            </p>
            <p>
              <strong>Hyring.com</strong> reserves the right to modify these
              terms and conditions at any time. You will be notified of any
              changes via email or by posting a notice on our platform. Your
              continued use of our platform after the changes become effective
              constitutes your acceptance of the revised terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
