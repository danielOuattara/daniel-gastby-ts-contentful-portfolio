import slugify from "slugify";

export function slugger(text: string) {
  return slugify(text, {
    lower: true,
    trim: true,
  });
}
