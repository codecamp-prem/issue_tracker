import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Issue Title is required.").max(255),
  description: z
    .string()
    .trim()
    .min(1, "Issue detail Description is required")
    .max(65535),
});

export const patchIssueSchema = z.object({
  title: z.string().min(1, "Issue Title is required.").max(255).optional(),
  description: z
    .string()
    .trim()
    .min(1, "Issue detail Description is required")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "Assigned to UserId is required")
    .max(255)
    .optional()
    .nullable(),
});
