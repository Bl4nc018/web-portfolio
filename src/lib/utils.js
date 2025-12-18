import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge';

/* Tailwind merge configuration to start working with classname lists */
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};