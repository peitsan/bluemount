import {
    //主页
    Home,
//三加一项任务
//第二次作业
    InfoCard,
    GridLayout,
    ImgLayout,
    ImgSurround,
//第三次作业
    Notebook,
    Caculator,
    Counter,
 //第四次作业
    PromiseAll,
    Async,
    Debounce
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
            },
            {
                path:"notebook",
                element:<Notebook />
            },
            {
                path:"caculator",
                element:<Caculator />
            },
            {
                path:"counter",
                element:<Counter />
            },
            {
                path:"notebook",
                element:<Notebook />
            },
            {
                path:"caculator",
                element:<Caculator />
            },
            {
                path:"counter",
                element:<Counter />
            },
            {
                path:"promiseAll",
                element:<PromiseAll />
            },
            {
                path:"async",
                element:<Async />
            },
            {
                path:"debounce",
                element:<Debounce />
            },
        ]
    }
]
export default route