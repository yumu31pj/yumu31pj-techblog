import Loader from "@/_libs/components/atoms/images/Loader/Loader";
import { Metadata } from "next";
import { Suspense } from "react";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Tech Blog posted",
  description: "Post Detail",
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