import { Link } from "@tanstack/react-router";
import {
  Calendar,
  Clock,
  User,
  CheckCircle2,
  Phone,
  FileText,
  ArrowRight,
  Shield,
  Sparkles,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";
import { BlogPost } from "@/lib/blogData";

export function BlogPostPage({ post }: { post: BlogPost }) {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Blog", href: "/blog" },
    { label: post.title, href: post.slug }
  ];

  // Article JSON-LD Schema
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "image": `https://steamonwheelsnc.com${post.heroImage}`,
    "datePublished": post.publishDate,
    "dateModified": post.modifiedDate,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
      "url": "https://steamonwheelsnc.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Steam On Wheels NC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://steamonwheelsnc.com/favicon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://steamonwheelsnc.com${post.slug}`
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Nav />
      <Breadcrumbs items={breadcrumbs} className="pt-24 lg:pt-28" />

      {/* Article Header */}
      <header className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-400">
              <Calendar className="h-3.5 w-3.5 text-sky-400" /> {post.publishDate}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-400">
              <Clock className="h-3.5 w-3.5 text-slate-400" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium mb-8">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3.5 pt-6 border-t border-slate-800/80">
            <div className="h-11 w-11 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold">
              DH
            </div>
            <div>
              <span className="text-sm font-bold text-white block">{post.author.name}</span>
              <span className="text-xs text-slate-400">{post.author.role}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <main className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Key Takeaways Callout Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-sky-950/20 border border-sky-500/30 mb-12 shadow-glow">
            <h2 className="text-lg font-bold text-sky-400 mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-sky-400" />
              Key Takeaways
            </h2>
            <ul className="space-y-2.5">
              {post.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Detailed Content Sections */}
          <div className="space-y-12 text-slate-300 leading-relaxed font-normal">
            {post.contentSections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  {section.paragraphs.map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}
                </div>
                {section.bulletPoints && (
                  <ul className="space-y-3 pl-2">
                    {section.bulletPoints.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-sm text-slate-300">
                        <span className="h-2 w-2 rounded-full bg-sky-400 shrink-0 mt-2" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Author E-E-A-T Box */}
          <div className="mt-16 p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="h-16 w-16 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-black text-xl shrink-0">
              DH
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 block mb-1">
                Written by Industry Expert
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{post.author.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                David Hudson is the founder and hands-on lead technician at Steam On Wheels LLC with over 15 years of exterior pressure washing and soft washing expertise across Mooresville and Lake Norman, NC.
              </p>
            </div>
          </div>

          {/* Related Services & Local Service Areas */}
          <div className="mt-16 pt-12 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-base font-bold text-white mb-4">Related Services</h3>
              <div className="space-y-2">
                {post.relatedServices.map((svc, i) => (
                  <Link
                    key={i}
                    to={svc.href}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                  >
                    <span>{svc.title}</span>
                    <ChevronRight className="h-4 w-4 text-sky-400" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-white mb-4">Service Areas Discussed</h3>
              <div className="space-y-2">
                {post.relatedCities.map((c, i) => (
                  <Link
                    key={i}
                    to={c.href}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-sky-400" /> {c.name}
                    </span>
                    <ChevronRight className="h-4 w-4 text-sky-400" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Conversion Section */}
      <section className="py-16 bg-gradient-to-br from-sky-950 via-slate-900 to-blue-950 border-t border-slate-800 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Get Your Free Exterior Cleaning Estimate Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
            Speak directly with owner David Hudson at (704) 516-9509 or request your online estimate. We serve Mooresville and the entire Lake Norman region.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:7045169509"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-400 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-glow hover:scale-105 transition-all"
            >
              <Phone className="h-4 w-4" /> Call (704) 516-9509
            </a>
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 hover:bg-slate-800 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:scale-105 transition-all"
            >
              <FileText className="h-4 w-4 text-sky-400" /> Free Estimate
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
