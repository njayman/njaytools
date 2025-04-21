import Layout from "@njaytools/components/Layout";

export default function PrivacyPage() {
  return (
    <Layout
      title="Privacy Policy"
      description="Privacy policy for tools.njayman.com"
    >
      <div className="prose dark:prose-invert max-w-2xl mx-auto">
        <h1>Privacy Policy</h1>

        <p>
          We take your privacy seriously. This website does not require you to
          create an account or provide any personal information to use the
          tools.
        </p>

        <h2>What We Collect</h2>
        <p>
          This site does not collect or store any personally identifiable
          information. All tool usage is done locally in your browser.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We use <strong>Google AdSense</strong> to display ads. AdSense may use
          cookies or similar technologies to show personalized ads based on your
          browsing behavior. You can opt out of personalized advertising by
          visiting{" "}
          <b>
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`Google's Ads Settings`}
            </a>
          </b>
          .
        </p>

        <h2>Analytics</h2>
        <p>
          We do not use Google Analytics or any user tracking software at this
          time.
        </p>

        <h2>Open Source</h2>
        <p>
          This project is open source and available on{" "}
          <b>
            <a
              href="https://github.com/njayman/njaytools"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </b>
          . Feel free to inspect or contribute to the code.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions, feel free to reach out via{" "}
          <b>
            <a href="mailto:najishmahmud@gmail.com">email</a>
          </b>
          .
        </p>
      </div>
    </Layout>
  );
}
