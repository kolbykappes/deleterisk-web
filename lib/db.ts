import { Pool } from "pg";

const globalForPool = globalThis as unknown as { pool: Pool };

function makePool() {
  return new Pool({ connectionString: process.env.DATABASE_URL! });
}

export const pool = globalForPool.pool || makePool();

if (process.env.NODE_ENV !== "production") globalForPool.pool = pool;
