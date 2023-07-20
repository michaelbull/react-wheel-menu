import { clsx } from 'clsx';

export interface UseCircleMenuProps {
    readonly className?: string;
}

export interface UseCircleMenuReturn {
    readonly className: string;
}

export function useCircleMenu(props: UseCircleMenuProps): UseCircleMenuReturn {
    const {
        className: classNameProp
    } = props;

    const className = clsx(
        'circle-menu',
        classNameProp
    );

    return {
        className
    };
}
