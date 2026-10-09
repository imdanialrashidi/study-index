// Canonical creator identity and links. Do not add social accounts
// that the owner has not confirmed (see docs/DESIGN.md owner direction).
export const CREATOR_NAME = "دانیال رشیدی";
export const CREATOR_HANDLE = "@imdanialrashidi";
export const TELEGRAM_URL = "https://t.me/imdanialrashidi";
export const GITHUB_PAGES_URL = "https://imdanialrashidi.github.io";
export const PERSONAL_SITE_URL = "https://danialrashidi.ir";
export const SITE_URL = "https://study.danialrashidi.ir";
export const SITE_NAME = "مرکز مطالعه دانیال رشیدی";
export const SITE_DESCRIPTION =
  "وب‌سایت‌های آموزشی تعاملی ساخته دانیال رشیدی؛ برای ساده‌تر شدن یادگیری درس‌های سخت.";

const FA_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

/** Latin digits → Persian digits for prose and numerals. */
export function toFa(input: number | string): string {
  return String(input).replace(/[0-9]/g, (d) => FA_DIGITS[Number(d)]);
}
