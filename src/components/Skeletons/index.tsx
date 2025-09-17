import Image from 'next/image'
import Link from 'next/link'
import cx from 'clsx'
import DefaultSpeaker from '@/assets/imgs/defaultSpeaker.png'
import s from '@/styles/people.module.css'
import ProfileSection from '@/modules/ProfileSection'


export const SpeakcerItemSkeleton: React.FC = () => {
  return (
    <div className="shrink-0 flex flex-col gap-y-[8px] w-full sm:w-[282px]">
      <Image
        className="shrink-0 w-full sm:w-[282px] h-fit sm:h-[210px] rounded-[16px] object-cover select-none pointer-events-none"
        src={DefaultSpeaker}
        alt=""
        // layout="fill"
        width={586}
        height={293}
        draggable={false}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAqFJREFUGBkFwVFRQEEQBLHM1vOvBzN8YuOaZD+/fwAKBDIg2IbBzIBBIElCFcABwABhABgCAAAAAAAGcACIpjERASABKUAAGgAMBm5rIgAAoIhAClBEagXQoGEwfTALgCAAYASIgRhGS4w0AAvfAGCVAQhpBMAsMJoFTADSAL5BRmJQARSBAYoZsdYMkIYZAXwTAAJIEgQ0wCyxLZbYMAwIwHcEYaSYYgWUARDYxLBRNgDYAN/WgpYQCFTJEGCwiW0J24gBDIBvGDUSpkRllUQAMDBsUzOLYTAYfCcg0UhKUVpUwcAMsxltw8CwkQG+E2KKpIiUUtUCQNswNhu0bQADzHwDW4WIeIpUtVTAYJjNZjPbMtkG2Ba+E2JK1ZMixVNlBWA2m2Yz29q22WI2AL4jjUR03pOeUkqpWLCNMZhls2yGzKzBvmlQSunV1RPpKVUtGGw2m63NLZtlMzAYfbckoGiilZ6qtxIFNs1ms3XbW3cxYwxG+AamFK9Or1ZKb1WtFNiYzY311t3e3CKbAcy+ExLR6dW8816p9ZQS0GzM225ZLasNloFhvkFYnmis1Dy9lVLVYNPcWG+7aUyLbBs0U99VrNLxWB2vVmnSU4JpxptbVitZbdhqMNp8YwpSq0lNq5VS1YKBQctqtShttcGA9k0g0LSiZbVSSgkGxtaYptk0jQWD0TcIwBjVaqyUUgKMzUpbrVZrqzVsoDbfBFK0mkZaDQVRsI1la2JjTDO1kWGTGxhDxrJaaEVqomm1mpZlpZSoIUOUOowxDUxjWmRZqUUmEqIxxjRoUjTGN1TCtAoCTQQQk7E1GwAxLDALsSMsAJZlWSAiogZEZDUNKGAh0I2BgQEQFtAEYIwxQWQBARAcAAwQAAAYgwACAAwZBMg/0KW7aHgfX3kAAAAASUVORK5CYII="
        placeholder="blur"
      />
      {/* <Image
         className="shrink-0 w-full h-auto rounded-[16px] object-cover select-none pointer-events-none"
         src={person_img.filename ? person_img.filename : DefaultSpeaker}
         alt=""
         // layout="fill"
         width={282}
         height={210}
         draggable={false}
         blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAqFJREFUGBkFwVFRQEEQBLHM1vOvBzN8YuOaZD+/fwAKBDIg2IbBzIBBIElCFcABwABhABgCAAAAAAAGcACIpjERASABKUAAGgAMBm5rIgAAoIhAClBEagXQoGEwfTALgCAAYASIgRhGS4w0AAvfAGCVAQhpBMAsMJoFTADSAL5BRmJQARSBAYoZsdYMkIYZAXwTAAJIEgQ0wCyxLZbYMAwIwHcEYaSYYgWUARDYxLBRNgDYAN/WgpYQCFTJEGCwiW0J24gBDIBvGDUSpkRllUQAMDBsUzOLYTAYfCcg0UhKUVpUwcAMsxltw8CwkQG+E2KKpIiUUtUCQNswNhu0bQADzHwDW4WIeIpUtVTAYJjNZjPbMtkG2Ba+E2JK1ZMixVNlBWA2m2Yz29q22WI2AL4jjUR03pOeUkqpWLCNMZhls2yGzKzBvmlQSunV1RPpKVUtGGw2m63NLZtlMzAYfbckoGiilZ6qtxIFNs1ms3XbW3cxYwxG+AamFK9Or1ZKb1WtFNiYzY311t3e3CKbAcy+ExLR6dW8816p9ZQS0GzM225ZLasNloFhvkFYnmis1Dy9lVLVYNPcWG+7aUyLbBs0U99VrNLxWB2vVmnSU4JpxptbVitZbdhqMNp8YwpSq0lNq5VS1YKBQctqtShttcGA9k0g0LSiZbVSSgkGxtaYptk0jQWD0TcIwBjVaqyUUgKMzUpbrVZrqzVsoDbfBFK0mkZaDQVRsI1la2JjTDO1kWGTGxhDxrJaaEVqomm1mpZlpZSoIUOUOowxDUxjWmRZqUUmEqIxxjRoUjTGN1TCtAoCTQQQk7E1GwAxLDALsSMsAJZlWSAiogZEZDUNKGAh0I2BgQEQFtAEYIwxQWQBARAcAAwQAAAYgwACAAwZBMg/0KW7aHgfX3kAAAAASUVORK5CYII="
         placeholder="blur"
       /> */}
      <div className="flex flex-col justify-between grow h-[122px]">
        <div className="w-[38%] h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
        <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
        <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
        <div className="w-[61%] h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
      </div>
    </div>
  )
}

