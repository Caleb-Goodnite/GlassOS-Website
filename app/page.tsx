import Image from "next/image";
import { GlassPane } from "@/app/components/glass-pane";
import { SiteHeader } from "@/app/components/site-header";
import { ISOS, ISSUES_URL, RELEASE_URL, REPO_URL, VERSION } from "@/app/release";

const DIFFERENT = [
  {
    title: "Glass Lens shows where your computer goes",
    body: "Rings split the processor and memory into your apps, the desktop, the system and the kernel. Every number comes from the kernel's own accounting.",
  },
  {
    title: "You can see what's watching",
    body: "An icon appears in the top bar only while something uses the camera (green), the microphone (orange) or shares the screen (blue). Point at it to see which app.",
  },
  {
    title: "Updates wait for you",
    body: "Nothing downloads in the background. Settings > Software Update lists Debian's security fixes, new kernels and GlassOS's own changes, and installs them when you click Update Now. GlassOS's updates are signed.",
  },
  {
    title: "Apps say what they can reach",
    body: "The App Store installs apps from Flathub and describes each app's access in everyday words, like \"All your files\". The few permissions that break the sandbox are marked in amber.",
  },
  {
    title: "Your own sounds",
    body: "A sound pack is a folder of sounds for startup, login, notifications and devices. Swap the folder and the whole system sounds different.",
  },
  {
    title: "Keeps the system you already have",
    body: "The installer can put GlassOS next to Windows or another Linux, in free space or a partition you pick. A menu at startup lets you choose.",
  },
  {
    title: "Debian 13 underneath",
    body: "The kernel, drivers and security fixes are Debian's, so GlassOS runs on the hardware Debian 13 supports.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="hero" id="top">
        <Image className="hero-wallpaper" src="/prism.jpg" alt="" fill priority fetchPriority="high" sizes="100vw" />
        <SiteHeader />
        <div className="hero-inner">
          <GlassPane>
            <h1>A Linux desktop made of glass.</h1>
            <p className="pane-lead">
              GlassOS is Debian 13 with a desktop where every window, menu and bar is frosted glass. One
              slider sets how clear it is. Try it on this pane.
            </p>
            <div className="pane-actions">
              <a className="button button-primary" href="#download">
                Download GlassOS {VERSION}
              </a>
              <a className="button button-quiet" href={REPO_URL}>
                Read the source
              </a>
            </div>
          </GlassPane>
        </div>
      </div>

      <main id="main">
        <section className="desktop" id="desktop" aria-labelledby="desktop-title">
          <div className="section-head">
            <h2 id="desktop-title">The real desktop, not a mockup.</h2>
            <p>
              These are screenshots of GlassOS {VERSION} running in a virtual machine. Stack windows and each
              layer frosts the view a little more, the way sheets of glass do.
            </p>
          </div>
          <figure className="shot shot-main">
            <Image
              src="/shots/desktop.jpg"
              alt="The GlassOS desktop: the App Store and the Calculator, two glass windows layered over the Tide wallpaper, with the top bar above and the dock below."
              width={1920}
              height={1080}
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </figure>
          <div className="shot-pair">
            <figure className="shot">
              <Image
                src="/shots/settings.jpg"
                alt="Settings, Appearance page, with the Glass slider between Clear and Frosted."
                width={1920}
                height={1080}
                sizes="(max-width: 900px) 100vw, 600px"
              />
              <figcaption>Settings &gt; Appearance: the Glass slider the pane above copies.</figcaption>
            </figure>
            <figure className="shot shot-offset">
              <Image
                src="/shots/lens.jpg"
                alt="Glass Lens showing processor and memory rings split into apps, desktop, system and kernel."
                width={1920}
                height={1080}
                sizes="(max-width: 900px) 100vw, 600px"
              />
              <figcaption>Glass Lens: where the processor and memory are going right now.</figcaption>
            </figure>
          </div>
        </section>

        <section className="different" id="different" aria-labelledby="different-title">
          <h2 id="different-title">What&apos;s different about it</h2>
          <dl className="facts">
            {DIFFERENT.map((d) => (
              <div key={d.title}>
                <dt>{d.title}</dt>
                <dd>{d.body}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="design" id="design" aria-labelledby="design-title">
          <div className="design-intro">
            <h2 id="design-title">Where the look comes from</h2>
            <p>
              GlassOS takes its glass from Apple&apos;s Liquid Glass and its habits from the Mac, then changes what
              a Linux desktop needs. It isn&apos;t made by or affiliated with Apple.
            </p>
          </div>
          <div className="design-cols">
            <div>
              <h3>Borrowed</h3>
              <ul>
                <li>
                  Light catches the top edge of every pane and leaves through the bottom, with a darker band
                  just inside that separates the glass from what&apos;s behind it.
                </li>
                <li>One Glass slider from Clear to Frosted, instead of separate blur and tint settings.</li>
                <li>Icons made of tinted, see-through glass on a rounded square, lit from above.</li>
                <li>
                  Mac habits: click to focus, red, yellow and green window buttons, and full screen that hides the
                  top bar and the dock.
                </li>
              </ul>
            </div>
            <div>
              <h3>Changed for GlassOS</h3>
              <ul>
                <li>Dark glass by default, so white text stays readable over a bright web page.</li>
                <li>
                  Ribbon wallpapers (Prism, Tide and Ember), because glass only looks like glass when colour and
                  edges sit behind it.
                </li>
                <li>No processor or memory numbers in the top bar. Glass Lens shows them when you ask.</li>
                <li>
                  Plain words everywhere: the system says what it does, in a way you can check, and buttons say
                  what they do.
                </li>
              </ul>
            </div>
          </div>
          <ul className="wallpapers" aria-label="The three GlassOS wallpapers">
            {["Prism", "Tide", "Ember"].map((w) => (
              <li key={w}>
                <Image
                  src={`/wallpapers/${w.toLowerCase()}.jpg`}
                  alt={`The ${w} wallpaper`}
                  width={960}
                  height={540}
                  sizes="(max-width: 860px) 33vw, 380px"
                />
                <span>{w}</span>
              </li>
            ))}
          </ul>
          <p className="design-credit">
            Built on <a href="https://www.debian.org/">Debian 13</a> and the{" "}
            <a href="https://hypr.land/">Hyprland</a> compositor. Layout and wording are checked against the{" "}
            <a href="https://github.com/miqdadbadjuber/anti-slop">anti-slop design rules</a>.
          </p>
        </section>

        <section className="download" id="download" aria-labelledby="download-title">
          <h2 id="download-title">Download GlassOS {VERSION}</h2>
          <p className="download-lead">
            Free, and the source is on GitHub. Pick the version for your computer, write it to a USB stick, and
            start from it. You can try GlassOS from the stick before installing anything.
          </p>
          <div className="isos">
            {ISOS.map((iso, i) => (
              <div className={i === 0 ? "iso iso-primary" : "iso"} key={iso.arch}>
                <h3>
                  {iso.name} <span>{iso.arch}</span>
                </h3>
                <p>{iso.forWhat}</p>
                <a className={i === 0 ? "button button-primary" : "button button-quiet"} href={iso.url}>
                  Download for {iso.name} ({iso.size})
                </a>
                <a className="iso-check" href={iso.sha256Url}>
                  SHA-256 checksum
                </a>
              </div>
            ))}
          </div>

          <div className="install">
            <div>
              <h3>Installing</h3>
              <ol>
                <li>Write the ISO to a USB stick of 4 GB or more with balenaEtcher, Rufus or dd.</li>
                <li>Turn off Secure Boot in your computer&apos;s firmware settings. GlassOS isn&apos;t signed for it yet.</li>
                <li>Start from the stick. Choose Try GlassOS to look around, or Install GlassOS.</li>
                <li>
                  Pick a disk, then erase it or keep what&apos;s on it. The installer shows exactly what it will do
                  before changing anything.
                </li>
              </ol>
            </div>
            <div>
              <h3>Next to Windows</h3>
              <p>
                Make room first: in Windows, open Disk Management, right-click (C:) and choose Shrink Volume.
                GlassOS needs 12 GB, and 30 GB or more leaves room for your files. If Windows uses BitLocker,
                have its recovery key ready.
              </p>
              <h3>Already running GlassOS?</h3>
              <p>
                Open Settings &gt; Software Update. New versions arrive there, so you don&apos;t need a new USB
                stick.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          GlassOS {VERSION}. <a href={RELEASE_URL}>Release notes</a> · <a href={REPO_URL}>Source code</a> ·{" "}
          <a href={ISSUES_URL}>Report a problem</a>
        </p>
        <p className="footer-note">A GlassOS forum is coming. Until then, questions and bug reports go on GitHub.</p>
      </footer>
    </>
  );
}
