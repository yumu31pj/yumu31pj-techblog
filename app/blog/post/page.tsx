import Loader from "@/components/atoms/images/Loader/Loader";
import { Metadata } from "next";
import { Suspense } from "react";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Tech Blog",
  description: "Tech Blog || yumu31pj",
  // },
};

const BlogPostDetail = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <BlogContent />
      </Suspense>
    </>
  )
}

export default BlogPostDetail;