export const MinorSpeakerItemSkeleton: React.FC = () => {
  return (
    <div className="flex flex-row items-center gap-x-[8px]">
      <Image
        className="shrink-0 w-[134px] h-[122px] rounded-[16px] select-none pointer-events-none"
        src={DefaultSpeaker}
        alt=""
        width={134}
        height={134}
        draggable={false}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAqFJREFUGBkFwVFRQEEQBLHM1vOvBzN8YuOaZD+/fwAKBDIg2IbBzIBBIElCFcABwABhABgCAAAAAAAGcACIpjERASABKUAAGgAMBm5rIgAAoIhAClBEagXQoGEwfTALgCAAYASIgRhGS4w0AAvfAGCVAQhpBMAsMJoFTADSAL5BRmJQARSBAYoZsdYMkIYZAXwTAAJIEgQ0wCyxLZbYMAwIwHcEYaSYYgWUARDYxLBRNgDYAN/WgpYQCFTJEGCwiW0J24gBDIBvGDUSpkRllUQAMDBsUzOLYTAYfCcg0UhKUVpUwcAMsxltw8CwkQG+E2KKpIiUUtUCQNswNhu0bQADzHwDW4WIeIpUtVTAYJjNZjPbMtkG2Ba+E2JK1ZMixVNlBWA2m2Yz29q22WI2AL4jjUR03pOeUkqpWLCNMZhls2yGzKzBvmlQSunV1RPpKVUtGGw2m63NLZtlMzAYfbckoGiilZ6qtxIFNs1ms3XbW3cxYwxG+AamFK9Or1ZKb1WtFNiYzY311t3e3CKbAcy+ExLR6dW8816p9ZQS0GzM225ZLasNloFhvkFYnmis1Dy9lVLVYNPcWG+7aUyLbBs0U99VrNLxWB2vVmnSU4JpxptbVitZbdhqMNp8YwpSq0lNq5VS1YKBQctqtShttcGA9k0g0LSiZbVSSgkGxtaYptk0jQWD0TcIwBjVaqyUUgKMzUpbrVZrqzVsoDbfBFK0mkZaDQVRsI1la2JjTDO1kWGTGxhDxrJaaEVqomm1mpZlpZSoIUOUOowxDUxjWmRZqUUmEqIxxjRoUjTGN1TCtAoCTQQQk7E1GwAxLDALsSMsAJZlWSAiogZEZDUNKGAh0I2BgQEQFtAEYIwxQWQBARAcAAwQAAAYgwACAAwZBMg/0KW7aHgfX3kAAAAASUVORK5CYII="
        placeholder="blur"
      />
      <div className="flex flex-col justify-between grow h-[122px]">
        <div className="w-[38%] h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
        <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
        <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
        <div className="w-[61%] h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
      </div>
    </div>
  )
}

