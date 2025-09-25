import BlogPage from "../pages/Public/BlogPage/Blog.page";
import Blog_20250601_Page from "../pages/Public/BlogPage/ListeBlogPage/Blog20250601.page";
import Blog_20250616_Page from "../pages/Public/BlogPage/ListeBlogPage/Blog20250616.page";
import Blog_20250710_Page from "../pages/Public/BlogPage/ListeBlogPage/Blog20250710.page";
import Blog_20250724_Page from "../pages/Public/BlogPage/ListeBlogPage/Blog20250724.page";
import Blog_20250917_Page from "../pages/Public/BlogPage/ListeBlogPage/Blog20250917.page";

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
        path: "2025-06-01",
        element: <Blog_20250601_Page />,
    },
    /* {ListDataRouter[4].children?.[2].path} */
    {
        path: "2025-06-16",
        element: <Blog_20250616_Page />,
    },
    /* {ListDataRouter[4].children?.[3].path} */
    {
        path: "2025-07-10",
        element: <Blog_20250710_Page />,
    },
    /* {ListDataRouter[4].children?.[4].path} */
    {
        path: "2025-07-24",
        element: <Blog_20250724_Page />,
    },
    /* {ListDataRouter[4].children?.[5].path} */
    {
        path: "2025-09-17",
        element: <Blog_20250917_Page />,
    },
]

export default blogRouter;
