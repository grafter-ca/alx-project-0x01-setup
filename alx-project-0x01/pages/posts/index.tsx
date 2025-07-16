import React from "react";
import PostCard from "../../components/common/PostCard";

const dummyPosts = [
  { id: 1, title: "Post One", body: "This is the first post." },
  { id: 2, title: "Post Two", body: "This is the second post." },
];

const PostsPage: React.FC = () => {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyPosts.map((post) => (
          <PostCard key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </main>
  );
};

export default PostsPage;
