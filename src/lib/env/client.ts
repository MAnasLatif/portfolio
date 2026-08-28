import { z } from "zod";

const clientEnvSchema = z.object({});

const parsed = clientEnvSchema.safeParse({});

if (!parsed.success) {
  console.error(
    "Invalid client environment variables",
    parsed.error.flatten().fieldErrors,
  );
  throw new Error("Invalid client environment variables");
}

export const clientEnv = Object.freeze(parsed.data);
