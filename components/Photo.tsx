import fs from "node:fs";
import path from "node:path";
import PhotoView, { type PhotoProps } from "./PhotoView";

/** Checked at build time: drop a photo into public/images, rebuild, and it replaces the placeholder. */
export function hasPhoto(src: string) {
  return fs.existsSync(path.join(process.cwd(), "public", src));
}

export default function Photo(props: Omit<PhotoProps, "exists">) {
  return <PhotoView {...props} exists={hasPhoto(props.src)} />;
}
