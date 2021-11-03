const Container = ({withContainer = true, children}) => {
    return (
        <div className="h-100 w-100">
            <div className={withContainer && "container"}>
                <div className="w-100 h-100 row p-0 m-0">{children}</div>
            </div>
        </div>
    );
};

export default Container;