export const PresentItemSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-[8px] w-[282px] lg:w-fit 2xl:w-[282px]">
      <Image
        className="w-[281px] h-[234px] lg:w-fit lg:h-fit 2xl:w-[281px] 2xl:h-[234px] rounded-[16px] object-cover select-none pointer-events-none"
        src={DefaultSpeaker}
        alt=""
        // layout="fill"
        width={586}
        height={293}
        draggable={false}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAqFJREFUGBkFwVFRQEEQBLHM1vOvBzN8YuOaZD+/fwAKBDIg2IbBzIBBIElCFcABwABhABgCAAAAAAAGcACIpjERASABKUAAGgAMBm5rIgAAoIhAClBEagXQoGEwfTALgCAAYASIgRhGS4w0AAvfAGCVAQhpBMAsMJoFTADSAL5BRmJQARSBAYoZsdYMkIYZAXwTAAJIEgQ0wCyxLZbYMAwIwHcEYaSYYgWUARDYxLBRNgDYAN/WgpYQCFTJEGCwiW0J24gBDIBvGDUSpkRllUQAMDBsUzOLYTAYfCcg0UhKUVpUwcAMsxltw8CwkQG+E2KKpIiUUtUCQNswNhu0bQADzHwDW4WIeIpUtVTAYJjNZjPbMtkG2Ba+E2JK1ZMixVNlBWA2m2Yz29q22WI2AL4jjUR03pOeUkqpWLCNMZhls2yGzKzBvmlQSunV1RPpKVUtGGw2m63NLZtlMzAYfbckoGiilZ6qtxIFNs1ms3XbW3cxYwxG+AamFK9Or1ZKb1WtFNiYzY311t3e3CKbAcy+ExLR6dW8816p9ZQS0GzM225ZLasNloFhvkFYnmis1Dy9lVLVYNPcWG+7aUyLbBs0U99VrNLxWB2vVmnSU4JpxptbVitZbdhqMNp8YwpSq0lNq5VS1YKBQctqtShttcGA9k0g0LSiZbVSSgkGxtaYptk0jQWD0TcIwBjVaqyUUgKMzUpbrVZrqzVsoDbfBFK0mkZaDQVRsI1la2JjTDO1kWGTGxhDxrJaaEVqomm1mpZlpZSoIUOUOowxDUxjWmRZqUUmEqIxxjRoUjTGN1TCtAoCTQQQk7E1GwAxLDALsSMsAJZlWSAiogZEZDUNKGAh0I2BgQEQFtAEYIwxQWQBARAcAAwQAAAYgwACAAwZBMg/0KW7aHgfX3kAAAAASUVORK5CYII="
        placeholder="blur"
      />
      <div className="flex flex-col justify-between grow h-[122px]">
        <div className="w-[38%] h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
        <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
        <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
        <div className="w-[61%] h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
      </div>
    </div>
  )
}
export const PresidentEmptyCard: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-[8px] w-[234px] lg:w-fit 2xl:w-[282px]">
      <Image
        className="w-[234px] h-[235px] lg:w-fit lg:h-fit 2xl:w-[281px] 2xl:h-[234px] rounded-[16px] object-cover select-none pointer-events-none"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="

        alt=""
        // layout="fill"
        width={586}
        height={293}
        draggable={false}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAqFJREFUGBkFwVFRQEEQBLHM1vOvBzN8YuOaZD+/fwAKBDIg2IbBzIBBIElCFcABwABhABgCAAAAAAAGcACIpjERASABKUAAGgAMBm5rIgAAoIhAClBEagXQoGEwfTALgCAAYASIgRhGS4w0AAvfAGCVAQhpBMAsMJoFTADSAL5BRmJQARSBAYoZsdYMkIYZAXwTAAJIEgQ0wCyxLZbYMAwIwHcEYaSYYgWUARDYxLBRNgDYAN/WgpYQCFTJEGCwiW0J24gBDIBvGDUSpkRllUQAMDBsUzOLYTAYfCcg0UhKUVpUwcAMsxltw8CwkQG+E2KKpIiUUtUCQNswNhu0bQADzHwDW4WIeIpUtVTAYJjNZjPbMtkG2Ba+E2JK1ZMixVNlBWA2m2Yz29q22WI2AL4jjUR03pOeUkqpWLCNMZhls2yGzKzBvmlQSunV1RPpKVUtGGw2m63NLZtlMzAYfbckoGiilZ6qtxIFNs1ms3XbW3cxYwxG+AamFK9Or1ZKb1WtFNiYzY311t3e3CKbAcy+ExLR6dW8816p9ZQS0GzM225ZLasNloFhvkFYnmis1Dy9lVLVYNPcWG+7aUyLbBs0U99VrNLxWB2vVmnSU4JpxptbVitZbdhqMNp8YwpSq0lNq5VS1YKBQctqtShttcGA9k0g0LSiZbVSSgkGxtaYptk0jQWD0TcIwBjVaqyUUgKMzUpbrVZrqzVsoDbfBFK0mkZaDQVRsI1la2JjTDO1kWGTGxhDxrJaaEVqomm1mpZlpZSoIUOUOowxDUxjWmRZqUUmEqIxxjRoUjTGN1TCtAoCTQQQk7E1GwAxLDALsSMsAJZlWSAiogZEZDUNKGAh0I2BgQEQFtAEYIwxQWQBARAcAAwQAAAYgwACAAwZBMg/0KW7aHgfX3kAAAAASUVORK5CYII="
        placeholder="blur"
      />
      <div className="flex flex-col justify-between grow h-[122px]">
        <div className="w-[38%] h-[16px] bg-[rgba(0,0,0,0)] rounded-[4px]" />
        <div className="w-full h-[16px] bg-[rgba(0,0,0,0)] rounded-[4px]" />
        <div className="w-full h-[16px] bg-[rgba(0,0,0,0)] rounded-[4px]" />
        <div className="w-[61%] h-[16px] bg-[rgba(0,0,0,0)] rounded-[4px]" />
      </div>
    </div>
  )
}

