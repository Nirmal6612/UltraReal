import { Outlet, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import Navbar from "./home/Navbar";
import Footer from "./home/Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
    const contactRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const scrollToContact = () => {
        const footer = document.getElementById("footer");
        if (footer) {
            footer.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            contactRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const hideFooterRoutes = [
        "/scanner",
        "/product",
        "/manufacturer",
        "/supplier",
        "/retailer",
        "/profile",
        "/add-product",
        "/update-product",
        "/update-product-details",
        "/admin",
        "/add-account",
        "/manage-account",
        "/authentic-product",
        "/fake-product",
        "/Otp"
    ];

    const showFooter = !hideFooterRoutes.includes(location.pathname);

    return (
        <main className="App">
            <Navbar onContactClick={scrollToContact} />
            <Outlet />
            {showFooter && (
                <>
                    <Footer ref={contactRef} />
                    <ScrollToTop />
                </>
            )}
        </main>
    );
};

export default Layout;


