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
    function target(arg) {
        arg.map((b) => {
            let href = b.href;
            let brand = b.brand
            const list = document.createElement('a');
            list.href = href;
            list.innerHTML =  brand;
            const ulTag = document.querySelector('.brandlist ul');
            const liTag = document.createElement('li');
            ulTag.appendChild(liTag);
            liTag.appendChild(list);
        });
    }

    target(brandList);
    
    Object.filter = function(mainObject, filterFunction){
        return Object.keys(mainObject)
                .filter( function(ObjectKey){
                  return filterFunction(mainObject[ObjectKey])
                } )
                .reduce( function (result, ObjectKey){
                  result[ObjectKey] = mainObject[ObjectKey];
                  return result;
                }, []);
    }
   
    const alphabet = document.querySelectorAll('.alphabet ul li');
  
    Array.from(alphabet).map((a) => a.addEventListener('click', () => {
        let allLis = document.querySelectorAll('.brandlist li');
        Array.from(allLis).map((li) => li.remove());
        let targetSubjects = Object.filter(brandList, (b) => {
            if(a.innerHTML === 'ALL') {
                return brandList;
            }
            let str = b.brand;
            let first_char = str.charAt(0);
            return first_char === a.innerHTML;
        });
        target(targetSubjects);
    }));
 });
  
