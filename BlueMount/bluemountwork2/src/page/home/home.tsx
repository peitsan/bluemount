import React from "react";
import type { MenuProps } from "antd";
import { PieChartOutlined } from "@ant-design/icons";
import "./home.css";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

type MenuToRoute = {
    [propName: string]: string;
};

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

export function MenuComponents() {
    const navigate = useNavigate();
    const getMenu = () => {

        const map = [
              getItem("第二次作业",
                "1",
                <PieChartOutlined/>,
                [
                    getItem("信息卡片", "sub_1_1"),
                    getItem("网格布局", "sub_1_2"),
                    getItem("图片布局", "sub_1_3"),
                    getItem("3D环绕照片墙", "sub_1_4"),
                ]),
             getItem("第三次作业",
                "2",
                <PieChartOutlined/>,
                [
                    getItem("少女粉记事本", "sub_2_1"),
                    getItem("可爱の计算器", "sub_2_2"),
                    getItem("开学倒计时", "sub_2_3"),
                ]),
            getItem("第四次作业",
                "3",
                <PieChartOutlined/>,
                [
                    getItem("promise.all方法", "sub_3_1"),
                    getItem("promise异步封装", "sub_3_2"),
                    getItem("输入框防抖高阶函数", "sub_3_3"),
                ]),
            getItem("第五次作业",
                "3",
                <PieChartOutlined/>,
                [
                    getItem("基于MongoDB的备忘录", "sub_4_1"),
                    ]),
        ];
        return map;
    };

    const tmp:MenuItem[] = getMenu();

    // 菜单标签的key值映射到路由
    const menuToRoute: MenuToRoute = {
        //第二周作业
        sub_1_1: "/home/infoCard",
        sub_1_2: "/home/gridLayout",
        sub_1_3: "/home/imgLayout",
        sub_1_4: "/home/imgSurround",
        //第三周作业
        sub_2_1: "/home/notebook",
        sub_2_2: "/home/caculator",
        sub_2_3: "/home/counter",
        //第四周作业
        sub_3_1: "/home/promiseAll",
        sub_3_2: "/home/async",
        sub_3_3: "/home/debounce",
        //第五周作业
        sub_4_1: "/home/reminder",
    };

    // 菜单标签点击事件
    const onClick: MenuProps["onClick"] = (e) => {
        const { key } = e;
        const path = menuToRoute[key];
        navigate(path);
    };

    return (
        <Menu
            theme="light"
            defaultOpenKeys={["1"]}
            defaultSelectedKeys={["sub_1_1"]}
            mode="inline"
            items={tmp}
            className="menu-wrapper"
            onClick={onClick}
        />
    );
}
