import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "dashboard",
    },
    {
      title: "Deposit",
      url: "deposit",
    },
    {
      title: "Invest",
      url: "invest",
    },
    {
      title: "Withdraw",
      url: "withdraw",
    },
    {
      title: "Transfer Funds",
      url: "transfer-funds",
    },
    {
      title: "History",
      url: "#",
      items: [
        {
          title: "Deposit History",
          url: "deposit-history",
        },
        {
          title: "Earnings History",
          url: "earning-history",
        },
        {
          title: "Withdrawal History",
          url: "withdraw-history",
        },
        {
          title: "Investment History",
          url: "invest-history",
        },
      ],
    },
    {
      title: "Referral",
      url: "referral",
    },
    {
      title: "Settings",
      url: "#",
      items: [
        {
          title: "Profile",
          url: "profile",
        },
        {
          title: "Logout",
          url: "logout",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div>
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <Link to="/" className="font-medium">Cryptobloom</Link>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
