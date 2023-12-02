export default function ProductCardPlaceholder({ isLoading }) {
  return (
    <div className="w-[100%] max-w-[1312px] my-0 mx-auto px-[1rem] py-[12px] mb-[12px]">
      <p className="text-grey-title mb-11 h-12 line-clamp-2 xmd:mb-[36px] xmd:h-[42px] sm:h-[38px] sm:text-sm sm:mb-[29px]">
        No data available under this category.
      </p>
    </div>
  );
}
