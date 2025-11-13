type pageType = {
    name?: string,
    path: string|null,
    isActive: boolean,
    onNavbar: boolean,
    hasNavbar: boolean
}

export const pages: pageType[] = [

    {
        name: "main",
        path: "/",
        isActive: true,
        onNavbar: true,
        hasNavbar: true
    },
    {
        name: "cart",
        path: "/cart",
        isActive: true,
        onNavbar: false,
        hasNavbar: true

    },
    {
        name: "createprofile",
        path: "/createprofile",
        isActive: true,
        onNavbar: false,
        hasNavbar: true
    },
    {
        name: "favorites",
        path: "/favorites",
        isActive: true,
        onNavbar: true,
        hasNavbar: true

    },
    {
        name: "productdetails",
        path: "/productdetails",
        isActive: true,
        onNavbar: false,
        hasNavbar: true

    },
    {
        name: "profile",
        path: "/profile",
        isActive: true,
        onNavbar: true,
        hasNavbar: true
    },
    {
        name: "categories",
        path: null,
        isActive: true,
        onNavbar: true,
        hasNavbar: true
    },
    {
        name: "auth",
        path: "/auth",
        isActive: true,
        onNavbar: false,
        hasNavbar: false
    },
    {
        name: "products",
        path: "/products",
        isActive: true,
        onNavbar: true,
        hasNavbar: true
    },
]