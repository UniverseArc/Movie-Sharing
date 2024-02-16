
import React from 'react';

const SelectSvg = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1.71429 4.01903e-07L6 3.75L10.2857 2.72343e-08L12 0.75L6 6L-2.29485e-07 0.75L1.71429 4.01903e-07Z" fill="#434343" />
        </svg>
    )
};

export { SelectSvg };