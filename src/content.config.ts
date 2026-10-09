import { defineCollection, z } from "astro:content";

// Single source of truth for the course catalogue.
// Adding a course = creating ONE file in src/content/courses/.
// See docs/ADDING-COURSES.md. Invalid entries fail the build with
// a file-specific error; only `status: "published"` entries render.

const urlField = (field: string) =>
  z
    .string()
    .url(`«${field}» باید یک نشانی اینترنتی معتبر باشد (مثل https://…)`)
    .refine((url) => url.startsWith("https://"), {
      message: `«${field}» باید با https:// شروع شود`,
    });

const courses = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      // Required
      title: z
        .string()
        .min(3, "«title» باید حداقل ۳ نویسه باشد")
        .max(80, "«title» باید حداکثر ۸۰ نویسه باشد"),
      description: z
        .string()
        .min(20, "«description» باید حداقل ۲۰ نویسه باشد")
        .max(220, "«description» باید حداکثر ۲۲۰ نویسه باشد"),
      subject: z
        .string()
        .min(2, "«subject» (دسته‌بندی) الزامی است")
        .max(40, "«subject» باید حداکثر ۴۰ نویسه باشد"),
      website: urlField("website"),
      status: z.enum(["draft", "published"], {
        message: "«status» باید یکی از draft یا published باشد",
      }),

      // Optional
      github: urlField("github").optional(),
      cover: image().optional(),
      coverAlt: z.string().max(140).optional(),
      tags: z.array(z.string().min(1).max(30)).max(8).default([]),
      featured: z.boolean().default(false),
      // Only figures you can verify (e.g. counted lessons on the live site).
      // Never invent counts, percentages, or completion claims.
      stats: z
        .array(
          z.object({
            value: z.string().min(1).max(20),
            label: z.string().min(1).max(40),
          }),
        )
        .max(4)
        .optional(),
      order: z.number().default(0),
    }),
});

export const collections = { courses };
