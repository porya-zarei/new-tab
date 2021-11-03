import {
    fileType_compressed,
    fileType_images,
    fileType_programmings,
    fileType_sounds,
    fileType_texts,
    fileType_videos,
} from "../../../utils/file-types";

const FileIcon = ({fileName="text.txt"}) => {

    const reg = new RegExp("[.](.*)$");
    const ext = reg.exec(fileName)[1].toLowerCase();
    let result = <i className="bi-file-earmark-richtext-fill"></i>;

    if (fileType_texts.includes(ext)) {
        if (ext === "pdf") {
            result = <i className="bi-file-earmark-pdf-fill"></i>;
        } else {
            result = <i className="bi-file-earmark-text-fill"></i>;
        }
    } else if (fileType_images.includes(ext)) {
        result = <i className="bi-file-earmark-image-fill"></i>;
    } else if (fileType_videos.includes(ext)) {
        result = <i className="bi-file-earmark-play-fill"></i>;
    } else if (fileType_programmings.includes(ext)) {
        result = <i className="bi-file-earmark-code-fill"></i>;
    } else if (fileType_sounds.includes(ext)) {
        result = <i className="bi-file-earmark-music-fill"></i>;
    } else if (fileType_compressed.includes(ext)) {
        result = <i className="bi-file-earmark-zip-fill"></i>;
    }
    console.log("ext => ", ext);
    return result;
};
export default FileIcon;