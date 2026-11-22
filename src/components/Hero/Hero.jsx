import { useState } from "react";
import styles from "./Hero.module.css";
import { Icon } from "../common/Icons";

export const Hero = () => {
  const [activeTab, setActiveTab] = useState("playwright");

  return (
    <section className={styles.heroSection}>
      {/* Background ambient lighting */}
      <div className={styles.glowTopLeft}></div>
      <div className={styles.glowBottomRight}></div>

      <div className={styles.container}>
        {/* Left Column: Bio & Value Prop */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.pulseDot}></span>
            <span className={styles.badgeText}>SDET - II @ Diligent</span>
          </div>

          <h1 className={styles.headline}>
            Hi, I&apos;m <span className={styles.nameHighlight}>Gaurav Jani</span>
            <br />
            <span className={styles.gradientRole}>SDET - II &amp; Software Engineer</span>
          </h1>

          <p className={styles.subheadline}>
            Specialized in architecting hybrid test automation frameworks,
            Dockerized API mocks, and high-velocity CI/CD quality pipelines across
            enterprise cloud and SaaS ecosystems.
          </p>

          <div className={styles.actionGroup}>
            <a href="#projects" className={styles.primaryBtn}>
              <span>Explore Projects</span>
              <Icon name="ArrowRight" size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/bitwisebro"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
              aria-label="Connect on LinkedIn"
            >
              <Icon name="LinkedIn" size={16} color="#38bdf8" />
              <span>Connect on LinkedIn</span>
              <Icon name="ArrowUpRight" size={13} />
            </a>
            <a
              href="https://github.com/bitwisebro"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.gitHubBtn}
              aria-label="GitHub Profile"
            >
              <Icon name="GitHub" size={18} />
              <span>GitHub</span>
            </a>
          </div>

          <div className={styles.statsStrip}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>4+</div>
              <div className={styles.statLabel}>Years Industry Exp</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>90%+</div>
              <div className={styles.statLabel}>Automation Coverage</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Tech Stacks &amp; Tools</div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Code Sandbox */}
        <div className={styles.terminalWrapper}>
          <div className={styles.terminalCard}>
            {/* Terminal Header */}
            <div className={styles.terminalHeader}>
              <div className={styles.windowDots}>
                <span className={`${styles.dot} ${styles.dotRed}`}></span>
                <span className={`${styles.dot} ${styles.dotYellow}`}></span>
                <span className={`${styles.dot} ${styles.dotGreen}`}></span>
              </div>
              <div className={styles.tabList}>
                <button
                  className={`${styles.tabBtn} ${activeTab === "playwright" ? styles.tabActive : ""}`}
                  onClick={() => setActiveTab("playwright")}
                >
                  <Icon name="Playwright" size={14} />
                  <span>checkout.spec.ts</span>
                </button>
                <button
                  className={`${styles.tabBtn} ${activeTab === "selenium" ? styles.tabActive : ""}`}
                  onClick={() => setActiveTab("selenium")}
                >
                  <Icon name="Java" size={14} />
                  <span>TestBase.java</span>
                </button>
                <button
                  className={`${styles.tabBtn} ${activeTab === "metrics" ? styles.tabActive : ""}`}
                  onClick={() => setActiveTab("metrics")}
                >
                  <Icon name="Activity" size={14} />
                  <span>telemetry.json</span>
                </button>
              </div>
            </div>

            {/* Terminal Content */}
            <div className={styles.terminalBody}>
              {activeTab === "playwright" && (
                <pre className={styles.codeBlock}>
                  <code>
                    <span className={styles.cKeyword}>import</span> &#123; test, expect &#125; <span className={styles.cKeyword}>from</span> <span className={styles.cString}>'@playwright/test'</span>;{"\n\n"}
                    <span className={styles.cComment}>{"// Automated Enterprise Workflow Validation"}</span>{"\n"}
                    test(<span className={styles.cString}>'Verify high-concurrency order placement'</span>, <span className={styles.cKeyword}>async</span> (&#123; page, request &#125;) =&gt; &#123;{"\n"}
                    {"  "}<span className={styles.cKeyword}>await</span> page.route(<span className={styles.cString}>'**/api/v2/payment'</span>, route =&gt; route.fulfill(&#123;{"\n"}
                    {"    "}status: <span className={styles.cNumber}>200</span>,{"\n"}
                    {"    "}body: JSON.stringify(&#123; transactionStatus: <span className={styles.cString}>'SUCCESS'</span> &#125;){"\n"}
                    {"  "}&#125;));{"\n\n"}
                    {"  "}<span className={styles.cKeyword}>const</span> cart = <span className={styles.cKeyword}>new</span> CartPage(page);{"\n"}
                    {"  "}<span className={styles.cKeyword}>await</span> cart.checkoutWithPayment(<span className={styles.cString}>'CREDIT_CARD'</span>);{"\n"}
                    {"  "}<span className={styles.cKeyword}>await</span> expect(cart.confirmationBanner).toBeVisible();{"\n"}
                    {"  "}<span className={styles.cKeyword}>await</span> expect(cart.confirmationBanner).toContainText(<span className={styles.cString}>'Order Confirmed'</span>);{"\n"}
                    &#125;);
                  </code>
                </pre>
              )}

              {activeTab === "selenium" && (
                <pre className={styles.codeBlock}>
                  <code>
                    <span className={styles.cKeyword}>package</span> com.bitwisebro.framework.core;{"\n\n"}
                    <span className={styles.cKeyword}>public class</span> <span className={styles.cType}>TestEngine</span> <span className={styles.cKeyword}>extends</span> <span className={styles.cType}>BaseSuite</span> &#123;{"\n"}
                    {"  "}<span className={styles.cAnnotation}>@BeforeMethod</span>{"\n"}
                    {"  "}<span className={styles.cKeyword}>public void</span> <span className={styles.cFunc}>setupDriver</span>(@Optional(<span className={styles.cString}>&quot;chrome&quot;</span>) String browser) &#123;{"\n"}
                    {"    "}DriverManager.initDriver(browser, Platform.CLOUD_GRID);{"\n"}
                    {"    "}ExtentReportManager.createTest(getClass().getSimpleName());{"\n"}
                    {"  "}&#125;{"\n\n"}
                    {"  "}<span className={styles.cAnnotation}>@Test</span>(dataProvider = <span className={styles.cString}>&quot;excelData&quot;</span>){"\n"}
                    {"  "}<span className={styles.cKeyword}>public void</span> <span className={styles.cFunc}>executeRegression</span>(Map&lt;String, String&gt; testData) &#123;{"\n"}
                    {"    "}DashboardPage dashboard = <span className={styles.cKeyword}>new</span> DashboardPage();{"\n"}
                    {"    "}dashboard.validateModuleAccess(testData.get(<span className={styles.cString}>&quot;role&quot;</span>));{"\n"}
                    {"  "}&#125;{"\n"}
                    &#125;
                  </code>
                </pre>
              )}

              {activeTab === "metrics" && (
                <pre className={styles.codeBlock}>
                  <code>
                    &#123;{"\n"}
                    {"  "}<span className={styles.cKey}>&quot;engineer&quot;</span>: <span className={styles.cString}>&quot;Gaurav Jani (bitwisebro)&quot;</span>,{"\n"}
                    {"  "}<span className={styles.cKey}>&quot;currentRole&quot;</span>: <span className={styles.cString}>&quot;SDET - II @ Diligent&quot;</span>,{"\n"}
                    {"  "}<span className={styles.cKey}>&quot;location&quot;</span>: <span className={styles.cString}>&quot;Bengaluru, India&quot;</span>,{"\n"}
                    {"  "}<span className={styles.cKey}>&quot;metrics&quot;</span>: &#123;{"\n"}
                    {"    "}<span className={styles.cKey}>&quot;frameworkType&quot;</span>: <span className={styles.cString}>&quot;Hybrid Automation + Docker Mocks&quot;</span>,{"\n"}
                    {"    "}<span className={styles.cKey}>&quot;pipelineStability&quot;</span>: <span className={styles.cString}>&quot;99.9%&quot;</span>,{"\n"}
                    {"    "}<span className={styles.cKey}>&quot;regressionCoverage&quot;</span>: <span className={styles.cString}>&quot;90%+&quot;</span>,{"\n"}
                    {"    "}<span className={styles.cKey}>&quot;ciProvider&quot;</span>: <span className={styles.cString}>&quot;GitHub Actions&quot;</span>{"\n"}
                    {"  "}&#125;,{"\n"}
                    {"  "}<span className={styles.cKey}>&quot;status&quot;</span>: <span className={styles.cString}>&quot;ALL_SYSTEMS_PASSING&quot;</span>{"\n"}
                    &#125;
                  </code>
                </pre>
              )}
            </div>

            {/* Terminal Footer status bar */}
            <div className={styles.terminalFooter}>
              <div className={styles.footerStatus}>
                <span className={styles.statusPill}>
                  <Icon name="Check" size={12} color="#10b981" />
                  <span>Build Passing</span>
                </span>
                <span className={styles.branchName}>
                  <Icon name="Git" size={12} />
                  <span>main</span>
                </span>
              </div>
              <div className={styles.langBadge}>
                {activeTab === "playwright" && "TypeScript • Playwright"}
                {activeTab === "selenium" && "Java • TestNG"}
                {activeTab === "metrics" && "JSON • Production Ready"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
