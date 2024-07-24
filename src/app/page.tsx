import { getAllBlog } from "@/utils/getBlog";

export default async function Home() {
  const posts = await getAllBlog();

  return (
    <main>
      <h1>Content Hub ONE - Title list</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}