import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const bucket = process.env.S3_BUCKET;
const region = process.env.S3_REGION || "us-east-1";

let _client: S3Client | null = null;

function getClient(): S3Client | null {
  if (!bucket) return null;
  if (_client) return _client;

  _client = new S3Client({
    region,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID!,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
    },
    ...(process.env.S3_ENDPOINT_URL
      ? { endpoint: process.env.S3_ENDPOINT_URL, forcePathStyle: true }
      : {}),
  });
  return _client;
}

export function isConfigured(): boolean {
  return !!bucket;
}

export async function uploadFile(
  fileBuffer: Buffer,
  key: string,
  contentType: string
): Promise<{ success: true; key: string } | { success: false; error: string }> {
  const client = getClient();
  if (!client) {
    return { success: false, error: "S3 not configured" };
  }

  try {
    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: fileBuffer,
        ContentType: contentType,
      })
    );
    return { success: true, key };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`S3 upload failed for ${key}:`, message);
    return { success: false, error: message };
  }
}
