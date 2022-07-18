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
        ];
        return map;
    };

    const tmp:MenuItem[] = getMenu();

    // 菜单标签的key值映射到路由
    const menuToRoute: MenuToRoute = {
        sub_1_1: "/home/infoCard",
        sub_1_2: "/home/gridLayout",
        sub_1_3: "/home/imgLayout",
        sub_1_4: "/home/imgSurround",
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
