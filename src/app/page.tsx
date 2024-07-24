import { fetchGraphQL } from "@/utils";
import { Blog, AllBlogResponse, AllBlogQuery } from "@/interfaces/Blog";

export default async function Home() {
  const results: AllBlogResponse = (await fetchGraphQL(
    AllBlogQuery
  )) as AllBlogResponse;

  const posts: Partial<Blog>[] = [];

  results.data.allBlog.results.forEach((post: Partial<Blog>) => {
    posts.push({
      id: post.id,
      name: post.name,
      publishDate: post.publishDate,
      slug: post.slug,
      title: post.title,
      description: post.description,
    });
  });

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