import { AllBlogQuery, AllBlogResponse, Blog } from "@/interfaces/Blog";
import { fetchGraphQL } from "@/utils";

export async function getAllBlog() {
    const results: AllBlogResponse = (await fetchGraphQL(
        AllBlogQuery
    )) as AllBlogResponse;

    const posts: Partial<Blog>[] = [];

    results.data.allBlog.results.forEach((post: Partial<Blog>) => {
        posts.push({
            id: post.id,
            name: post.name,
            title: post.title,
            publishDate: post.publishDate,
            description: post.description,
            slug: post.slug,
            body: post.body,
            image: post.image,
            relatedArticles: post.relatedArticles,
        });
    });

    return posts;
}