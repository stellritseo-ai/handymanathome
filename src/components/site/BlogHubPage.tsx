import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Phone,
  FileText,
  ChevronRight,
  Tag,
} from "lucide-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Breadcrumbs } from "./Breadcrumbs";
import { blogPosts } from "@/lib/blogData";

export function BlogHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const breadcrumbs = [{ label: "Blog & Guides", href: "/blog" }];
  const posts = Object.values(blogPosts);

  const categories = ["All", "Residential Maintenance", "Technical Guide", "Roof Care", "Driveway Care", "Commercial Property"];

  const filteredPosts = selectedCategory === "All"
    ? posts
    : posts.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white">
      <Nav />
      <Breadcrumbs items={breadcrumbs} className="pt-24 lg:pt-28" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6">
              <BookOpen className="h-3.5 w-3.5 text-sky-400" />
              Expert Cleaning Guides &amp; Insights
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Exterior Cleaning &amp; Pressure Washing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                Knowledge Center
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed mb-8">
              Expert advice, technical guides, and local North Carolina exterior maintenance tips from 15+ year industry veteran David Hudson. Learn how to protect your home and commercial property.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-sky-500 text-white shadow-glow"
                      : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-slate-900/50 border-t border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group relative rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_30px_rgba(14,165,233,0.12)] hover:-translate-y-1"
              >
                <div>
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-slate-950">
                    <img
                      src={post.heroImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <span className="absolute top-3 left-3 bg-sky-500/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-sky-400" /> {post.publishDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-slate-400" /> {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors leading-snug mb-3">
                    {post.title}
                  </h2>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-6 font-medium">
                    {post.excerpt}
                  </p>
                </div>

                <Link
                  to={post.slug}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-800 text-xs font-bold text-sky-400 group-hover:text-white uppercase tracking-wider"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-16 bg-gradient-to-r from-sky-900/40 via-slate-900 to-blue-900/30 border-t border-slate-800 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Need Expert Help with Your Exterior Cleaning?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact David Hudson directly for personalized recommendations and a free on-site property evaluation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:7045169509"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-400 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-glow hover:scale-105 transition-all"
            >
              <Phone className="h-4 w-4" /> Call (704) 516-9509
            </a>
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 hover:bg-slate-800 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:scale-105 transition-all"
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
