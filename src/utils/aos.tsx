'use client'
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos"
import 'aos/dist/aos.css';

const Aoscompo = ({children}:any) => {
    const pathname = usePathname();

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });

        const onLoad = () => {
          // Ensure AOS recalculates positions after images/fonts load
          AOS.refreshHard();
        };
        window.addEventListener('load', onLoad);
        return () => window.removeEventListener('load', onLoad);
    }, []);

    useEffect(() => {
        // Refresh AOS on route/path changes so newly visible elements animate instead of staying hidden
        const raf = requestAnimationFrame(() => {
          AOS.refreshHard();
        });

        const onHashChange = () => {
          // Allow scroll to settle before refreshing
          setTimeout(() => AOS.refreshHard(), 100);
        };
        const onResize = () => AOS.refresh();
        window.addEventListener('hashchange', onHashChange);
        window.addEventListener('resize', onResize);
        window.addEventListener('orientationchange', onResize);

        return () => {
          cancelAnimationFrame(raf);
          window.removeEventListener('hashchange', onHashChange);
          window.removeEventListener('resize', onResize);
          window.removeEventListener('orientationchange', onResize);
        };
      }, [pathname]);
  return (
    <div>
      {children}
    </div>
  )
}

export default Aoscompo