export const PersonDetailSkeleton = () => {
  return (
    <>
      <div className={cx(s.section_personal_card, 'pt-[30px] text-[#ffffff]')}>
        <p className={cx(s.back_to_people, 'pt-[30px]')}>
          <Link href="/annualconf"> Back To Annual Conference</Link>
        </p>

        <div className={s.section_personal}>
          <div className={s.section_left}>
            <div className={cx(s.image_container, 'mb-[25px]')}>
              <Image
                className="w-full"
                width={1000}
                height={1000}
                src={DefaultSpeaker}
                alt=""
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAqFJREFUGBkFwVFRQEEQBLHM1vOvBzN8YuOaZD+/fwAKBDIg2IbBzIBBIElCFcABwABhABgCAAAAAAAGcACIpjERASABKUAAGgAMBm5rIgAAoIhAClBEagXQoGEwfTALgCAAYASIgRhGS4w0AAvfAGCVAQhpBMAsMJoFTADSAL5BRmJQARSBAYoZsdYMkIYZAXwTAAJIEgQ0wCyxLZbYMAwIwHcEYaSYYgWUARDYxLBRNgDYAN/WgpYQCFTJEGCwiW0J24gBDIBvGDUSpkRllUQAMDBsUzOLYTAYfCcg0UhKUVpUwcAMsxltw8CwkQG+E2KKpIiUUtUCQNswNhu0bQADzHwDW4WIeIpUtVTAYJjNZjPbMtkG2Ba+E2JK1ZMixVNlBWA2m2Yz29q22WI2AL4jjUR03pOeUkqpWLCNMZhls2yGzKzBvmlQSunV1RPpKVUtGGw2m63NLZtlMzAYfbckoGiilZ6qtxIFNs1ms3XbW3cxYwxG+AamFK9Or1ZKb1WtFNiYzY311t3e3CKbAcy+ExLR6dW8816p9ZQS0GzM225ZLasNloFhvkFYnmis1Dy9lVLVYNPcWG+7aUyLbBs0U99VrNLxWB2vVmnSU4JpxptbVitZbdhqMNp8YwpSq0lNq5VS1YKBQctqtShttcGA9k0g0LSiZbVSSgkGxtaYptk0jQWD0TcIwBjVaqyUUgKMzUpbrVZrqzVsoDbfBFK0mkZaDQVRsI1la2JjTDO1kWGTGxhDxrJaaEVqomm1mpZlpZSoIUOUOowxDUxjWmRZqUUmEqIxxjRoUjTGN1TCtAoCTQQQk7E1GwAxLDALsSMsAJZlWSAiogZEZDUNKGAh0I2BgQEQFtAEYIwxQWQBARAcAAwQAAAYgwACAAwZBMg/0KW7aHgfX3kAAAAASUVORK5CYII="
                placeholder="blur"
              />
            </div>
          </div>
          <div className={s.section_right}>
            <div className={s.name}>
              <div className="w-3/5 h-[4.95vw] bg-[#303030] rounded-[4px]" />
            </div>
            <p className={s.position}>
              <div className="w-3/5 h-[16px] bg-[#303030] rounded-[4px]" />
            </p>
            <>
              <p className={s.bio_text}>Bio</p>
              <p className={s.bio}>
                <div className="flex flex-col gap-y-[8px]">
                  <div className="w-4/5 h-[25px] bg-[#303030] rounded-[4px]" />
                  <div className="w-4/5 h-[25px] bg-[#303030] rounded-[4px]" />
                  <div className="w-4/5 h-[25px] bg-[#303030] rounded-[4px]" />
                </div>
              </p>
            </>
          </div>
        </div>
      </div>
    </>
  )
}

