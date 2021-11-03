export const fileType_sounds = ["mp3", "ogg", "wav"];
export const fileType_compressed = ["7z", "rar", "zip", "pkg", "rpm", "deb"];
export const fileType_videos = ["mp4", "mkv", "wmv"];
export const fileType_images = [
    "jpeg",
    "jpg",
    "png",
    "bmp",
    "svg",
    "gif",
    "ico",
    "webp",
];
export const fileType_programmings = [
    "cs",
    "js",
    "py",
    "html",
    "css",
    "java",
    "php",
    "sh",
    "cpp",
];
export const fileType_texts = ["pdf", "doc", "docx", "ppt", "pptx", "txt", "tex"];
export const fileType_allTypes = [
    ...fileType_sounds,
    ...fileType_compressed,
    ...fileType_videos,
    ...fileType_images,
    ...fileType_programmings,
    ...fileType_texts,
];