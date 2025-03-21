import React, { FC } from 'react';
import './style.scss';
export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';
export interface UploadFile {
    uid: string;
    size: number;
    name: string;
    status?: UploadFileStatus;
    percent?: number;
    raw?: File;
    response?: any;
    error?: any;
}
export interface UploadProps {
    action: string;
    defaultList?: UploadFile[];
    beforeUpload?: (file: File) => boolean | Promise<File>;
    onProgress?: (percent: number, file: File) => void;
    onSuccess?: (data: any, file: File) => void;
    onError?: (error: any, file: File) => void;
    onRemove?: (file: UploadFile) => void;
    onChange?: (file: File) => void;
    headers?: {
        [key: string]: any;
    };
    name?: string;
    data?: {
        [key: string]: any;
    };
    withCredentials?: boolean;
    accept?: string;
    multiple?: boolean;
    drag?: boolean;
    children?: React.ReactNode;
}
export declare const Upload: FC<UploadProps>;
export default Upload;
