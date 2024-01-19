import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
type PaginationProps= {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}
const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}: PaginationProps) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const changePage = (offset: number) => {
    const newPage = currentPage + offset;
    if (newPage > 0 && newPage <= pageCount) {
      paginate(newPage);
    }
  };
  const pageNumbers = Array.from(
    { length: pageCount },
    (_, index) => index + 1
  );
    
  return (
    <ul className="flex justify-center gap-8 mt-40 items-center">
      <li
        className="py-12 px-16 bg-white rounded-20 border border-lightGray cursor-pointer"
        onClick={() => changePage(-1)}>
        <BsChevronLeft size={16} className=" text-lightGray" />
      </li>

      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`cursor-pointer w-42 h-40 rounded-full flex justify-center items-center ${currentPage === number ? 'bg-primary-green text-white ' : 'bg-white border border-lightGray'}`}
          onClick={() => paginate(number)}>
          {number}
        </li>
      ))}

      <li
        className="py-12 px-16 bg-white rounded-20 border border-lightGray cursor-pointer"
        onClick={() => changePage(1)}>
        <BsChevronRight size={16} className=" text-lightGray" />
      </li>
    </ul>
  );
};
export default Pagination;
