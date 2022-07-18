import {
    //主页
        Home,
//三加一项任务
        InfoCard,
        GridLayout,
        ImgLayout,
        ImgSurround,
} from "../page/index";
import { Navigate } from "react-router-dom"
const route = [
    //重定向到首页
    {
        path:"/",
        element: <Navigate to="/home" />,
    },
    //超链接到四项任务
    {
        path:"/home",
        element: <Home />,
        children:[
            {
                path:"infoCard",
                element:<InfoCard />
            },
            {
                path:"gridLayout",
                element:<GridLayout />
            },
            {
                path:"imgLayout",
                element:<ImgLayout />
            },
            {
                path:"imgSurround",
                element:<ImgSurround />
            }
        ]
    }
]
export default route