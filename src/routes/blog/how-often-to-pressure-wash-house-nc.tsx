import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/site/BlogPostPage";
import { blogPosts } from "@/lib/blogData";

const post = blogPosts["how-often-to-pressure-wash-house-nc"];

export const Route = createFileRoute("/blog/how-often-to-pressure-wash-house-nc")({
  head: () => ({
    meta: [
      { title: post.metaTitle },
      { name: "description", content: post.metaDescription },
      { property: "og:title", content: post.metaTitle },
      { property: "og:description", content: post.metaDescription },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `https://steamonwheelsnc.com${post.slug}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `https://steamonwheelsnc.com${post.slug}` }],
  }),
  component: BlogPostRoute,
});

function BlogPostRoute() {
  return <BlogPostPage post={post} />;
}
