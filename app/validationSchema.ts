import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().min(1, "Issue Title is required.").max(255),
  description: z.string().trim().min(1, "Issue detail Description is required"),
});
