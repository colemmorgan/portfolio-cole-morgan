import { Moon, PanelRightClose, PanelRightOpen, Sun } from "lucide-react";
import useTheme from "../hooks/useTheme";

export default function ToolBar({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: (state: boolean) => void;
}) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="hidden lg:block bg-background-secondary border-background-tertiary sticky top-0 z-40 h-14 w-full items-center border-b p-2">
      <div className="flex h-full items-center">
        <button
          className="text-foreground-secondary hover:bg-background-tertiary cursor-pointer rounded-sm p-2 transition-colors"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {showSidebar ? (
            <PanelRightOpen size={20} />
          ) : (
            <PanelRightClose size={20} />
          )}
        </button>
        <button
          onClick={toggleTheme}
          className="text-foreground-secondary hover:bg-background-tertiary cursor-pointer rounded-sm p-2 transition-colors"
        >
          {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </div>
  );
}
