import { getCollection, type CollectionEntry } from "astro:content";

export type Course = CollectionEntry<"courses">;

/** Only published entries are ever rendered publicly. */
export async function getPublishedCourses(): Promise<Course[]> {
  const all = await getCollection("courses");
  return all
    .filter((c) => c.data.status === "published")
    .sort((a, b) => a.data.order - b.data.order || a.id.localeCompare(b.id));
}

/** Featured subset, same ordering. */
export function getFeaturedCourses(courses: Course[]): Course[] {
  return courses.filter((c) => c.data.featured);
}

/** Unique subjects in first-seen order, for filter chips. */
export function getSubjects(courses: Course[]): string[] {
  const seen = new Set<string>();
  for (const c of courses) seen.add(c.data.subject);
  return [...seen];
}

/** URL slug for a course: collection id without the file extension. */
export function slugOf(id: string): string {
  return id.replace(/\.(md|mdx)$/, "");
}

/** Public detail-page path for a course slug. */
export function coursePath(slug: string): string {
  return `/courses/${slug}/`;
}
