import * as React from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-serif tracking-wide',
    {
        variants: {
            variant: {
                default:
                    'bg-wood text-cream hover:bg-wood/90 shadow-md',
                outline:
                    'border border-wood text-wood bg-transparent hover:bg-wood/10',
                ghost: 'hover:bg-wood/10 text-wood',
                link: 'text-wood underline-offset-4 hover:underline',
                ocean: 'bg-ocean text-white hover:bg-ocean/90 shadow-md',
            },
            size: {
                default: 'h-10 px-8 py-2',
                sm: 'h-9 px-4 rounded-md',
                lg: 'h-12 px-10 text-base',
                icon: 'h-9 w-9',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
