import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from '@/components/ui/sidebar';
import {NavLink} from 'react-router-dom';
import {Users, Calendar1} from 'lucide-react';

const sidebarItem = [
  {
    title: 'Dashboard',
    menus: [
      {label: 'Anggota', url: '/anggota', icon: Users},
      {label: 'Acara', url: '/acara', icon: Calendar1},
    ],
  },
];

const AppSidebar: React.FC = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className='text-2xl font-bold'>App</h1>
      </SidebarHeader>
      <SidebarContent>
        {sidebarItem.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>
              <h1>{item.title}</h1>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              {item.menus.map((menu) => (
                <SidebarMenu key={menu.label}>
                  <SidebarMenuItem>
                    <SidebarMenuButton size={'lg'} asChild>
                      <NavLink to={menu.url}>
                        <menu.icon size={32} />
                        <span>{menu.label}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
