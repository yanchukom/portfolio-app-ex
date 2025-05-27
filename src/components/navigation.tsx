"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FileText, Briefcase, Contact } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Resume",
    href: "/resume",
    icon: FileText,
  },
  {
    name: "Work",
    href: "/work",
    icon: Briefcase,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Contact,
  },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-center p-2 bg-gray-100 dark:bg-gray-800 rounded-full shadow-sm">
      <div className="flex space-x-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-20 h-20 rounded-xl transition-colors",
                isActive ? "bg-orange-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-700",
              )}
            >
              <item.icon className="h-6 w-6 mb-1" />
              <span className="text-sm">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
