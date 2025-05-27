import { GraduationCapIcon as Graduation, Briefcase } from "lucide-react"
import { getPrismaClient } from "@/lib/db"

export const revalidate = 3600 // Revalidate every hour

async function getEducation() {
  const prisma = getPrismaClient()
  return await prisma.education.findMany({
    orderBy: { createdAt: "desc" },
  })
}

async function getExperience() {
  const prisma = getPrismaClient()
  return await prisma.experience.findMany({
    orderBy: { createdAt: "desc" },
  })
}

async function getSkills() {
  const prisma = getPrismaClient()
  return await prisma.skill.findMany()
}

export default async function ResumePage() {
  const [education, experience, skills] = await Promise.all([getEducation(), getExperience(), getSkills()])

  const workSkills = skills.filter((skill) => skill.category === "work")
  const softSkills = skills.filter((skill) => skill.category === "soft")

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10 border-b border-orange-500 pb-2 inline-block">Resume</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <div>
          <div className="flex items-center mb-6">
            <Graduation className="text-orange-500 h-6 w-6 mr-2" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg">
                <div className="text-gray-500 dark:text-gray-400 mb-1">{edu.period}</div>
                <h3 className="text-lg font-semibold">{edu.course}</h3>
                <p>{edu.institution}</p>
              </div>
            ))}

            {education.length === 0 && (
              <>
                <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg">
                  <div className="text-gray-500 dark:text-gray-400 mb-1">2020-2021</div>
                  <h3 className="text-lg font-semibold">Software Development</h3>
                  <p>Moringa School</p>
                </div>

                <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg">
                  <div className="text-gray-500 dark:text-gray-400 mb-1">2012-2016</div>
                  <h3 className="text-lg font-semibold">Disaster Management</h3>
                  <p>Masinde Muliro University</p>
                </div>
              </>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-6">
            <Briefcase className="text-orange-500 h-6 w-6 mr-2" />
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>

          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg">
                <div className="text-gray-500 dark:text-gray-400 mb-1">{exp.period}</div>
                <h3 className="text-lg font-semibold">{exp.position}</h3>
                <p>{exp.company}</p>
              </div>
            ))}

            {experience.length === 0 && (
              <>
                <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg">
                  <div className="text-gray-500 dark:text-gray-400 mb-1">2022 - Present</div>
                  <h3 className="text-lg font-semibold">Technical Mentor</h3>
                  <p>Moringa School</p>
                </div>

                <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg">
                  <div className="text-gray-500 dark:text-gray-400 mb-1">2021-2022</div>
                  <h3 className="text-lg font-semibold">Website Development</h3>
                  <p>Village 2 Nation</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-6">Work Skills</h2>
          <div className="flex flex-wrap gap-2">
            {workSkills.map((skill) => (
              <span key={skill.id} className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">
                {skill.name}
              </span>
            ))}

            {workSkills.length === 0 && (
              <>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">NEXT.js</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">React.js</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">HTML 5</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">CSS 3</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">Tailwind CSS</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">Figma</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">JavaScript</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">MongoDB</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">SQL</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">Angular</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">Android</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">Git</span>
              </>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Soft Skills</h2>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span key={skill.id} className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">
                {skill.name}
              </span>
            ))}

            {softSkills.length === 0 && (
              <>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">Time Management</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">Mentorship</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">
                  Impeccable Communication
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">Flexibility</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">Research</span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-sm">Writing</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
