"use client";
import { BlogType } from "@/types/BlogType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { use } from "react";

export default function ArticleGrid({ blogs }: { blogs: Promise<BlogType[]> }) {
  const allBlogs = use(blogs);

  return (
    <div className="bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5 max-w-6xl mx-auto">
      {allBlogs.map((blog) => (
        <Link
          key={blog.id}
          href={`/article/${blog.id}`}
          className="block hover:shadow-lg transition-shadow duration-200"
        >
          {/* User Info */}
          <div className="flex items-center justify-between p-2 card-border">
            <div className="flex items-center space-x-2">
              <Image
                className="w-7 h-7 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=80&auto=format&fit=crop"
                alt="Author Avatar"
                width={20}
                height={20}
                unoptimized
                onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")}
              />
              <span className="text-xs font-medium text-dark-800">
                dev_author
              </span>
            </div>
            <button
              aria-label="More options"
              className="text-dark-800 hover:text-dark-500"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4zM4 10a2 2 0 11-4 0 2 2 0 014 0zM16 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </button>
          </div>

          {/* Caption */}
          <div className="p-3">
            <h5 className="font-medium hover:underline line-clamp-1 text-dark-800">
              {blog.title}
            </h5>
            <p className="text-xs line-clamp-2 text-dark-600">
              {blog.body} #tech #javascript #design
            </p>
          </div>

          {/* Article Image */}
          <div className="w-full overflow-hidden">
            <Image
              className="w-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqD8SmKVSQN-p4D28bdmvQ3-Zx0X53sA6anQ&s"
              alt="Article Content"
              width={300}
              height={200}
              unoptimized
              onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center p-3">
            <div className="flex space-x-3">
              <button
                aria-label="Upvote article"
                className="text-dark-800 hover:text-dark-400"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  ></path>
                </svg>
              </button>
              <button
                aria-label="Comment on article"
                className="text-dark-800 hover:text-dark-400"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v2l-3-3H9a2 2 0 01-2-2V8a2 2 0 012-2h6a2 2 0 012 2z"
                  ></path>
                </svg>
              </button>
              <button
                aria-label="Share article"
                className="text-dark-800 hover:text-dark-400"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m-4 6H4m0 0l4 4m-4-4l4-4"
                  ></path>
                </svg>
              </button>
            </div>
            <button
              aria-label="Bookmark article"
              className="text-dark-800 hover:text-dark-400"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v14l-5-2.5L7 19V5z"
                ></path>
              </svg>
            </button>
          </div>

          {/* Upvotes Count */}
          <div className="px-3 pb-2">
            <p className="text-xs font-medium text-dark-800">
              {blog.reactions.likes} upvotes
            </p>
          </div>

          {/* View Replies */}
          <Link
            href="#"
            className="text-xs text-dark-500 hover:underline px-3 pb-2"
          >
            View all {blog.views} replies
          </Link>

          {/* Add Reply */}
          <div className="px-3 pb-3 border-t card-border mt-2 pt-2">
            <div className="flex items-center space-x-2">
              <Image
                className="w-6 h-6 rounded-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3oCemHqj_CQgy0niKNnr5Gm-IepgaKVYDA&s"
                alt="Your Avatar"
                width={20}
                height={20}
                unoptimized
                onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")}
              />
              <p className="text-xs text-dark-500 flex-grow">Add a reply...</p>
              <button className="text-xs font-medium text-blue-600 hover:text-blue-800 opacity-50 cursor-not-allowed">
                Submit
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
