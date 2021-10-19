import { Spin } from "antd";
import { SpinContainer } from "./styles";
import { LoadingOutlined } from "@ant-design/icons";

interface SpinLoadingProps {
  size?: "small" | "large" | "default";
}

const SpinLoading = ({ size = "large" }: SpinLoadingProps) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <SpinContainer size={size}>
      <Spin size={size} indicator={antIcon} />
    </SpinContainer>
  );
};

export default SpinLoading;
