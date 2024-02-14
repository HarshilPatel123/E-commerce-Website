

export interface simplifiedProduct {
    map(arg0: (product: any) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>;
    _id: string;
    imageUrl : string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
}


export interface fullProduct {
    _id: string;
    images: any;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    price_ID: string;
}