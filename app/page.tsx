import Header, { Logo } from "@/components/Header";
import HeroSlideshow from "@/components/HeroSlideshow";
import Gallery from "@/components/Gallery";
import BookingForm from "@/components/BookingForm";
import Photo, { hasPhoto } from "@/components/Photo";
import { FloatingBook, Reveal } from "@/components/Enhance";
import {
  CONFIRM,
  bookMessage,
  brand,
  branchName,
  branches,
  directions,
  faqs,
  gallery,
  galleryFilters,
  heroSlides,
  nav,
  packages,
  services,
  spaces,
  steps,
  testimonials,
  waLink,
} from "@/lib/site";

const ext = { target: "_blank", rel: "noopener" } as const;

/** Wraps every [placeholder] in a highlighted <mark> so the owner can spot what to confirm. */
function T({ children }: { children: string }) {
  const parts = children.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("[") && p.endsWith("]") ? <mark key={i} className="todo">{p}</mark> : <span key={i}>{p}</span>,
      )}
    </>
  );
}

function Head({ label, title, text, id, center }: { label: string; title: React.ReactNode; text?: string; id: string; center?: boolean }) {
  return (
    <header className={`head${center ? " head--center" : ""}`}>
      <p className="label" data-reveal>{label}</p>
      <h2 className="h2" id={id} data-reveal>{title}</h2>
      {text && <p className="head__text" data-reveal>{text}</p>}
    </header>
  );
}

