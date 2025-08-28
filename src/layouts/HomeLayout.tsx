import { useState } from "react";
import { Nav } from "../components/Nav";
import ToolBar from "../components/Toolbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
 

  return (
    <main className="lg:flex">
      <Nav showSidebar={showSidebar} />
      
      <div className="lg:max-h-screen flex-1 lg:overflow-y-auto scroll-container">
        <ToolBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {children}
      </div>
    </main>
  );
}


