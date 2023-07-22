import { clsx } from 'clsx';

export interface UseWheelProps {
    readonly className?: string;
}

export interface UseWheelReturn {
    readonly className: string;
}

export function useWheel(props: UseWheelProps): UseWheelReturn {
    const {
        className: classNameProp
    } = props;

    const className = clsx(
        'wheel',
        classNameProp
    );

    return {
        className
    };
}
