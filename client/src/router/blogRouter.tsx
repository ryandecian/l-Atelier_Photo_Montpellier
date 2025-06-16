import BlogPage from "../pages/BlogPage/BlogPage";
import Blog_20250616_Page from "../pages/BlogPage/ListeBlogPage/Blog_20250616_Page";

type blogRouterType = {
    path: string;
    element: React.ReactNode;
}

const blogRouter: blogRouterType[] = [
    /* Element principale, page racine ! */
    {
        path: "",
        element: <BlogPage />,
    },
    /* Page de blog */
    /* {ListDataRouter[4].children?.[1].path} */
    {
        path: "2025/06/16",
        element: <Blog_20250616_Page />,
    },
]

export default blogRouter;