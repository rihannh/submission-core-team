import {SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar';
import AppSidebar from '@/components/app-sidebar';
import {Outlet} from 'react-router-dom';
import {Toaster} from '@/components/ui/toaster';

const LayoutDashboard = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='w-full'>
        <SidebarTrigger className='pl-5' />
        <div className='px-4 py-8 mx-auto max-w-[800px]'>
          <Outlet />
        </div>
      </main>
      <Toaster />
    </SidebarProvider>
  );
};

export default LayoutDashboard;
