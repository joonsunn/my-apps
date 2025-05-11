import { ModeToggle } from "@/theme/ModeToggle";
import { Outlet } from "react-router";

function BaseLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 text-center">
        Header <ModeToggle />
      </header>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <footer className="p-4 text-center">Footer</footer>
    </div>
  );
}

export default BaseLayout;
