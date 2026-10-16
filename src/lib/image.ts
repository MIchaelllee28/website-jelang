const basePath = process.env.BASE_PATH ?? "";

export function imagePath(path: string) {
  return `${basePath}${path}`;
}
