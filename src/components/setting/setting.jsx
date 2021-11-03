import Container from "../switch-router/container";
import ConvertApiSetting from "./convert-api-setting/convert-api-setting";

const Setting = () => {
    return (
        <Container>
            <div className="col-12 p-0 m-0 mb-2">
                <ConvertApiSetting/>
            </div>
        </Container>
    );
};

export default Setting;
