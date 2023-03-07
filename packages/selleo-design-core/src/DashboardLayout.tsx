import { h } from "preact";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function DashboardLayout() {
  return (
    <div class="layout">
      <Header />
      <Sidebar />
    </div>
  );
}
