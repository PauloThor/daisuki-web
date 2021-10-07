import { PaginationStyled } from "./styles";

interface Props {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number) => void;
}

const Pagination = ({ current, pageSize, total, onChange }: Props) => {
  return (
    <PaginationStyled
      current={current}
      pageSize={pageSize}
      total={total}
      onChange={onChange}
      showLessItems
    />
  );
};

export default Pagination;
