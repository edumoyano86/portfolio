import * as React from "react"
import type { LucideProps } from "lucide-react"

export const TiktokIcon = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    <path d="M15 8a4 4 0 1 0 0-8" />
    <path d="M15 2v10a5 5 0 0 1-5 5" />
  </svg>
)
