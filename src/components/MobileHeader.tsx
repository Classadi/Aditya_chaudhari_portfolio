
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const MobileHeader = () => {
  return (
    <div className="lg:hidden sticky top-0 z-50 w-full border-b bg-white py-3 px-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img 
          src="/lovable-uploads/6ed48d5b-0d38-4ba5-a06c-4d88d146528c.png"
          alt="Aditya Chaudhari" 
          className="h-8 w-8 rounded-full object-cover"
        />
        <h1 className="font-semibold">Aditya Chaudhari</h1>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-80">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileHeader;
