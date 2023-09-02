const menuItems = document.querySelectorAll(".top-navigation-items");
const ulItems = document.querySelectorAll(".navigation-dropdown-ul");

menuItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
        if(item.children.length > 0) {
            for(const child of item.children) {
                if(child.tagName == "UL"){
                    child.classList.remove("hidden");
                }
            }
        };
    })
})

ulItems.forEach((item) => {
    item.addEventListener("mouseout", () => {
        item.classList.add("hidden");
    })
})
