import { Pool } from "pg";

const globalForPool = globalThis as unknown as { pool: Pool };

function makePool() {
  const connectionString = process.env.DATABASE_URL || process.env.PUBLIC_DATABASE_URL;
  if (!connectionString) throw new Error("DATABASE_URL or PUBLIC_DATABASE_URL must be set");
  return new Pool({ connectionString });
}

export const pool = globalForPool.pool || makePool();

if (process.env.NODE_ENV !== "production") globalForPool.pool = pool;