export const ProfileSkeleton: React.FC = () => {
  return (
    <div className="pt-[24px] gap-[16px] w-11/12 sm:w-4/5 max-w-[1500px]">
      <ProfileSection title='Personal Information' className='col-span-2'>
        <div className='grid grid-cols-4 grid-rows-3 gap-[16px]'>
          <Image
            className="col-span-1 row-span-2 w-full max-w-[281px] rounded-[16px] object-cover pointer-events-none"
            src={DefaultSpeaker}
            alt=""
            // layout="fill"
            width={586}
            height={293}
            draggable={false}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAqFJREFUGBkFwVFRQEEQBLHM1vOvBzN8YuOaZD+/fwAKBDIg2IbBzIBBIElCFcABwABhABgCAAAAAAAGcACIpjERASABKUAAGgAMBm5rIgAAoIhAClBEagXQoGEwfTALgCAAYASIgRhGS4w0AAvfAGCVAQhpBMAsMJoFTADSAL5BRmJQARSBAYoZsdYMkIYZAXwTAAJIEgQ0wCyxLZbYMAwIwHcEYaSYYgWUARDYxLBRNgDYAN/WgpYQCFTJEGCwiW0J24gBDIBvGDUSpkRllUQAMDBsUzOLYTAYfCcg0UhKUVpUwcAMsxltw8CwkQG+E2KKpIiUUtUCQNswNhu0bQADzHwDW4WIeIpUtVTAYJjNZjPbMtkG2Ba+E2JK1ZMixVNlBWA2m2Yz29q22WI2AL4jjUR03pOeUkqpWLCNMZhls2yGzKzBvmlQSunV1RPpKVUtGGw2m63NLZtlMzAYfbckoGiilZ6qtxIFNs1ms3XbW3cxYwxG+AamFK9Or1ZKb1WtFNiYzY311t3e3CKbAcy+ExLR6dW8816p9ZQS0GzM225ZLasNloFhvkFYnmis1Dy9lVLVYNPcWG+7aUyLbBs0U99VrNLxWB2vVmnSU4JpxptbVitZbdhqMNp8YwpSq0lNq5VS1YKBQctqtShttcGA9k0g0LSiZbVSSgkGxtaYptk0jQWD0TcIwBjVaqyUUgKMzUpbrVZrqzVsoDbfBFK0mkZaDQVRsI1la2JjTDO1kWGTGxhDxrJaaEVqomm1mpZlpZSoIUOUOowxDUxjWmRZqUUmEqIxxjRoUjTGN1TCtAoCTQQQk7E1GwAxLDALsSMsAJZlWSAiogZEZDUNKGAh0I2BgQEQFtAEYIwxQWQBARAcAAwQAAAYgwACAAwZBMg/0KW7aHgfX3kAAAAASUVORK5CYII="
            placeholder="blur"
          />
          <div className='col-span-3 h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]' />
          <div className='col-span-3 flex flex-row justify-between items-center'>
            <div className="w-[38%] h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
            <div className="w-[61%] h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
          </div>
          <div className='col-span-4 w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]' />
        </div>
      </ProfileSection>
      <ProfileSection title='Social Media' >
        <div className='flex flex-col gap-[16px]'>
          <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
          <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
          <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
        </div>
      </ProfileSection>
      <ProfileSection title='Biography'>
        <div className="flex flex-col justify-between grow">
          <div className="w-[38%] h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
          <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
          <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
          <div className="w-[61%] h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
        </div>
      </ProfileSection>
    </div>
  )
}

