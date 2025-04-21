import React, { useEffect, useState } from "react";
import axios from "axios";

const ACCESS_KEY = "nooG2LIURqBLjQOK4hZ0y6J_2Ag7mfl3CIoGuOV5IDA";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              query: "travel",
              per_page: 12,
            },
            headers: {
              Authorization: `Client-ID ${ACCESS_KEY}`,
            },
          }
        );
        setPosts(response.data.results);
      } catch (error) {
        console.error("Error fetching Unsplash data", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F8F3] p-6">
      <h2 className="text-3xl font-bold text-[#24282B] mb-6 text-center">
        Travel Inspiration
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300"
          >
            <img
              src={post.urls.regular}
              alt={post.alt_description}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-[#393732] font-medium">
                {post.description || post.alt_description || "Untitled Adventure"}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                by {post.user.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
