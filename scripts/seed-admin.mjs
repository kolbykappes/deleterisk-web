/**
 * One-time script to create the admin_users table and insert the initial admin user.
 * Run with: node scripts/seed-admin.mjs
 */
import bcrypt from "bcryptjs";
import pg from "pg";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createRequire } from "module";

// Load .env manually
const require = createRequire(import.meta.url);
try {
  const dotenv = await import("dotenv");
  dotenv.config();
} catch {
  // dotenv optional
}

const __dirname = dirname(fileURLToPath(import.meta.url));

const connectionString =
  process.env.DATABASE_URL || process.env.PUBLIC_DATABASE_URL;

if (!connectionString) {
  console.error("❌  DATABASE_URL is not set. Check your .env file.");
  process.exit(1);
}

const pool = new pg.Pool({ connectionString });

async function main() {
  const migrationSql = readFileSync(
    join(__dirname, "../lib/migrations/create_admin_users.sql"),
    "utf8"
  );

  console.log("Running migration: create_admin_users...");
  await pool.query(migrationSql);
  console.log("✅  Table ready.");

  const username = "gkappes";
  const plainPassword = "G1Kap8792!";
  const saltRounds = 12;

  const existing = await pool.query(
    "SELECT id FROM admin_users WHERE username = $1",
    [username]
  );

  if (existing.rows.length > 0) {
    console.log(`⚠️  User "${username}" already exists — skipping insert.`);
    await pool.end();
    return;
  }

  const passwordHash = await bcrypt.hash(plainPassword, saltRounds);
  await pool.query(
    "INSERT INTO admin_users (username, password_hash) VALUES ($1, $2)",
    [username, passwordHash]
  );

  console.log(`✅  Admin user "${username}" created successfully.`);
  await pool.end();
}

main().catch((err) => {
  console.error("❌  Seed failed:", err);
  pool.end();
  process.exit(1);
});
