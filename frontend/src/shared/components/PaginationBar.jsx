import { Pagination } from "antd";

export default function PaginationBar({
  current,
  total,
  pageSize,
  onChange,
  className = "",
  showSizeChanger = false,
}) {
  if (total <= pageSize) return null;

  const handlePageChange = (nextPage) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onChange?.(nextPage);
  };

  return (
    <div className={`pagination-wrap ${className}`.trim()}>
      <Pagination
        current={current}
        total={total}
        pageSize={pageSize}
        showSizeChanger={showSizeChanger}
        onChange={handlePageChange}
      />
    </div>
  );
}
