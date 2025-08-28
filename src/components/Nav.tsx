import DesktopNav from "./ui/DesktopNav";
import MobileNav from "./ui/MobileNav";

type NavProps = {
  showSidebar: boolean;
};

export function Nav({ showSidebar }: NavProps) {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopNav showSidebar={showSidebar} />
      </div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </>
  );
}
