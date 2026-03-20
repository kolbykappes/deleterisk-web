-- CreateTable
CREATE TABLE "info_submissions" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "company" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "business_card_s3_key" TEXT,
    "business_card_filename" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "info_submissions_pkey" PRIMARY KEY ("id")
);