export const EventItemSkeleton: React.FC = () => {
  return (
    <div className="relative flex flex-col gap-y-[8px] w-full rounded-[16px]">
      <Image
        className="shrink-0 w-full h-[312px] rounded-[16px] object-cover select-none pointer-events-none"
        src={DefaultSpeaker}
        alt=""
        // layout="fill"
        width={586}
        height={293}
        draggable={false}
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAqFJREFUGBkFwVFRQEEQBLHM1vOvBzN8YuOaZD+/fwAKBDIg2IbBzIBBIElCFcABwABhABgCAAAAAAAGcACIpjERASABKUAAGgAMBm5rIgAAoIhAClBEagXQoGEwfTALgCAAYASIgRhGS4w0AAvfAGCVAQhpBMAsMJoFTADSAL5BRmJQARSBAYoZsdYMkIYZAXwTAAJIEgQ0wCyxLZbYMAwIwHcEYaSYYgWUARDYxLBRNgDYAN/WgpYQCFTJEGCwiW0J24gBDIBvGDUSpkRllUQAMDBsUzOLYTAYfCcg0UhKUVpUwcAMsxltw8CwkQG+E2KKpIiUUtUCQNswNhu0bQADzHwDW4WIeIpUtVTAYJjNZjPbMtkG2Ba+E2JK1ZMixVNlBWA2m2Yz29q22WI2AL4jjUR03pOeUkqpWLCNMZhls2yGzKzBvmlQSunV1RPpKVUtGGw2m63NLZtlMzAYfbckoGiilZ6qtxIFNs1ms3XbW3cxYwxG+AamFK9Or1ZKb1WtFNiYzY311t3e3CKbAcy+ExLR6dW8816p9ZQS0GzM225ZLasNloFhvkFYnmis1Dy9lVLVYNPcWG+7aUyLbBs0U99VrNLxWB2vVmnSU4JpxptbVitZbdhqMNp8YwpSq0lNq5VS1YKBQctqtShttcGA9k0g0LSiZbVSSgkGxtaYptk0jQWD0TcIwBjVaqyUUgKMzUpbrVZrqzVsoDbfBFK0mkZaDQVRsI1la2JjTDO1kWGTGxhDxrJaaEVqomm1mpZlpZSoIUOUOowxDUxjWmRZqUUmEqIxxjRoUjTGN1TCtAoCTQQQk7E1GwAxLDALsSMsAJZlWSAiogZEZDUNKGAh0I2BgQEQFtAEYIwxQWQBARAcAAwQAAAYgwACAAwZBMg/0KW7aHgfX3kAAAAASUVORK5CYII="
        placeholder="blur"
      />
      <div className="w-[38%] h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
      <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
      <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
      <div className="w-[61%] h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
    </div>
  )
}

