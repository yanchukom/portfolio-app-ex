import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Create education entries
  await prisma.education.createMany({
    data: [
      {
        period: "2020-2021",
        course: "Software Development",
        institution: "Moringa School",
      },
      {
        period: "2012-2016",
        course: "Disaster Management",
        institution: "Masinde Muliro University",
      },
    ],
  })

  // Create experience entries
  await prisma.experience.createMany({
    data: [
      {
        period: "2022 - Present",
        position: "Technical Mentor",
        company: "Moringa School",
      },
      {
        period: "2021-2022",
        position: "Website Development",
        company: "Village 2 Nation",
      },
    ],
  })

  // Create work skills
  await prisma.skill.createMany({
    data: [
      { name: "NEXT.js", category: "work" },
      { name: "React.js", category: "work" },
      { name: "HTML 5", category: "work" },
      { name: "CSS 3", category: "work" },
      { name: "Tailwind CSS", category: "work" },
      { name: "Figma", category: "work" },
      { name: "JavaScript", category: "work" },
      { name: "MongoDB", category: "work" },
      { name: "SQL", category: "work" },
      { name: "Angular", category: "work" },
      { name: "Android", category: "work" },
      { name: "Git", category: "work" },
    ],
  })

  // Create soft skills
  await prisma.skill.createMany({
    data: [
      { name: "Time Management", category: "soft" },
      { name: "Mentorship", category: "soft" },
      { name: "Impeccable Communication", category: "soft" },
      { name: "Flexibility", category: "soft" },
      { name: "Research", category: "soft" },
      { name: "Writing", category: "soft" },
    ],
  })

  // Create projects
  await prisma.project.createMany({
    data: [
      {
        title: "Smart Bank App",
        description: "A mobile banking application with advanced features",
        imageUrl: "/placeholder.svg?height=200&width=400",
        category: "App Development",
        link: "#",
      },
      {
        title: "Blog Platform",
        description: "A modern blogging platform built with Next.js",
        imageUrl: "/placeholder.svg?height=200&width=400",
        category: "Web Development",
        link: "#",
      },
      {
        title: "Rental App",
        description: "UI/UX design for a property rental application",
        imageUrl: "/placeholder.svg?height=200&width=400",
        category: "UI/UX",
        link: "#",
      },
      {
        title: "IdeaFlow",
        description: "A web application for brainstorming and idea management",
        imageUrl: "/placeholder.svg?height=200&width=400",
        category: "Web Development",
        link: "#",
      },
      {
        title: "Tech Mentor",
        description: "A mentorship platform connecting junior and senior developers",
        imageUrl: "/placeholder.svg?height=200&width=400",
        category: "Mentorship",
        link: "#",
      },
    ],
  })

  console.log("Seed data created successfully")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
