const data = {
    home: {
        icon: "🏠",
        iconName: "home",
        image: "/home/icon/goMo.png",
        name: "Trang chủ",
        path: "/home",
        status: "done",
    },
    goMo: {
        icon: "🔔",
        iconName: "bell",
        image: "/home/icon/goMo.png",
        name: "Gõ Mõ",
        path: "/goMo",
        status: "done",
    },
    thapNhang: {
        icon: "🕯️",
        iconName: "star",
        image: "/home/icon/thapNhang.png",
        name: "Thắp Nhang",
        path: "/thapNhang",
        status: "done",
    },
    phongDang: {
        icon: "🏮",
        iconName: "lightbulb",
        image: "/home/icon/phongDang.png",
        name: "Phóng Đăng",
        path: "/phongDang",
        status: "process",
    },
    hoTamSu: {
        icon: "🏺",
        iconName: "trophy",
        image: "/home/icon/hoTamSu.png",
        name: "Hồ Tâm Sự",
        path: "/hoTamSu",
        status: "process",
    },
    huyenHoc: {
        icon: "🔮",
        iconName: "sparkles",
        image: "/home/icon/huyenHoc.png",
        name: "Huyền Học",
        path: "/huyenHoc",
        status: "process",
    },
    linhVat: {
        icon: "🐉",
        iconName: "prime",
        image: "/home/icon/linhVat.png",
        name: "Linh Vật",
        path: "/linhVat",
        status: "process",
    },
    shop: {
        icon: "🏪",
        iconName: "shop",
        image: "/home/icon/store.png",
        name: "Cửa hàng",
        path: "/shop",
        status: "done",
    }
}

export const menuList = [
    {
        path: data.home.path,
        icon: data.home.icon,
        iconName: 'pi pi-' + data.home.iconName,
        name: data.home.name,
        status: data.home.status,
        active: false,
    },
    {
        path: data.goMo.path,
        icon: data.goMo.icon,
        iconName: 'pi pi-' + data.goMo.iconName,
        name: data.goMo.name,
        status: data.goMo.status,
        active: false,
    },
    {
        path: data.thapNhang.path,
        icon: data.thapNhang.icon,
        iconName: 'pi pi-' + data.thapNhang.iconName,
        name: data.thapNhang.name,
        status: data.thapNhang.status,
        active: false,
    },
    {
        path: data.phongDang.path,
        icon: data.phongDang.icon,
        iconName: 'pi pi-' + data.phongDang.iconName,
        name: data.phongDang.name,
        status: data.phongDang.status,
        active: false,
    },
    {
        path: data.hoTamSu.path,
        icon: data.hoTamSu.icon,
        iconName: 'pi pi-' + data.hoTamSu.iconName,
        name: data.hoTamSu.name,
        status: data.hoTamSu.status,
        active: false,
    },
    {
        path: data.huyenHoc.path,
        icon: data.huyenHoc.icon,
        iconName: 'pi pi-' + data.huyenHoc.iconName,
        name: data.huyenHoc.name,
        status: data.huyenHoc.status,
        active: false,
    },
    {
        path: data.shop.path,
        icon: data.shop.icon,
        iconName: 'pi pi-' + data.shop.iconName,
        name: data.shop.name,
        status: data.shop.status,
        active: false,
    },
];


export const homeList = {
    goMo: {
        path: data.goMo.path,
        icon: data.goMo.icon,
        name: data.goMo.name,
        status: data.goMo.status,
        active: false,
        image: data.goMo.image
    },
    thapNhang: {
        path: data.thapNhang.path,
        icon: data.thapNhang.icon,
        name: data.thapNhang.name,
        status: data.thapNhang.status,
        active: false,
        image: data.thapNhang.image
    },
    phongDang: {
        path: data.phongDang.path,
        icon: data.phongDang.icon,
        name: data.phongDang.name,
        status: data.phongDang.status,
        active: false,
        image: data.phongDang.image
    },
    hoTamSu: {
        path: data.hoTamSu.path,
        icon: data.hoTamSu.icon,
        name: data.hoTamSu.name,
        status: data.hoTamSu.status,
        active: false,
        image: data.hoTamSu.image
    },
    huyenHoc: {
        path: data.huyenHoc.path,
        icon: data.huyenHoc.icon,
        name: data.huyenHoc.name,
        status: data.huyenHoc.status,
        active: false,
        image: data.huyenHoc.image
    },
    shop: {
        path: data.shop.path,
        icon: data.shop.icon,
        name: data.shop.name,
        status: data.shop.status,
        active: false,
        image: data.shop.image
    },
};