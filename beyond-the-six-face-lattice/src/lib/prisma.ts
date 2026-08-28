// MOCKED Prisma Client for AI Studio Ephemeral Environment
let prisma: any;

try {
  const { PrismaClient } = require("@prisma/client");
  prisma = new PrismaClient();
} catch {
  console.warn("[AI Studio] Database not connected — using mock proxy");
  const noOp = {
    findMany: async () => [],
    findFirst: async () => null,
    findUnique: async () => null,
    create: async (d: any) => d?.data ?? {},
    update: async (d: any) => d?.data ?? {},
    delete: async () => ({}),
    count: async () => 0,
  };
  prisma = new Proxy({}, { get: () => noOp });
}

export { prisma };
export default prisma;
