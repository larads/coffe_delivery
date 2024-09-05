'use client'
import {
  useState,
  FocusEvent,
  LegacyRef,
  forwardRef,
  InputHTMLAttributes,
} from 'react'
import { FieldError } from 'react-hook-form'

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: FieldError
}

export const TextInput = forwardRef(function TextInput(
  { error, onFocus, onBlur, ...props }: TextInputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    onBlur?.(event)
  }

  return (
    <div
      className="flex items-center justify-between"
      data-state={isFocused ? 'focused' : 'blurred'}
    >
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full bg-base-input p-4 text-sm leading-tight rounded-sm border border-base-button text-base-label placeholder:text-base-label outline-none focus:border-yellow-500"
        ref={ref}
        {...props}
      />

      {error?.message ? (
        <span className="text-alert" role="alert">
          {error.message}
        </span>
      ) : null}
    </div>
  )
})
