// src/lib/fixAssetPath.ts
export function fixAssetPath(path: string) {
    if (process.env.NODE_ENV === "production") {
      return `/portfolio${path}`;
    }
    return path;
  }
  