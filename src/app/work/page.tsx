import { getPrismaClient } from "@/lib/db";
import { WorkPortfolio } from "./work-portfolio";

export const revalidate = 3600; // Revalidate every hour

async function getProjects() {
  const prisma = getPrismaClient();
  return await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 border-b border-orange-500 pb-2 inline-block">
        Portfolio
      </h1>
      <WorkPortfolio initialProjects={projects} />
    </div>
  );
}
