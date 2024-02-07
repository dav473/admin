
import { NavItem, User, Company } from "@/types";

  export const companies: Company[] = [
    {
      uuid: "4423f71a-448e-4e34-9f7a-d33a0a75e7d6",
      created_at: "2013-07-28T18:45:12.456Z",
      name: "CannaTech Cannabis",
      jurisdiction: ["Spain", "Italy"],
      user: ["bc2fd33c-f06c-4ee4-9680-6debd6a70f0a", "db9f005a-5d6a-45ff-b39d-1e3c8fdd791e", "80c06f7e-7d3a-4983-a7c1-9a08d15d8a89"]
    },
    {
      uuid: "ce00b0bc-9890-4183-a32d-66ff9beab5e1",
      created_at: "2018-11-02T11:34:56.789Z",
      name: "BudCorp Cannabis",
      jurisdiction: [],
      user: ["fa8f8db3-eb33-44e1-ba4b-86e69a1022c0"]
    },
    {
      uuid: "186c332b-fa48-4d10-a726-7c88c06bcfeb",
      created_at: "2015-03-20T14:22:33.987Z",
      name: "HerbSolutions Cannabis",
      jurisdiction: ["Brazil", "Mexico", "Argentina", "Colombia"],
      user: []
    },
    {
      uuid: "b8214f32-6f54-4d2a-a5d6-0de3825e468b",
      created_at: "2019-06-10T08:12:59.321Z",
      name: "GanjaGroup Cannabis",
      jurisdiction: ["Canada"],
      user: ["ec2b177b-5031-4691-a293-d63184c0d0f7"]
    },
    {
      uuid: "5d2e6351-35d2-482a-a82f-44cbff1eef2e",
      created_at: "2012-09-05T19:43:21.654Z",
      name: "CannabisCo Cannabis",
      jurisdiction: ["United States", "Australia", "New Zealand", "India"],
      user: ["2380a47d-8de7-49c8-83a2-82eaa6b51d67", "4c6b701c-59fd-4e8b-b7a3-50e0895b7c97", "7b56d2a4-1b7d-4e5b-a2c3-8772f4d971c7"]
    },
    {
      uuid: "d0bb2e7a-1e3e-4e90-a661-1a5e2f86e7ae",
      created_at: "2017-12-30T16:38:54.135Z",
      name: "THC Innovations Cannabis",
      jurisdiction: ["China", "Japan", "South Korea"],
      user: []
    },
    {
      uuid: "b6b4be71-128b-4b8b-9a26-3ff1315ad71e",
      created_at: "2014-04-18T22:09:48.888Z",
      name: "MarijuanaTech Cannabis",
      jurisdiction: ["United Kingdom"],
      user: ["91d11f32-84c4-4c5d-9767-3b8ec99ef073", "d3190e06-79c0-4621-8319-96b2b369e3d6"]
    },
    {
      uuid: "166a0b4e-daa1-4cbf-af61-b0143f28a672",
      created_at: "2023-10-08T10:56:27.444Z",
      name: "CannabisCreations Cannabis",
      jurisdiction: ["France", "Italy", "Spain", "Germany", "Netherlands"],
      user: ["e92fc6b3-24d1-4e34-b6b5-c08ff02cf90f", "6b96d5c9-85b8-4918-8df3-7cfc35b4e4b8", "4c911dd6-5887-40fb-bd59-d63afed7b6e7"]
    },
    {
      uuid: "bb9d0f7d-b8d3-47f5-9f34-579af21e33da",
      created_at: "2016-05-25T13:27:36.222Z",
      name: "PotPro Cannabis",
      jurisdiction: ["Sweden", "Denmark", "Norway"],
      user: ["dcebe6e8-46ad-4562-a383-168f8dfe94f7", "21c4f017-d97b-4d8b-ae44-5c91750989a", "f2990cd7-f78d-49e6-8e1f-71b10a3f9d0a"]
    }
  ]


  export const users: User[] = [
    {
      uuid: "d6a747d1-b9d3-43db-a376-ff0386e6a13c",
      first_name: "Candice",
      last_name: "Schiner",
      company: "GreenLeaf",
      role: "User",
      created_at: "2002-07-08T09:31:05.843Z",
      onboarded: false,
      isactive:false
    },
    {
      uuid: "4423f71a-448e-4e34-9f7a-d33a0a75e7d6",
      first_name: "John",
      last_name: "Doe",
      company: "CannaTech",
      role: "User",
      created_at: "2016-04-22T20:14:17.621Z",
      onboarded: true,
      isactive:true
    },
    {
      uuid: "ce00b0bc-9890-4183-a32d-66ff9beab5e1",
      first_name: "Alice",
      last_name: "Johnson",
      company: "BudCorp",
      role: "User",
      created_at: "2008-12-01T03:52:33.019Z",
      onboarded: true,
      isactive:true
    },
    {
      uuid: "186c332b-fa48-4d10-a726-7c88c06bcfeb",
      first_name: "David",
      last_name: "Smith",
      company: "HerbSolutions",
      role: "User",
      created_at: "2019-09-30T14:05:45.993Z",
      onboarded: false,
      isactive:true
    },
    {
      uuid: "b8214f32-6f54-4d2a-a5d6-0de3825e468b",
      first_name: "Emma",
      last_name: "Wilson",
      company: "GanjaGroup",
      role: "User",
      created_at: "2010-02-19T07:46:57.348Z",
      onboarded: true,
      isactive:true
    },
    {
      uuid: "5d2e6351-35d2-482a-a82f-44cbff1eef2e",
      first_name: "James",
      last_name: "Brown",
      company: "CannabisCo",
      role: "User",
      created_at: "2006-10-17T19:28:41.489Z",
      onboarded: false,
      isactive:true
    },
    {
      uuid: "d0bb2e7a-1e3e-4e90-a661-1a5e2f86e7ae",
      first_name: "Laura",
      last_name: "White",
      company: "THC Innovations",
      role: "User",
      created_at: "2017-05-11T16:39:59.775Z",
      onboarded: true,
      isactive:true
    },
    {
      uuid: "b6b4be71-128b-4b8b-9a26-3ff1315ad71e",
      first_name: "Michael",
      last_name: "Lee",
      company: "MarijuanaTech",
      role: "User",
      created_at: "2014-11-28T22:53:22.234Z",
      onboarded: false,
      isactive:true
    },
    {
      uuid: "166a0b4e-daa1-4cbf-af61-b0143f28a672",
      first_name: "Olivia",
      last_name: "Green",
      company: "CannabisCreations",
      role: "User",
      created_at: "2005-08-05T13:20:37.610Z",
      onboarded: true,
      isactive:true
    },
    {
      uuid: "bb9d0f7d-b8d3-47f5-9f34-579af21e33da",
      first_name: "Robert",
      last_name: "Taylor",
      company: "PotPro",
      role: "User",
      created_at: "2012-06-26T01:12:49.889Z",
      onboarded: false,
      isactive:true
    },
    {
      uuid: "bb9d0f7d-b8d3-47f5-9f34-579af21e33da",
      first_name: "Robert",
      last_name: "Taylor",
      company: "PotPro",
      role: "User",
      created_at: "2012-06-26T01:12:49.889Z",
      onboarded: false,
      isactive:true
    }
  ];
  
export const navItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: "LayoutDashboard",
      label: "Dashboard",
    },
    {
      title: "User",
      href: "/admin/users",
      icon: "User",
      label: "User",
    },
    {
      title: "Company",
      href: "/admin/companies",
      icon: "Building2",
      label: "Company",
    },
    {
      title: "Setting",
      href: "/",
      icon: "Settings",
      label: "Setting",
    },
    {
      title: "Logout",
      href: "/",
      icon: "LogOut",
      label: "Logout",
    },
  ];