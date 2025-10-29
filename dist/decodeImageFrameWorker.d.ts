import type { Types as CoreTypes } from '@cornerstonejs/core';
import type { ByteArray } from 'dicom-parser';
import type { DICOMLoaderImageOptions, LoaderDecodeOptions } from './types';
export declare function decodeImageFrame(imageFrame: CoreTypes.IImageFrame, transferSyntax: string, pixelData: ByteArray, decodeConfig: LoaderDecodeOptions, options: DICOMLoaderImageOptions, callbackFn?: (image: CoreTypes.IImageFrame) => void): Promise<CoreTypes.IImageFrame>;
