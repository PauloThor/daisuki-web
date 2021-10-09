import { Content, StyledModal } from "./styles";

interface ModalSynopsisProps {
  isModalSynopsisVisible: boolean;
  handleModalSynopsis: () => void;
  synopsis: string;
}

export const ModalSynopsis = ({
  isModalSynopsisVisible,
  handleModalSynopsis,
  synopsis,
}: ModalSynopsisProps) => {
  return (
    <StyledModal
      title="Sinopse"
      visible={isModalSynopsisVisible}
      onCancel={handleModalSynopsis}
    >
      <Content>{synopsis}</Content>
    </StyledModal>
  );
};