export const EventDetailSkeleton: React.FC = () => {
  return (
    <div className='flex flex-col gap-y-[32px] w-full'>
      <ProfileSection className='grid grid-cols-1 md:grid-cols-2 gap-[32px] items-center'>
        <Image
          className='w-full max-w-[330px] rounded-[16px]'
          src={DefaultSpeaker}
          alt=""
          // layout="fill"
          width={586}
          height={293}
          draggable={false}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAAXNSR0IArs4c6QAAAqFJREFUGBkFwVFRQEEQBLHM1vOvBzN8YuOaZD+/fwAKBDIg2IbBzIBBIElCFcABwABhABgCAAAAAAAGcACIpjERASABKUAAGgAMBm5rIgAAoIhAClBEagXQoGEwfTALgCAAYASIgRhGS4w0AAvfAGCVAQhpBMAsMJoFTADSAL5BRmJQARSBAYoZsdYMkIYZAXwTAAJIEgQ0wCyxLZbYMAwIwHcEYaSYYgWUARDYxLBRNgDYAN/WgpYQCFTJEGCwiW0J24gBDIBvGDUSpkRllUQAMDBsUzOLYTAYfCcg0UhKUVpUwcAMsxltw8CwkQG+E2KKpIiUUtUCQNswNhu0bQADzHwDW4WIeIpUtVTAYJjNZjPbMtkG2Ba+E2JK1ZMixVNlBWA2m2Yz29q22WI2AL4jjUR03pOeUkqpWLCNMZhls2yGzKzBvmlQSunV1RPpKVUtGGw2m63NLZtlMzAYfbckoGiilZ6qtxIFNs1ms3XbW3cxYwxG+AamFK9Or1ZKb1WtFNiYzY311t3e3CKbAcy+ExLR6dW8816p9ZQS0GzM225ZLasNloFhvkFYnmis1Dy9lVLVYNPcWG+7aUyLbBs0U99VrNLxWB2vVmnSU4JpxptbVitZbdhqMNp8YwpSq0lNq5VS1YKBQctqtShttcGA9k0g0LSiZbVSSgkGxtaYptk0jQWD0TcIwBjVaqyUUgKMzUpbrVZrqzVsoDbfBFK0mkZaDQVRsI1la2JjTDO1kWGTGxhDxrJaaEVqomm1mpZlpZSoIUOUOowxDUxjWmRZqUUmEqIxxjRoUjTGN1TCtAoCTQQQk7E1GwAxLDALsSMsAJZlWSAiogZEZDUNKGAh0I2BgQEQFtAEYIwxQWQBARAcAAwQAAAYgwACAAwZBMg/0KW7aHgfX3kAAAAASUVORK5CYII="
          placeholder="blur" />
        <div className='flex flex-col gap-y-[8px]'>
          <div className="w-[38%] h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
          <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
          <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
          <div className="w-[61%] h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
        </div>
      </ProfileSection>
      <div className='flex flex-col gap-y-[8px]'>
        <div className="w-4/5 md:w-[65.65%] font-black text-[32px] sm:text-[44px] leading-[39.01px] sm:leading-[52.8px] tracking-[0.03em] text-transparent bg-[linear-gradient(88.99deg,#08071B_5.32%,#3F4F96_30.04%,#1D77B0_75.73%,#6BC8FC_97.32%)] bg-clip-text">
          About
        </div>
        <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
        <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
      </div>
    </div>
  )
}

export const ProfileMessagesSkeleton: React.FC = () => {
  return <div className='w-full flex flex-col gap-y-[8px]'>
    <div className="w-[38%] h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
    <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
    <div className="w-full h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
    <div className="w-[61%] h-[16px] bg-[rgba(0,0,0,0.06)] rounded-[4px]" />
  </div>
}

export { TeamItemSkeleton, TeamSectionSkeleton, MemberItemSkeleton, MemberSectionSkeleton } from './people'