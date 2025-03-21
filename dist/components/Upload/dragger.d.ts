import React, { FC } from 'react';
import './style.scss';
interface DraggerProps {
    onFile: (files: FileList) => void;
    children: React.ReactNode;
}
export declare const Dragger: FC<DraggerProps>;
export default Dragger;
