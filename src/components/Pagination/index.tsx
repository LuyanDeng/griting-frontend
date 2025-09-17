import cx from 'clsx'
import { ArrowHead } from '@/components/Icons';

interface PaginationProps {
   currentPage: number;
   fetchNextPage?: Function;
   fetchPreviousPage?: Function;
   hasNextPage: boolean;
   hasPreviousPage: boolean;
   isFetching: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, fetchNextPage, fetchPreviousPage, hasNextPage, hasPreviousPage, isFetching }) => {

   return (
      <div className='flex flex-row items-center gap-x-[16px]'>
         <button className={cx(!hasPreviousPage && 'invisible')} onClick={() => fetchPreviousPage?.()} disabled={!hasPreviousPage || isFetching}>
            <ArrowHead className={cx('w-[16px] -rotate-90', isFetching ? 'cursor-not-allowed' : 'cursor-pointer')} />
         </button>
         <span>{(currentPage === 1 && !hasNextPage) ? '' : currentPage}</span>
         <button className={cx(!hasNextPage && 'invisible')} onClick={() => fetchNextPage?.()} disabled={!hasNextPage || isFetching}>
            <ArrowHead className={cx('w-[16px] rotate-90', isFetching ? 'cursor-not-allowed' : 'cursor-pointer')} />
         </button>
      </div>
   )
}

export default Pagination