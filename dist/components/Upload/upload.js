var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react';
import axios from 'axios';
import Dragger from './dragger';
import UploadList from './uploadList';
import './style.scss';
export var Upload = function (props) {
    var children = props.children, action = props.action, accept = props.accept, multiple = props.multiple, drag = props.drag, headers = props.headers, name = props.name, data = props.data, withCredentials = props.withCredentials, defaultList = props.defaultList, onRemove = props.onRemove, beforeUpload = props.beforeUpload, onProgress = props.onProgress, onError = props.onError, onSuccess = props.onSuccess, onChange = props.onChange;
    var fileInput = useRef(null);
    var _a = useState(defaultList || []), fileList = _a[0], setFileList = _a[1];
    // 更新file list
    var updateFileList = function (updateFile, updateObj) {
        setFileList(function (prevList) {
            return prevList.map(function (file) {
                if (file.uid === updateFile.uid) {
                    return __assign(__assign({}, file), updateObj);
                }
                else {
                    return file;
                }
            });
        });
    };
    var handleClick = function () {
        if (fileInput.current) {
            fileInput.current.click();
        }
    };
    var uploadFiles = function (files) {
        var postFiles = Array.from(files); // 转数组
        postFiles.forEach(function (file) {
            // 没有 beforeUpload
            if (!beforeUpload) {
                post(file);
            }
            else {
                // 有 beforeUpload
                var result = beforeUpload(file);
                if (result && result instanceof Promise) {
                    result.then(function (processedFile) {
                        post(processedFile);
                    });
                }
                else if (result !== false) {
                    post(file);
                }
            }
        });
    };
    var post = function (file) {
        var _file = {
            uid: Date.now() + 'upload-file',
            status: 'ready',
            name: file.name,
            size: file.size,
            percent: 0,
            raw: file,
        };
        setFileList(function (prevList) {
            return __spreadArray([_file], prevList, true);
        });
        var formData = new FormData(); // 使用FormData获取文件数据
        formData.append(name || 'file', file);
        if (data) {
            Object.keys(data).forEach(function (key) {
                formData.append(key, data[key]);
            });
        }
        // 使用axios第三方库进行文件上传
        axios
            .post(action, formData, {
            headers: __assign(__assign({}, headers), { 'Content-Type': 'multipart/form-data' }),
            withCredentials: withCredentials,
            // 上传进度函数, axios提供
            onUploadProgress: function (e) {
                if (typeof e.total === 'undefined')
                    return;
                var percent = Math.round((e.loaded * 100) / e.total) || 0;
                if (percent < 100) {
                    updateFileList(_file, { percent: percent, status: 'uploading' });
                    if (onProgress) {
                        // 执行传入的onProgress
                        onProgress(percent, file);
                    }
                }
            },
        })
            .then(function (res) {
            updateFileList(_file, { status: 'success', response: res.data });
            // 执行上传成功函数：onSuccess
            if (onSuccess) {
                onSuccess(res.data, file);
            }
            onChange && onChange(file);
        })
            .catch(function (err) {
            updateFileList(_file, { status: 'error', error: err });
            // 执行上传失败函数;onError
            if (onError) {
                onError(err, file);
                onChange && onChange(file);
            }
        });
    };
    var handleFileChange = function (e) {
        // 获取上传的文件
        var files = e.target.files;
        // 如果不存在，则直接return
        if (!files)
            return;
        // 处理文件上传
        uploadFiles(files);
        // 清空文件
        if (fileInput.current) {
            fileInput.current.value = '';
        }
    };
    console.log('file', fileList);
    var handleRemove = function (file) {
        setFileList(function (prevList) {
            return prevList.filter(function (item) { return item.uid !== file.uid; });
        });
        if (onRemove) {
            onRemove(file);
        }
    };
    return (React.createElement("div", { className: "curry-upload-component" },
        React.createElement("div", { className: "curry-upload-input", style: { display: 'inline-block' }, onClick: handleClick },
            drag ? (React.createElement(Dragger, { onFile: function (files) {
                    uploadFiles(files);
                } }, children)) : (children),
            React.createElement("input", { className: "curry-file-input", style: { display: 'none' }, ref: fileInput, onChange: handleFileChange, type: "file", accept: accept, multiple: multiple })),
        React.createElement(UploadList, { fileList: fileList, onRemove: handleRemove })));
};
// @ts-ignore
Upload.defaultProps = {
    name: 'file',
};
export default Upload;
