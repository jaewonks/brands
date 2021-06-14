const brandList = [
    { href: "/product/list.html?cate_no=117", brand: "Celine" },
    { href: "/product/list.html?cate_no=118", brand: "YSL" },
    { href: "/product/list.html?cate_no=119", brand: "Burberry" },
    { href: "javascript:void(0)", brand: "Balenciaga"},
    { href: "/product/list.html?cate_no=121", brand: "Valentino" },
    { href: "/product/list.html?cate_no=120", brand: "Gucci" },
    { href: "javascript:void(0)", brand: "Chloé" },
    { href: "javascript:void(0)", brand: "Dior"},
    { href: "javascript:void(0)", brand: "Loro Piana"},
    { href: "javascript:void(0)", brand: "Loewe" },
    { href: "javascript:void(0)", brand: "Roger Vivier" },
    { href: "/product/list.html?cate_no=123", brand: "Louis Vuitton" },
    { href: "javascript:void(0)", brand: "Manolo blanik"},
    { href: "javascript:void(0)", brand: "Marni"},
    { href: "javascript:void(0)", brand: "Maxmara"},
    { href: "javascript:void(0)", brand: "Mulberry"},
    { href: "javascript:void(0)", brand: "Maison Margiela"},
    { href: "javascript:void(0)", brand: "Monclair"},
    { href: "javascript:void(0)", brand: "MiuMiu"},
    { href: "javascript:void(0)", brand: "Valentino"},
    { href: "/product/list.html?cate_no=136", brand: "Vivienne Westwood"},
    { href: "javascript:void(0)", brand: "Chanel"},
    { href: "javascript:void(0)", brand: "Acne"},
    { href: "javascript:void(0)", brand: "Hermes"},
    { href: "javascript:void(0)", brand: "Jill Sander"},
    { href: "javascript:void(0)", brand: "Tods"},
    { href: "javascript:void(0)", brand: "Tom Brown"},
    { href: "javascript:void(0)", brand: "Ferragamo"},
    { href: "javascript:void(0)", brand: "Fendi"},
    { href: "javascript:void(0)", brand: "Prada"},
    { href: "javascript:void(0)", brand: "Nike"},
    { href: "javascript:void(0)", brand: "Le Mare"},
    { href: "javascript:void(0)", brand: "Maison Kitsune"},
    { href: "javascript:void(0)", brand: "Belluti"},
    { href: "javascript:void(0)", brand: "option"},
    { href: "javascript:void(0)", brand: "Isabella Marang"},
];

document.addEventListener("DOMContentLoaded", function() { 
   brandList.map((brand) => {
        for (let key in brand) {
            if (brand.hasOwnProperty(key)) {
                let values = brand[key];
                const list = document.querySelector('.brandlist a');
                console.log(list);
                //list.href = ''; 배열의 첫번째 요소
                list.innerHTML = values;
            }
        }
    });
});