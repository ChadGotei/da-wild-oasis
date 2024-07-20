import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
    return (
        <div className="grid grid-cols-[1fr] md:grid-cols-[16rem_1fr] h-full md:gap-12">
            <SideNavigation />
            <div className="px-2 py-1">
                {children}
            </div>
        </div>
    );
}
