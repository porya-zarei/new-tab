import {useContext, useRef, useState} from "react";
import {ConvertFile} from "../../../apis/convert-api";
import {MainContext} from "../../../contexts/main/main-context";
import useNotification from "../../../hooks/useNotification";
import {
    fileType_allTypes,
    fileType_compressed,
    fileType_images,
    fileType_programmings,
    fileType_sounds,
    fileType_texts,
    fileType_videos,
} from "../../../utils/file-types";
import {
    getExtensionOfFile,
    getReadableFileSizeString,
} from "../../../utils/useful-functions";
import classes from "./convertor.module.scss";
import FileIcon from "./get-file-icon";

const Convertor = () => {
    const {convertApiSecretKey} = useContext(MainContext);

    const {notify} = useNotification();

    const inputRef = useRef();
    const downloadRef = useRef();

    const [selectedFile, setSelectedFile] = useState();
    const [outputType, setOutputType] = useState("");
    const [outputUrl, setOutputUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const [filteredTypes, setFilteredTypes] = useState(fileType_allTypes);

    const handleFilterTypes = (type) => {
        console.log("in filter", type);
        if (fileType_compressed.includes(type)) {
            setFilteredTypes(fileType_compressed.filter((t) => t !== type));
        } else if (fileType_images.includes(type)) {
            setFilteredTypes(fileType_images.filter((t) => t !== type));
        } else if (fileType_programmings.includes(type)) {
            setFilteredTypes(fileType_programmings.filter((t) => t !== type));
        } else if (fileType_sounds.includes(type)) {
            setFilteredTypes(fileType_sounds.filter((t) => t !== type));
        } else if (fileType_texts.includes(type)) {
            setFilteredTypes(fileType_texts.filter((t) => t !== type));
        } else if (fileType_videos.includes(type)) {
            setFilteredTypes(fileType_videos.filter((t) => t !== type));
        } else {
            setFilteredTypes(fileType_allTypes.filter((t) => t !== type));
        }
    };

    const handleSelectFile = (e) => {
        setSelectedFile(e.target.files[0]);
        handleFilterTypes(getExtensionOfFile(e.target.files[0].name));
    };
    const handleSelectOutputFileType = (e) => {
        console.log(e.target.value);
        setOutputType(e.target.value);
    };
    const handleConvertFile = async () => {
        setLoading(true);
        const convertResult = await ConvertFile(outputType, selectedFile, {
            secret: convertApiSecretKey,
        });
        if (convertResult.startsWith("wrong_secret")) {
            notify("please go to setting and set your secret key", "warning");
        } else if (convertResult.startsWith("api_error")) {
            notify(
                "api error, check your network or check output type",
                "error",
            );
            console.log("convert api error => ", convertResult);
        } else {
            setOutputUrl(convertResult);
        }
        setLoading(false);
    };

    return (
        <div className="w-100 p-0 m-0">
            <div className={classes.container}>
                <div className={classes.topPart}>
                    <div className={classes.part}>
                        <div
                            className={
                                "bg-white py-2 px-3 " + classes.borderRadiusTop
                            }>
                            <strong className="fw-bolder">
                                convert your files
                            </strong>
                        </div>
                    </div>
                </div>
                <div className={classes.middleContainer}>
                    <div className={classes.rightPart}>
                        <div className={classes.part}>
                            <div className="w-100 row p-0 m-0">
                                <div className="col-12 p-0 m-0 overflow-hidden">
                                    <div
                                        title={selectedFile?.name}
                                        className={classes.fileName}>
                                        file name: {selectedFile?.name}
                                    </div>
                                </div>
                                <div className="col-12 p-0 m-0 overflow-hidden">
                                    file size:{" "}
                                    <span>
                                        {getReadableFileSizeString(
                                            selectedFile?.size,
                                        )}
                                    </span>
                                </div>
                            </div>
                            <input
                                onChange={handleSelectFile}
                                ref={inputRef}
                                hidden={true}
                                multiple={false}
                                type={"file"}
                            />
                            <button
                                onClick={() => {
                                    console.log(inputRef.current);
                                    inputRef.current.click();
                                }}
                                className="btn btn-secondary w-100 h-auto rounded-pill">
                                select file
                            </button>
                        </div>
                    </div>
                    <div className={classes.middlePart}>
                        <div className={classes.part}>
                            <div className="w-100 h-100 center fs-1">
                                <FileIcon fileName={selectedFile?.name} />
                                <i className="bi-arrow-right mx-2"></i>
                                <FileIcon
                                    fileName={
                                        outputType.length > 0
                                            ? "file." + outputType
                                            : "text.txt"
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className={classes.leftPart}>
                        <div className={classes.part}>
                            <div className="w-100 h-100">
                                <div className="row p-0 m-0 w-100 h-100 justify-content-center align-items-center">
                                    <div className="col-12 p-0 m-0">
                                        <select
                                            onChange={
                                                handleSelectOutputFileType
                                            }
                                            className="form-select rounded-pill">
                                            <option className="" value={null}>
                                                --- output type ---
                                            </option>
                                            {filteredTypes.map((type) => (
                                                <option
                                                    className=""
                                                    selected={
                                                        outputType === type
                                                    }
                                                    value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-12 p-0 m-0">
                                        <button
                                            onClick={handleConvertFile}
                                            className="btn btn-success w-100 rounded-pill">
                                            {loading ? (
                                                <i className="spinner-border"></i>
                                            ) : (
                                                "Convert"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.bottomPart}>
                    <div className={classes.part}>
                        <a
                            href={outputUrl}
                            download={true}
                            ref={downloadRef}
                            className={
                                "btn btn-dark w-100 " +
                                classes.borderRadiusBottom
                            }>
                            Download <i className="bi-download"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Convertor;
