import { Spin } from "antd";
import { SpinContainer } from "./styles";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const SpinLoading = () => {
  return (
    <SpinContainer>
      <Spin size="large" indicator={antIcon} />
    </SpinContainer>
  );
};

export default SpinLoading;
