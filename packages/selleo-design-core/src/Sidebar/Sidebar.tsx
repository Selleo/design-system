import { h } from "preact";
import {
  DashboardIcon,
  UsersIcon,
  BookingDeskIcon,
  BookingRoomIcon,
  PropertiesIcon,
  SelleoLogo,
} from "../icons";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  return (
    <aside class="w-fit h-full static">
      <div class="p-3 overflow-y-auto bg-white dark:bg-black relative h-full shadow-100">
        <div class="mb-6">
          <SelleoLogo classes="text-black dark:text-white" />
        </div>
        <ul class="p-0">
          <SidebarItem icon={DashboardIcon} label="Dashboard" active />
          <SidebarItem icon={UsersIcon} label="Users" />
          <SidebarItem icon={PropertiesIcon} label="Properties" />
          <SidebarItem icon={BookingRoomIcon} label="Booking Room" />
          <SidebarItem icon={BookingDeskIcon} label="Booking Desk" />
        </ul>
      </div>
    </aside>
  );
}
