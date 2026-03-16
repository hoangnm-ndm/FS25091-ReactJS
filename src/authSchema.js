import z from "zod";

export const registerAuthSchema = z.object({
  email: z.string().email(),
  fullname: z.string().min(6),
  password: z.string().min(6),
});

export const loginAuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
