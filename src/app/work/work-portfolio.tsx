"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type Project = {
  id: string
  title: string
  description: string
  imageUrl: string
  category: string
  link: string | null
}

const categories = ["All", "App Development", "Web Development", "UI/UX", "Mentorship", "Design"]

export function WorkPortfolio({ initialProjects }: { initialProjects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? initialProjects
      : initialProjects.filter((project) => project.category === activeCategory)

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-colors",
              activeCategory === category
                ? "bg-orange-500 text-white"
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden rounded-lg">
            <Image
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
              <div className="text-xs text-orange-300 mb-1">{project.category}</div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
          </div>
        ))}

        {filteredProjects.length === 0 && (
          <div className="col-span-2 text-center py-10">
            <p className="text-gray-500 dark:text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </>
  )
}
