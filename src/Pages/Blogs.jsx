import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Blogs() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [expandedPostId, setExpandedPostId] = useState(null);

  useEffect(() => {
    fetch("/blogPost.json")
      .then((res) => res.json())
      .then((data) => setBlogPosts(data))
      .catch((err) => toast.error(err));
  }, []);

  const togglePost = (id) => {
    setExpandedPostId(expandedPostId === id ? null : id);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Lost & Found Blog</h1>
      <div className="space-y-6">
        {blogPosts.map((post) => {
          const isExpanded = expandedPostId === post?.id;
          return (
            <div
              key={post?.id}
              className="border rounded-lg p-5 shadow hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold mb-2">{post?.title}</h2>
              <p className="text-gray-500 text-sm mb-4">
                {post?.date} • By {post?.author}
              </p>
              <p className="mb-4">
                {isExpanded
                  ? post?.content
                  : post?.content.slice(0, 250) + "..."}
              </p>
              <button
                onClick={() => togglePost(post?.id)}
                className="text-blue-500 hover:underline"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
