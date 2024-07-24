import { Media, MediaQuery } from "@/interfaces/Media"

export interface Blog {
  id: string;
  name: string;
  title: string;
  publishDate: string;
  description: string;
  slug: string;
  body: any;
  image: {
    total: number;
    results: Media[];
  };
  relatedArticles: {
    total: number;
    results: Blog[];
  };
}

export interface BlogResponse {
  data: {
    blog: Partial<Blog>;
  };
}

export interface AllBlogResponse {
  data: {
    allBlog: {
      total: number;
      results: Partial<Blog>[];
    };
  };
}

const BlogFieldsQuery =
  `
    id
    name
    publishDate
    slug
    title
    description
    body
`;

const BlogQuery =
  BlogFieldsQuery + `
  image {
      results {
            ` +
  MediaQuery +
  `
      }
      total
  }
  relatedArticles {
      results {
            ` +
  BlogFieldsQuery +
  `
          image {
              total
              results {
                    ` +
  MediaQuery +
  `
              }
          }
      }
  }
`;

export const AllBlogQuery = `query AllBlog {
    allBlog(orderBy: PUBLISHDATE_DESC) {
        total
        results {
  ` +
  BlogQuery +
  `
        }
    }
}
`