export default function Home() {
  const slides = heroSlides.map((s) => ({ ...s, exists: hasPhoto(s.src) }));
  const items = gallery.map((g) => ({ ...g, exists: hasPhoto(g.src) }));

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />

      <main id="main">
        {/* 2 · Hero */}
        <section className="hero" id="top" aria-labelledby="hero-title">
          <p className="hero__watermark" aria-hidden="true">clone</p>
          <div className="hero__grid">
            <div className="hero__visual">
              <HeroSlideshow slides={slides} />
            </div>
            <div className="hero__copy">
              <p className="label label--light">Photo Studio &amp; Make-up · Lagos</p>
              <h1 className="hero__title" id="hero-title">
                <span className="hero__line">Every moment,</span>
                <span className="hero__line"><em>beautifully</em></span>
                <span className="hero__line">captured.</span>
              </h1>
              <p className="hero__sub">Professional studio and outdoor photography across 3 branches in Lagos.</p>
              <div className="hero__actions">
                <a className="btn btn--accent" href="#book">Book a Shoot</a>
                <a className="btn btn--ghost-light" href="#pricing">See Prices</a>
              </div>
              <ul className="hero__branches" aria-label="Branches">
                <li>Yaba</li><li>Surulere · Leisure Mall</li><li>Surulere · Adeniran Ogunsanya</li>
              </ul>
            </div>
          </div>
          <a className="hero__scroll" href="#intro" aria-label="Scroll to introduction"><i aria-hidden="true" />Scroll</a>
        </section>

        {/* Services ticker */}
        <div className="ticker" aria-hidden="true">
          <div className="ticker__track">
            {[0, 1].map((g) => (
              <div key={g} className="ticker__group">
                {services.map((s) => <span key={s.id} className="ticker__item">{s.title}</span>)}
              </div>
            ))}
          </div>
        </div>

        {/* Clarity strip — answers the #1 question before anything else */}
        <nav className="clarity" aria-label="Know before you book">
          <div className="wrap clarity__inner">
            <p className="clarity__lead">Know before you book</p>
            <a href="#pricing"><span>01</span>Clear packages &amp; prices</a>
            <a href="#spaces"><span>02</span>Regular vs Content space</a>
            <a href="#policies"><span>03</span>Raw photos, delivery &amp; deposits</a>
          </div>
        </nav>

        {/* Manifesto — the studio in one sentence, with facts drawn from the site data */}
        <section className="manifesto" id="intro" aria-label="About the studio">
          <div className="wrap manifesto__inner">
            <p className="manifesto__text" data-reveal>
              A photo studio and make-up house in Lagos, built for the days you <em>want to remember</em>
              <span className="drop">: styled sets, flattering light and a team that makes you feel at ease in front of the camera.</span>
            </p>
            <ul className="stats">
              <li data-reveal><strong>{String(branches.length).padStart(2, "0")}</strong><span>Studios across Yaba and Surulere</span></li>
              <li data-reveal><strong>{String(spaces.length).padStart(2, "0")}</strong><span>Set styles: classic backdrops and the styled Content Space</span></li>
              <li data-reveal><strong>{String(services.length).padStart(2, "0")}</strong><span>Kinds of session, from passports to pre-weddings</span></li>
              <li data-reveal><strong>7<sup>days</sup></strong><span>Open every day of the week, including Sundays</span></li>
            </ul>
          </div>
        </section>

        {/* 3 · Services */}
        <section className="section" id="services" aria-labelledby="services-title">
          <div className="wrap svc">
            <div className="svc__aside">
              <Head label="What we do" title={<>Sessions for every <em>chapter</em> of life.</>} id="services-title" text="Indoor studio sessions and outdoor shoots, with makeup and gele tying under the same roof." />
              <figure className="svc__feature">
                <div className="svc__img" data-reveal="img"><Photo src="/images/services-feature.jpg" alt="A client on the curved sofa in the styled content set" sizes="(min-width: 1080px) 36vw, 100vw" /></div>
                <figcaption>The content set: curved sofa, arches and soft neon.</figcaption>
              </figure>
            </div>
            <ol className="svc__list">
              {services.map((s, i) => (
                <li key={s.id} data-reveal>
                  <a className="svc__row" href={waLink(`Hello Clonepictures, I'd like to book: ${s.title}.`)} {...ext}>
                    <span className="svc__num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="svc__body">
                      <span className="svc__title">{s.title}</span>
                      <span className="svc__text">{s.text}</span>
                    </span>
                    <span className="svc__cta">Book this <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Filmstrip — a slow reel of recent work */}
        <section className="reel" aria-label="Recent work">
          <div className="wrap reel__head">
            <p className="label">In the studio lately</p>
            <p>Hover to pause</p>
          </div>
          <div className="reel__track">
            {[0, 1].map((g) => (
              <div key={g} className="reel__group" aria-hidden={g === 1}>
                {items.filter((it) => it.exists).slice(0, 10).map((it) => (
                  <div key={it.src} className="reel__item" style={{ aspectRatio: String(it.ratio) }}>
                    <Photo src={it.src} alt={g === 0 ? it.alt : ""} sizes="(min-width: 1080px) 26vw, 60vw" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* 4 · Pricing */}
        <section className="section section--tint" id="pricing" aria-labelledby="pricing-title">
          <div className="wrap">
            <Head label="Packages & prices" title={<>Simple, <em>transparent</em> pricing.</>} id="pricing-title" text="Everything you get is listed below, so there are no surprises on the day." center />
            <ul className="plans">
              {packages.map((p) => (
                <li key={p.name} className={`plan${p.featured ? " plan--featured" : ""}`} data-reveal>
                  {p.featured && <p className="plan__badge">Most booked</p>}
                  <h3 className="plan__name">{p.name}</h3>
                  <p className="plan__tag">{p.tagline}</p>
                  <p className="plan__price"><T>{p.price}</T></p>
                  <dl className="plan__rows">
                    {p.rows.map((r) => (
                      <div key={r.label}>
                        <dt>{r.label}</dt>
                        <dd><T>{r.value}</T></dd>
                      </div>
                    ))}
                  </dl>
                  <a className={`btn ${p.featured ? "btn--accent" : "btn--outline"} btn--block`} href={waLink(`Hello Clonepictures, I'd like to book the ${p.name} package.`)} {...ext}>
                    Book {p.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="addons" data-reveal>
              <h3>Add-ons</h3>
              <ul>
                <li><span>Content Space upgrade</span><span className="addons__val"><T>{"₦ [price]"}</T></span></li>
                <li><span>Extra edited photo</span><span className="addons__val"><T>{"₦ [price] each"}</T></span></li>
                <li><span>Extra look / outfit</span><span className="addons__val"><T>{"₦ [price]"}</T></span></li>
                <li><span>Raw (unedited) photos</span><span className="addons__val"><T>{"₦ [price] or [included / not available]"}</T></span></li>
                <li><span>Express delivery</span><span className="addons__val"><T>{"₦ [price]"}</T></span></li>
              </ul>
              <p className="addons__note"><T>{`All prices ${CONFIRM}.`}</T></p>
            </div>
          </div>
        </section>

        {/* 5 · Studio spaces */}
        <section className="section" id="spaces" aria-labelledby="spaces-title">
          <div className="wrap">
            <Head label="Studio spaces" title={<>Choose your <em>space</em> before you book.</>} id="spaces-title" text="We have two kinds of studio set. They look different and are priced differently, so here they are side by side." />
            <div className="spaces">
              {spaces.map((s, i) => (
                <article key={s.id} className="space" data-reveal>
                  <div className="space__img" data-reveal="img">
                    <Photo src={s.image} alt={s.name} sizes="(min-width: 900px) 50vw, 100vw" />
                    <span className="space__letter">{i === 0 ? "A" : "B"}</span>
                  </div>
                  <div className="space__body">
                    <h3>{s.name}</h3>
                    <p className="space__summary">{s.summary}</p>
                    <p className="space__label">Best for</p>
                    <ul className="space__list">{s.bestFor.map((b) => <li key={b}><T>{b}</T></li>)}</ul>
                    <p className="space__price"><span>Price</span><strong><T>{s.price}</T></strong></p>
                  </div>
                </article>
              ))}
            </div>
            <p className="spaces__note" data-reveal>Not sure which to choose? Tell us your idea on WhatsApp and we&apos;ll recommend the right space. <a href={waLink("Hello Clonepictures, which studio space would suit my shoot?")} {...ext}>Ask us</a></p>
          </div>
        </section>

        {/* 6 · Gallery */}
        <section className="section section--tint" id="gallery" aria-labelledby="gallery-title">
          <div className="wrap">
            <Head label="Gallery" title={<>Recent <em>work.</em></>} id="gallery-title" text="Tap any photo to view it full screen." />
            <Gallery items={items} filters={galleryFilters} />
          </div>
        </section>

        {/* 7 · Branches */}
        <section className="section" id="branches" aria-labelledby="branches-title">
          <div className="wrap">
            <Head label="Our branches" title={<>Three studios across <em>Lagos.</em></>} id="branches-title" />
            <p className="confirm" data-reveal><T>{`Prices and policies are the same at every branch. ${CONFIRM}`}</T></p>
            <ul className="branches">
              {branches.map((b) => (
                <li key={b.id} className="branch" data-reveal>
                  <div className="branch__body">
                    <p className="branch__label">{b.label}</p>
                    <h3>{b.name}</h3>
                    <address>{b.address.map((l) => <span key={l}>{l}</span>)}</address>
                    <ul className="branch__phones">
                      {b.phones.map((p) => <li key={p.label}><span>{p.label}</span><a href={`tel:${p.e164}`}>{p.display}</a></li>)}
                    </ul>
                    <dl className="branch__hours">
                      {b.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}
                    </dl>
                    <div className="branch__actions">
                      <a className="btn btn--outline btn--sm" href={directions(b.query)} {...ext}>Get Directions</a>
                      <a className="btn btn--accent btn--sm" href={waLink(`Hello Clonepictures, I'd like to book a shoot at the ${branchName(b)} branch.`)} {...ext}>Book here</a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 8 · How booking works */}
        <section className="section section--dark" aria-labelledby="steps-title">
          <div className="wrap">
            <Head label="How booking works" title={<>Four calm <em>steps.</em></>} id="steps-title" />
            <ol className="steps">
              {steps.map(([t, d], i) => (
                <li key={t} data-reveal>
                  <span className="steps__num">0{i + 1}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 9 · Booking form */}
        <section className="section" id="book" aria-labelledby="book-title">
          <div className="wrap book">
            <div className="book__intro">
              <Head label="Book a shoot" title={<>Tell us about <em>your</em> session.</>} id="book-title" text="Fill this in and WhatsApp opens with everything written out. We'll reply to confirm availability and your deposit." />
              <ul className="book__facts" data-reveal>
                <li><span>WhatsApp</span><a href={waLink(bookMessage)} {...ext}>{brand.whatsappDisplay}</a></li>
                <li><span>Branches</span>Yaba · Surulere (Leisure Mall) · Surulere (38 Adeniran Ogunsanya)</li>
              </ul>
            </div>
            <div data-reveal><BookingForm /></div>
          </div>
        </section>

        {/* 10 · Policies / FAQ */}
        <section className="section section--tint" id="policies" aria-labelledby="faq-title">
          <div className="wrap faq">
            <Head label="Policies & FAQ" title={<>Good to know, <em>before</em> you book.</>} id="faq-title" text="Clear answers to the questions we hear most." />
            <div className="faq__list">
              {faqs.map((f, i) => (
                <details key={f.q} className="faq__item" data-reveal open={i === 0}>
                  <summary><span>{f.q}</span><i aria-hidden="true" /></summary>
                  <div className="faq__a"><p><T>{f.a}</T></p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 11 · Testimonials */}
        <section className="testi" aria-labelledby="reviews-title">
          <p className="testi__mark" aria-hidden="true">&ldquo;</p>
          <div className="wrap">
            <Head label="Kind words" title={<>Hear it from our <em>clients.</em></>} id="reviews-title" />
            <div className="testi__grid">
              {testimonials.map((t, i) => (
                <figure key={i} className="quote" data-reveal>
                  <div className="quote__stars" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, k) => <svg key={k} viewBox="0 0 24 24"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.5L12 17.3l-5.9 3.2 1.3-6.5L2.5 9.4l6.6-.8z" /></svg>)}
                  </div>
                  <blockquote><T>{t.quote}</T></blockquote>
                  <figcaption><strong><T>{t.name}</T></strong><span><T>{t.shoot}</T></span></figcaption>
                </figure>
              ))}
            </div>
            <div className="testi__foot" data-reveal>
              <a className="btn btn--outline" href={brand.reviewsUrl} {...ext}>Read all reviews on Google</a>
              <p>Real reviews from real clients across our three branches.</p>
            </div>
          </div>
        </section>

        {/* Closing call to action */}
        <section className="closing" aria-labelledby="closing-title">
          <div className="wrap closing__inner">
            <p className="label" data-reveal>Your session awaits</p>
            <h2 className="closing__title" id="closing-title" data-reveal>Let&apos;s make something <em>beautiful.</em></h2>
            <div className="closing__actions" data-reveal>
              <a className="btn btn--accent" href={waLink(bookMessage)} {...ext}>Book on WhatsApp</a>
              <a className="btn btn--outline" href="#pricing">Compare packages</a>
            </div>
          </div>
        </section>
      </main>

      {/* 12 · Footer */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer__top">
            <div className="footer__brand">
              <Logo light />
              <p>Every moment, beautifully captured.</p>
              <a className="btn btn--accent btn--sm" href={waLink(bookMessage)} {...ext}>Book on WhatsApp</a>
            </div>
            {branches.map((b) => (
              <div key={b.id} className="footer__col">
                <h3>{branchName(b)}</h3>
                <address>{b.address.map((l) => <span key={l}>{l}</span>)}</address>
                {b.phones.map((p) => <a key={p.label} href={`tel:${p.e164}`}>{p.label}: {p.display}</a>)}
              </div>
            ))}
          </div>
          <div className="footer__mid">
            <nav aria-label="Footer">{nav.map((n) => <a key={n.label} href={n.href}>{n.label}</a>)}</nav>
            <div className="footer__social">
              {/* TODO: replace with the studio's real profile links */}
              <span><T>{"Instagram [link]"}</T></span>
              <span><T>{"Facebook [link]"}</T></span>
              <span><T>{"TikTok [link]"}</T></span>
            </div>
          </div>
          <div className="footer__bottom">
            <p>© Clonepictures Photo Studio, Lagos</p>
            <a href="#top">Back to top</a>
          </div>
        </div>
        <p className="footer__sig" aria-hidden="true">clone</p>
      </footer>

      {/* 13 · Floating WhatsApp */}
      <FloatingBook />
      <Reveal />
    </>
  );
}
