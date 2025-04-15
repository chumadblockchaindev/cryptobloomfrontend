import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useAuth } from '@/context/AuthContext';
import { Navigate, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const { isAuthenticated, isLoading } = useAuth()

  if(isLoading){
    return <>Loading...</>
  }

  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b">
              <div className="flex items-center gap-2 px-3">
                <SidebarTrigger />
                <Separator orientation="vertical" className="mr-2 h-4" />
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4">
            <div>
              {isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />}
            </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
    </div>
  )
}

export default DashboardLayout