import React from "react";

type PostCardProps = {
  title: string;
  body: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <div className="p-4 bg-white shadow rounded hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{body}</p>
    </div>
  );
};

export default PostCard;
