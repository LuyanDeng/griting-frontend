import Image from 'next/image'
import { MentorCard } from '@/services/mentor'
import DefaultMentor from '@/assets/imgs/defaultSpeaker.png'

const MentorItem: React.FC<MentorCard> = ({
  _uid,
  person_name,
  person_title,
  person_img,
}) => {
  return (
    <div className="flex flex-col gap-x-[8px] w-full max-w-[300px]">
      <div className="w-full aspect-[300/280] relative">
        <Image
          className="rounded-2xl object-cover select-none pointer-events-none"
          src={person_img.filename}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 252px"
          draggable={false}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAqFJREFUGBkFwVFRQEEQBLHM1vOvBzN8YuOaZD+/fwAKBDIg2IbBzIBBIElCFcABwABhABgCAAAAAAAGcACIpjERASABKUAAGgAMBm5rIgAAoIhAClBEagXQoGEwfTALgCAAYASIgRhGS4w0AAvfAGCVAQhpBMAsMJoFTADSAL5BRmJQARSBAYoZsdYMkIYZAXwTAAJIEgQ0wCyxLZbYMAwIwHcEYaSYYgWUARDYxLBRNgDYAN/WgpYQCFTJEGCwiW0J24gBDIBvGDUSpkRllUQAMDBsUzOLYTAYfCcg0UhKUVpUwcAMsxltw8CwkQG+E2KKpIiUUtUCQNswNhu0bQADzHwDW4WIeIpUtVTAYJjNZjPbMtkG2Ba+E2JK1ZMixVNlBWA2m2Yz29q22WI2AL4jjUR03pOeUkqpWLCNMZhls2yGzKzBvmlQSunV1RPpKVUtGGw2m63NLZtlMzAYfbckoGiilZ6qtxIFNs1ms3XbW3cxYwxG+AamFK9Or1ZKb1WtFNiYzY311t3e3CKbAcy+ExLR6dW8816p9ZQS0GzM225ZLasNloFhvkFYnmis1Dy9lVLVYNPcWG+7aUyLbBs0U99VrNLxWB2vVmnSU4JpxptbVitZbdhqMNp8YwpSq0lNq5VS1YKBQctqtShttcGA9k0g0LSiZbVSSgkGxtaYptk0jQWD0TcIwBjVaqyUUgKMzUpbrVZrqzVsoDbfBFK0mkZaDQVRsI1la2JjTDO1kWGTGxhDxrJaaEVqomm1mpZlpZSoIUOUOowxDUxjWmRZqUUmEqIxxjRoUjTGN1TCtAoCTQQQk7E1GwAxLDALsSMsAJZlWSAiogZEZDUNKGAh0I2BgQEQFtAEYIwxQWQBARAcAAwQAAAYgwACAAwZBMg/0KW7aHgfX3kAAAAASUVORK5CYII="
          placeholder="blur"
        />
      </div>

      <div className="grid grid-cols-1 gap-1 md:gap-2">
        <span className="font-semibold text-[18px] md:text-[24px] text-[rgba(46,46,46,1)]">
          {person_name}
        </span>
        <div
          className="text-[14px] md:text-[16px] text-[rgba(34,34,34,1)]"
          dangerouslySetInnerHTML={{ __html: person_title }}
        />
      </div>
    </div>
  )
}
export const MentorItemSkeleton: React.FC = () => {
  return (
    <div className="flex flex-row items-center gap-x-[8px]">
      <Image
        className="shrink-0 w-[252px] h-[220px] rounded-[16px] object-cover select-none pointer-events-none"
        src={DefaultMentor}
        alt=""
        width={134}
        height={134}
        draggable={false}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAqFJREFUGBkFwVFRQEEQBLHM1vOvBzN8YuOaZD+/fwAKBDIg2IbBzIBBIElCFcABwABhABgCAAAAAAAGcACIpjERASABKUAAGgAMBm5rIgAAoIhAClBEagXQoGEwfTALgCAAYASIgRhGS4w0AAvfAGCVAQhpBMAsMJoFTADSAL5BRmJQARSBAYoZsdYMkIYZAXwTAAJIEgQ0wCyxLZbYMAwIwHcEYaSYYgWUARDYxLBRNgDYAN/WgpYQCFTJEGCwiW0J24gBDIBvGDUSpkRllUQAMDBsUzOLYTAYfCcg0UhKUVpUwcAMsxltw8CwkQG+E2KKpIiUUtUCQNswNhu0bQADzHwDW4WIeIpUtVTAYJjNZjPbMtkG2Ba+E2JK1ZMixVNlBWA2m2Yz29q22WI2AL4jjUR03pOeUkqpWLCNMZhls2yGzKzBvmlQSunV1RPpKVUtGGw2m63NLZtlMzAYfbckoGiilZ6qtxIFNs1ms3XbW3cxYwxG+AamFK9Or1ZKb1WtFNiYzY311t3e3CKbAcy+ExLR6dW8816p9ZQS0GzM225ZLasNloFhvkFYnmis1Dy9lVLVYNPcWG+7aUyLbBs0U99VrNLxWB2vVmnSU4JpxptbVitZbdhqMNp8YwpSq0lNq5VS1YKBQctqtShttcGA9k0g0LSiZbVSSgkGxtaYptk0jQWD0TcIwBjVaqyUUgKMzUpbrVZrqzVsoDbfBFK0mkZaDQVRsI1la2JjTDO1kWGTGxhDxrJaaEVqomm1mpZlpZSoIUOUOowxDUxjWmRZqUUmEqIxxjRoUjTGN1TCtAoCTQQQk7E1GwAxLDALsSMsAJZlWSAiogZEZDUNKGAh0I2BgQEQFtAEYIwxQWQBARAcAAwQAAAYgwACAAwZBMg/0KW7aHgfX3kAAAAASUVORK5CYII="
        placeholder="blur"
      />
      <div className="flex flex-col justify-between grow h-[122px]">
        <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
        <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
        <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
        <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
      </div>
    </div>
  )
}

export default MentorItem
