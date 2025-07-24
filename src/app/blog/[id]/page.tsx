"use client";
import Loading from "@/app/loading";
import { BlogType } from "@/types/BlogType";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function BlogPostPage() {
  const params = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogType>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}posts/${params.id}`;
        const res = await fetch(BASE_URL);
        if (!res.ok) {
          throw new Error("Failed to fetch post");
        }
        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.id]);

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>No post found</div>;

  return (
    <div className="relative p-6 bg-emerald-50 dark:bg-emerald-900 bg-[url('/path-to-nature-pattern.png')] bg-repeat-round">
      <div className="max-w-3xl mx-auto">
        <div className="mt-6 bg-white dark:bg-emerald-800 rounded-xl shadow-xl flex flex-col justify-between leading-normal p-6">
          <div>
            <div className="mb-6">
              {post.tags
                ?.map((tag) => tag.trim())
                .filter((tag) => tag.length > 0)
                .map((tag, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-sm text-green-500 font-medium hover:text-green-700 transition duration-300 ease-in-out mr-2"
                  >
                    #{tag}
                  </Link>
                ))}
            </div>

            <h1 className="text-green-800 dark:text-green-200 font-handwritten text-4xl font-bold mb-4">
              {post.title}
            </h1>

            <div className="py-4 text-sm font-regular text-green-700 dark:text-green-300 flex flex-row items-center">
              <Link
                href="#"
                className="flex flex-row items-center hover:text-green-500 mr-4"
              >
                <svg
                  className="text-green-500"
                  fill="currentColor"
                  height="16px"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  ></path>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                <span className="ml-1">{post.views} views</span>
              </Link>

              <Link
                href="#"
                className="flex flex-row items-center hover:text-green-500"
              >
                <svg
                  className="text-green-500"
                  fill="currentColor"
                  height="16px"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill="currentColor"
                    d="M15.4496399,8.42490555 L8.66109799,1.63636364 L1.63636364,1.63636364 L1.63636364,8.66081885 L8.42522727,15.44178 C8.57869221,15.5954158 8.78693789,15.6817418 9.00409091,15.6817418 C9.22124393,15.6817418 9.42948961,15.5954158 9.58327627,15.4414581 L15.4486339,9.57610048 C15.7651495,9.25692435 15.7649133,8.74206554 15.4496399,8.42490555 Z M16.6084423,10.7304545 L10.7406818,16.59822 C10.280287,17.0591273 9.65554997,17.3181054 9.00409091,17.3181054 C8.35263185,17.3181054 7.72789481,17.0591273 7.26815877,16.5988788 L0.239976954,9.57887876 C0.0863319284,9.4254126 0,9.21716044 0,9 L0,0.818181818 C0,0.366312477 0.366312477,0 0.818181818,0 L9,0 C9.21699531,0 9.42510306,0.0862010512 9.57854191,0.239639906 L16.6084423,7.26954545 C17.5601275,8.22691012 17.5601275,9.77308988 16.6084423,10.7304545 Z M5,6 C4.44771525,6 4,5.55228475 4,5 C4,4.44771525 4.44771525,4 5,4 C5.55228475,4 6,4.44771525 6,5 C6,5.55228475 5.55228475,6 5,6 Z"
                  ></path>
                </svg>
                <span className="ml-1">{post.reactions?.likes || 0} likes</span>
              </Link>
            </div>

            <p className="text-base leading-7 my-6 text-green-700 dark:text-green-300">
              Join us on a journey through the dense forests, where every step reveals the secrets of nature’s resilience. This blog captures the essence of an expedition filled with discovery. {post.body}
            </p>

            <div className="border-t border-green-300 dark:border-green-700 my-6"></div>

            <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 my-6">
              Exploring the Wild
            </h3>

            <p className="text-base leading-7 my-6 text-green-700 dark:text-green-300">
              Venture into the heart of the wilderness, where ancient trees whisper stories of time. This narrative explores the untouched beauty of nature, enriched by the author’s personal experiences. {post.body}
            </p>

            <blockquote className="text-lg italic leading-7 my-6 p-6 text-green-600 dark:text-green-400 font-medium border-l-4 border-green-500">
              "In every walk with nature, one receives far more than he seeks." – John Muir
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}