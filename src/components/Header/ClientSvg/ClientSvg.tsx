import React from 'react';
const ClientSvg = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 16.749C17.416 16.749 19.3745 14.7905 19.3745 12.3745C19.3745 9.95853 17.416 8 15 8C12.584 8 10.6255 9.95853 10.6255 12.3745C10.6255 14.7905 12.584 16.749 15 16.749Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21.75 23.1119C20.7387 20.2513 18.0341 18.3387 15 18.3387C11.9659 18.3387 9.26125 20.2513 8.25 23.1119" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
};

export { ClientSvg };