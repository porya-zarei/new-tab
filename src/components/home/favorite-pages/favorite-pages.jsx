import {useContext, useState} from "react";
import {getRandom, MainContext} from "../../../contexts/main/main-context";
import classes from "./favoritepages.module.scss";
const FavoritePages = () => {
    const {favoritePages, addFavoritePage,deleteFavoritePage} = useContext(MainContext);
    const [inAddPage, setInAddPage] = useState(false);
    const [pageName, setPageName] = useState("");
    const [pageAddress, setPageAddress] = useState("");
    const cancelAdding = () => {
        setInAddPage(false);
        setPageName("");
        setPageAddress("");
    };
    const handleAddPage = () => {
        const page = {
            id: getRandom(),
            name: pageName,
            address: pageAddress,
        };
        addFavoritePage(page);
        cancelAdding();
    };
    return (
        <div className={classes.linksContainer}>
            {favoritePages.map((page) => (
                <div key={page.id} className={classes.linkContainer}>
                    <button
                        onClick={() => deleteFavoritePage(page.id)}
                        className={classes.deleteBtn}>
                        <i className="bi-trash-fill"></i>
                    </button>
                    <a
                        href={page.address}
                        className={classes.favoritePagesLink}>
                        {page.name}
                    </a>
                </div>
            ))}
            <div className={classes.linkContainer}>
                <button
                    onClick={() => setInAddPage((p) => !p)}
                    className={classes.favoritePagesAddBtn}>
                    <i className="bi-plus-square fs-3"></i>
                </button>
            </div>
            {inAddPage && (
                <div className={classes.addPageContainer}>
                    <input
                        value={pageName}
                        onChange={(e) => setPageName(e.target.value)}
                        className={classes.pageNameInput}
                        type={"text"}
                        placeholder="page name ..."
                    />
                    <input
                        value={pageAddress}
                        onChange={(e) => setPageAddress(e.target.value)}
                        className={classes.pageAddressInput}
                        type={"text"}
                        placeholder="page address"
                    />
                    <button
                        onClick={handleAddPage}
                        className="btn btn-success h-100 -new-tab-center">
                        add
                    </button>
                    <button
                        onClick={cancelAdding}
                        className="btn btn-warning h-100 -new-tab-center">
                        cancel
                    </button>
                </div>
            )}
        </div>
    );
};

export default FavoritePages;
