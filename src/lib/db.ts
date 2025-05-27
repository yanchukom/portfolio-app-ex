import { PrismaClient } from "@prisma/client";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// If we're not in production, attach to the global object
// In production, always create a new instance to avoid Vercel caching issues
export function getPrismaClient() {
  if (process.env.NODE_ENV === "production") {
    return new PrismaClient({
      log: ["error"],
    });
  } else {
    return prisma;
  }
}
