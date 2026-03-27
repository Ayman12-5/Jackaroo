import React from "react"
import { cn } from "@/src/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}

export function PageHeader({ title, description, className, children }: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-4 pb-8 pt-6 md:pt-10", className)}>
      <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}
