function toggleMobileNav() {
    let mobileNav = document.getElementById("mobile-nav");
    let firstBar = document.getElementById("first-bar");
    let secondBar = document.getElementById("second-bar");
    let thirdBar = document.getElementById("third-bar");

    if (mobileNav.style.display === "block") {
        firstBar.style.transform = "rotate(0deg) translate(0, 0)";
        secondBar.style.display = "block";
        thirdBar.style.transform = "rotate(0deg) translate(0, 0)";
        mobileNav.style.display = "none";
    }
    else {
        firstBar.style.transform = "translate(20%, 50%) rotate(45deg) translateY(25%)";
        secondBar.style.display = "none";
        thirdBar.style.transform = "translate(0, -30%) rotate(-45deg)";
        mobileNav.style.display = "block";
    }
}

function toggleNavLinks(link_number) {
    let MobileLinks = document.getElementsByClassName("mobile-nav-link");
    let SubMenus = document.getElementsByClassName("mobile_submenu");
    let Carets = document.getElementsByClassName("mobile-caret-down");
    let n = link_number;
    if (link_number === n) {
        if (SubMenus[n].style.display === 'flex') {
            MobileLinks[n].style.color = "#FFFFFF";
            MobileLinks[n].style.background = "black";
            MobileLinks[n].style.borderBottom = 'none';
            Carets[n].style.transform = "rotate(0deg)";
            Carets[n].style.fill = "#FFFFFF";
            SubMenus[n].style.display = 'none';
        }
        else {
            MobileLinks[n].style.color = "#53BDF6";
            MobileLinks[n].style.background = "#0B1420";
            MobileLinks[n].style.borderBottom = "5px solid #53BDF6";
            Carets[n].style.transform = "rotate(180deg)";
            Carets[n].style.fill = "#53BDF6";
            SubMenus[n].style.display = 'flex';
            if (n === 0) {
                SubMenus[n + 2].style.display = 'none';
                MobileLinks[n + 2].style.color = "#FFFFFF";
                MobileLinks[n + 2].style.background = "black";
                MobileLinks[n + 2].style.borderBottom = 'none';
                Carets[n + 2].style.transform = "rotate(0deg)";
                Carets[n + 2].style.fill = "#FFFFFF";
            }
            if ( (n === 0) || (n === 1) ) {
                SubMenus[n + 1].style.display = 'none';
                MobileLinks[n + 1].style.color = "#FFFFFF";
                MobileLinks[n + 1].style.background = "black";
                MobileLinks[n + 1].style.borderBottom = 'none';
                Carets[n + 1].style.transform = "rotate(0deg)";
                Carets[n + 1].style.fill = "#FFFFFF";
            }
            if ( (n === 1) || (n === 2) ) {
                SubMenus[n - 1].style.display = 'none';
                MobileLinks[n - 1].style.color = "#FFFFFF";
                MobileLinks[n - 1].style.background = "black";
                MobileLinks[n - 1].style.borderBottom = 'none';
                Carets[n - 1].style.transform = "rotate(0deg)";
                Carets[n - 1].style.fill = "#FFFFFF";
            }
            if (n === 2) {
                SubMenus[n - 2].style.display = 'none';
                MobileLinks[n - 2].style.color = "#FFFFFF";
                MobileLinks[n - 2].style.background = "black";
                MobileLinks[n - 2].style.borderBottom = 'none';
                Carets[n - 2].style.transform = "rotate(0deg)";
                Carets[n - 2].style.fill = "#FFFFFF";
            }
        }
    }
}

function resetMobileNav() {
    let MobileLinks = document.getElementsByClassName("mobile-nav-link");
    let SubMenus = document.getElementsByClassName("mobile_submenu");
    let Carets = document.getElementsByClassName("mobile-caret-down");
    let mobileNav = document.getElementById("mobile-nav");
    let firstBar = document.getElementById("first-bar");
    let secondBar = document.getElementById("second-bar");
    let thirdBar = document.getElementById("third-bar");
    for (let i = 0; i < 3; i++) {
        MobileLinks[i].style.color = "#FFFFFF";
        MobileLinks[i].style.borderBottom = 'none';
        SubMenus[i].style.display = 'none';
        Carets[i].style.transform = "rotate(0deg)";
        Carets[i].style.fill = "#FFFFFF";
    }
    mobileNav.style.display = 'none';
    firstBar.style.transform = "rotate(0deg) translate(0, 0)";
    secondBar.style.display = "block";
    thirdBar.style.transform = "rotate(0deg) translate(0, 0)";
    mobileNav.style.display = "none";
}