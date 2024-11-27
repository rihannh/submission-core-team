import {SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar';
import AppSidebar from '@/components/app-sidebar';
import {Outlet} from 'react-router-dom';

const LayoutDashboard = () => {
  return (
    <SidebarProvider>
      <AppSidebar></AppSidebar>
      <main className='px-4'>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default LayoutDashboard;
