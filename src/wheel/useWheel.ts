import { clsx } from 'clsx';

export interface UseWheelProps {
    readonly className?: string;
}

export interface UseWheelReturn {
    readonly className: string;
}

// eslint-disable-next-line @eslint-react/no-unnecessary-use-prefix -- a hook in the public API, so that it can call hooks later without breaking its callers
export function useWheel(props: UseWheelProps): UseWheelReturn {
    const {
        className: classNameProp,
    } = props;

    const className = clsx(
        classNameProp,
        'wheel',
    );

    return {
        className,
    };
}
