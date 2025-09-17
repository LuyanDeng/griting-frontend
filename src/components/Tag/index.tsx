import { ComponentProps } from 'react'
import cx from 'clsx'
interface TagProps extends ComponentProps<'div'> {
  content: string
}

const Tag: React.FC<TagProps> = ({ content, className, ...props }) => {
  return (
    <div
      className={cx(
        'absolute flex items-center justify-center w-[166px] h-[32px] bg-[#20BDD3] border-solid border-[1px] border-[#20BDD3] rounded-tr-[16px] rounded-bl-[16px]',
        className
      )}
      {...props}
    >
      <span className="font-bold text-[16px] leading-[24px] text-[#FFFFFF] drop-shadow-[0px_2px_7px_0px_#00000040]">
        {content}
      </span>
    </div>
  )
}

export default Tag
