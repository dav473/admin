import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden bg-slate-50">
        <Sidebar />
        <ScrollArea className="w-full">
            <main className="flex-1 pt-16 ">{children}</main>
        </ScrollArea>
      </div>
    </>
  );
}