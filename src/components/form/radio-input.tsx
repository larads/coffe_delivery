import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'

type RadioInputProps = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean
}

export const RadioInput = forwardRef(function RadioInput(
  { children, isSelected, ...props }: RadioInputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <div
      data-state={isSelected}
      className="px-2 py-4 w-full flex items-center gap-3 bg-base-button text-base-text uppercase text-xxs rounded-md border border-tranparent data-[state=true]:bg-purple-100 data-[state=true]:border-purple-900 hover:bg-base-hover"
    >
      <input type="radio" ref={ref} className="" {...props} />
      {children}
    </div>
  )
})
