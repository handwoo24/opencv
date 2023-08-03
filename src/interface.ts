export interface Scalar {
  red: number
  green: number
  blue: number
}

export interface Mat {
  rows: number
  cols: number
  data: Uint8Array
  delete: () => void
  roi: (rect: Rect) => Mat
  copyTo: (dst: Mat) => void
  fill: (value: number) => void
  setTo: (scalar: Scalar) => void
}

export interface MatVector {
  size: () => number
  get: (index: number) => Mat
  delete: () => void
  push_back: (mat: Mat) => void
}

export interface Size {
  width: number
  height: number
}

export interface Rect {
  x: number
  y: number
  width: number
  height: number
}

export interface Cv {
  ACCESS_FAST: number
  ACCESS_MASK: number
  ACCESS_READ: number
  ACCESS_RW: number
  ACCESS_WRITE: number
  ADAPTIVE_THRESH_GAUSSIAN_C: number
  ADAPTIVE_THRESH_MEAN_C: number
  AKAZE: () => unknown
  AKAZE_DESCRIPTOR_KAZE: number
  AKAZE_DESCRIPTOR_KAZE_UPRIGHT: number
  AKAZE_DESCRIPTOR_MLDB: number
  AKAZE_DESCRIPTOR_MLDB_UPRIGHT: number
  AgastFeatureDetector: () => unknown
  AgastFeatureDetector_AGAST_5_8: number
  AgastFeatureDetector_AGAST_7_12d: number
  AgastFeatureDetector_AGAST_7_12s: number
  AgastFeatureDetector_NONMAX_SUPPRESSION: number
  AgastFeatureDetector_OAST_9_16: number
  AgastFeatureDetector_THRESHOLD: number
  Algorithm: () => unknown
  AlignMTB: () => unknown
  BFMatcher: () => unknown
  BORDER_CONSTANT: number
  BORDER_DEFAULT: number
  BORDER_ISOLATED: number
  BORDER_REFLECT: number
  BORDER_REFLECT101: number
  BORDER_REFLECT_101: number
  BORDER_REPLICATE: number
  BORDER_TRANSPARENT: number
  BORDER_WRAP: number
  BRISK: () => unknown
  BackgroundSubtractor: () => unknown
  BackgroundSubtractorMOG2: () => unknown
  BadAlign: number
  BadAlphaChannel: number
  BadCOI: number
  BadCallBack: number
  BadDataPtr: number
  BadDepth: number
  BadImageSize: number
  BadModelOrChSeq: number
  BadNumChannel1U: number
  BadNumChannels: number
  BadOffset: number
  BadOrder: number
  BadOrigin: number
  BadROISize: number
  BadStep: number
  BadTileSize: number
  BindingError: () => unknown
  CALIB_CB_ACCURACY: number
  CALIB_CB_ADAPTIVE_THRESH: number
  CALIB_CB_ASYMMETRIC_GRID: number
  CALIB_CB_CLUSTERING: number
  CALIB_CB_EXHAUSTIVE: number
  CALIB_CB_FAST_CHECK: number
  CALIB_CB_FILTER_QUADS: number
  CALIB_CB_LARGER: number
  CALIB_CB_MARKER: number
  CALIB_CB_NORMALIZE_IMAGE: number
  CALIB_CB_SYMMETRIC_GRID: number
  CALIB_CHECK_COND: number
  CALIB_FIX_ASPECT_RATIO: number
  CALIB_FIX_FOCAL_LENGTH: number
  CALIB_FIX_INTRINSIC: number
  CALIB_FIX_K1: number
  CALIB_FIX_K2: number
  CALIB_FIX_K3: number
  CALIB_FIX_K4: number
  CALIB_FIX_K5: number
  CALIB_FIX_K6: number
  CALIB_FIX_PRINCIPAL_POINT: number
  CALIB_FIX_S1_S2_S3_S4: number
  CALIB_FIX_SKEW: number
  CALIB_FIX_TANGENT_DIST: number
  CALIB_FIX_TAUX_TAUY: number
  CALIB_HAND_EYE_ANDREFF: number
  CALIB_HAND_EYE_DANIILIDIS: number
  CALIB_HAND_EYE_HORAUD: number
  CALIB_HAND_EYE_PARK: number
  CALIB_HAND_EYE_TSAI: number
  CALIB_NINTRINSIC: number
  CALIB_RATIONAL_MODEL: number
  CALIB_RECOMPUTE_EXTRINSIC: number
  CALIB_ROBOT_WORLD_HAND_EYE_LI: number
  CALIB_ROBOT_WORLD_HAND_EYE_SHAH: number
  CALIB_SAME_FOCAL_LENGTH: number
  CALIB_THIN_PRISM_MODEL: number
  CALIB_TILTED_MODEL: number
  CALIB_USE_EXTRINSIC_GUESS: number
  CALIB_USE_INTRINSIC_GUESS: number
  CALIB_USE_LU: number
  CALIB_USE_QR: number
  CALIB_ZERO_DISPARITY: number
  CALIB_ZERO_TANGENT_DIST: number
  CASCADE_DO_CANNY_PRUNING: number
  CASCADE_DO_ROUGH_SEARCH: number
  CASCADE_FIND_BIGGEST_OBJECT: number
  CASCADE_SCALE_IMAGE: number
  CCL_BBDT: number
  CCL_BOLELLI: number
  CCL_DEFAULT: number
  CCL_GRANA: number
  CCL_SAUF: number
  CCL_SPAGHETTI: number
  CCL_WU: number
  CC_STAT_AREA: number
  CC_STAT_HEIGHT: number
  CC_STAT_LEFT: number
  CC_STAT_MAX: number
  CC_STAT_TOP: number
  CC_STAT_WIDTH: number
  CHAIN_APPROX_NONE: number
  CHAIN_APPROX_SIMPLE: number
  CHAIN_APPROX_TC89_KCOS: number
  CHAIN_APPROX_TC89_L1: number
  CLAHE: () => unknown
  CMP_EQ: number
  CMP_GE: number
  CMP_GT: number
  CMP_LE: number
  CMP_LT: number
  CMP_NE: number
  COLORMAP_AUTUMN: number
  COLORMAP_BONE: number
  COLORMAP_CIVIDIS: number
  COLORMAP_COOL: number
  COLORMAP_DEEPGREEN: number
  COLORMAP_HOT: number
  COLORMAP_HSV: number
  COLORMAP_INFERNO: number
  COLORMAP_JET: number
  COLORMAP_MAGMA: number
  COLORMAP_OCEAN: number
  COLORMAP_PARULA: number
  COLORMAP_PINK: number
  COLORMAP_PLASMA: number
  COLORMAP_RAINBOW: number
  COLORMAP_SPRING: number
  COLORMAP_SUMMER: number
  COLORMAP_TURBO: number
  COLORMAP_TWILIGHT: number
  COLORMAP_TWILIGHT_SHIFTED: number
  COLORMAP_VIRIDIS: number
  COLORMAP_WINTER: number
  COLOR_BGR2BGR555: number
  COLOR_BGR2BGR565: number
  COLOR_BGR2BGRA: number
  COLOR_BGR2GRAY: number
  COLOR_BGR2HLS: number
  COLOR_BGR2HLS_FULL: number
  COLOR_BGR2HSV: number
  COLOR_BGR2HSV_FULL: number
  COLOR_BGR2Lab: number
  COLOR_BGR2Luv: number
  COLOR_BGR2RGB: number
  COLOR_BGR2RGBA: number
  COLOR_BGR2XYZ: number
  COLOR_BGR2YCrCb: number
  COLOR_BGR2YUV: number
  COLOR_BGR2YUV_I420: number
  COLOR_BGR2YUV_IYUV: number
  COLOR_BGR2YUV_YV12: number
  COLOR_BGR5552BGR: number
  COLOR_BGR5552BGRA: number
  COLOR_BGR5552GRAY: number
  COLOR_BGR5552RGB: number
  COLOR_BGR5552RGBA: number
  COLOR_BGR5652BGR: number
  COLOR_BGR5652BGRA: number
  COLOR_BGR5652GRAY: number
  COLOR_BGR5652RGB: number
  COLOR_BGR5652RGBA: number
  COLOR_BGRA2BGR: number
  COLOR_BGRA2BGR555: number
  COLOR_BGRA2BGR565: number
  COLOR_BGRA2GRAY: number
  COLOR_BGRA2RGB: number
  COLOR_BGRA2RGBA: number
  COLOR_BGRA2YUV_I420: number
  COLOR_BGRA2YUV_IYUV: number
  COLOR_BGRA2YUV_YV12: number
  COLOR_BayerBG2BGR: number
  COLOR_BayerBG2BGRA: number
  COLOR_BayerBG2BGR_EA: number
  COLOR_BayerBG2BGR_VNG: number
  COLOR_BayerBG2GRAY: number
  COLOR_BayerBG2RGB: number
  COLOR_BayerBG2RGBA: number
  COLOR_BayerBG2RGB_EA: number
  COLOR_BayerBG2RGB_VNG: number
  COLOR_BayerBGGR2BGR: number
  COLOR_BayerBGGR2BGRA: number
  COLOR_BayerBGGR2BGR_EA: number
  COLOR_BayerBGGR2BGR_VNG: number
  COLOR_BayerBGGR2GRAY: number
  COLOR_BayerBGGR2RGB: number
  COLOR_BayerBGGR2RGBA: number
  COLOR_BayerBGGR2RGB_EA: number
  COLOR_BayerBGGR2RGB_VNG: number
  COLOR_BayerGB2BGR: number
  COLOR_BayerGB2BGRA: number
  COLOR_BayerGB2BGR_EA: number
  COLOR_BayerGB2BGR_VNG: number
  COLOR_BayerGB2GRAY: number
  COLOR_BayerGB2RGB: number
  COLOR_BayerGB2RGBA: number
  COLOR_BayerGB2RGB_EA: number
  COLOR_BayerGB2RGB_VNG: number
  COLOR_BayerGBRG2BGR: number
  COLOR_BayerGBRG2BGRA: number
  COLOR_BayerGBRG2BGR_EA: number
  COLOR_BayerGBRG2BGR_VNG: number
  COLOR_BayerGBRG2GRAY: number
  COLOR_BayerGBRG2RGB: number
  COLOR_BayerGBRG2RGBA: number
  COLOR_BayerGBRG2RGB_EA: number
  COLOR_BayerGBRG2RGB_VNG: number
  COLOR_BayerGR2BGR: number
  COLOR_BayerGR2BGRA: number
  COLOR_BayerGR2BGR_EA: number
  COLOR_BayerGR2BGR_VNG: number
  COLOR_BayerGR2GRAY: number
  COLOR_BayerGR2RGB: number
  COLOR_BayerGR2RGBA: number
  COLOR_BayerGR2RGB_EA: number
  COLOR_BayerGR2RGB_VNG: number
  COLOR_BayerGRBG2BGR: number
  COLOR_BayerGRBG2BGRA: number
  COLOR_BayerGRBG2BGR_EA: number
  COLOR_BayerGRBG2BGR_VNG: number
  COLOR_BayerGRBG2GRAY: number
  COLOR_BayerGRBG2RGB: number
  COLOR_BayerGRBG2RGBA: number
  COLOR_BayerGRBG2RGB_EA: number
  COLOR_BayerGRBG2RGB_VNG: number
  COLOR_BayerRG2BGR: number
  COLOR_BayerRG2BGRA: number
  COLOR_BayerRG2BGR_EA: number
  COLOR_BayerRG2BGR_VNG: number
  COLOR_BayerRG2GRAY: number
  COLOR_BayerRG2RGB: number
  COLOR_BayerRG2RGBA: number
  COLOR_BayerRG2RGB_EA: number
  COLOR_BayerRG2RGB_VNG: number
  COLOR_BayerRGGB2BGR: number
  COLOR_BayerRGGB2BGRA: number
  COLOR_BayerRGGB2BGR_EA: number
  COLOR_BayerRGGB2BGR_VNG: number
  COLOR_BayerRGGB2GRAY: number
  COLOR_BayerRGGB2RGB: number
  COLOR_BayerRGGB2RGBA: number
  COLOR_BayerRGGB2RGB_EA: number
  COLOR_BayerRGGB2RGB_VNG: number
  COLOR_COLORCVT_MAX: number
  COLOR_GRAY2BGR: number
  COLOR_GRAY2BGR555: number
  COLOR_GRAY2BGR565: number
  COLOR_GRAY2BGRA: number
  COLOR_GRAY2RGB: number
  COLOR_GRAY2RGBA: number
  COLOR_HLS2BGR: number
  COLOR_HLS2BGR_FULL: number
  COLOR_HLS2RGB: number
  COLOR_HLS2RGB_FULL: number
  COLOR_HSV2BGR: number
  COLOR_HSV2BGR_FULL: number
  COLOR_HSV2RGB: number
  COLOR_HSV2RGB_FULL: number
  COLOR_LBGR2Lab: number
  COLOR_LBGR2Luv: number
  COLOR_LRGB2Lab: number
  COLOR_LRGB2Luv: number
  COLOR_Lab2BGR: number
  COLOR_Lab2LBGR: number
  COLOR_Lab2LRGB: number
  COLOR_Lab2RGB: number
  COLOR_Luv2BGR: number
  COLOR_Luv2LBGR: number
  COLOR_Luv2LRGB: number
  COLOR_Luv2RGB: number
  COLOR_RGB2BGR: number
  COLOR_RGB2BGR555: number
  COLOR_RGB2BGR565: number
  COLOR_RGB2BGRA: number
  COLOR_RGB2GRAY: number
  COLOR_RGB2HLS: number
  COLOR_RGB2HLS_FULL: number
  COLOR_RGB2HSV: number
  COLOR_RGB2HSV_FULL: number
  COLOR_RGB2Lab: number
  COLOR_RGB2Luv: number
  COLOR_RGB2RGBA: number
  COLOR_RGB2XYZ: number
  COLOR_RGB2YCrCb: number
  COLOR_RGB2YUV: number
  COLOR_RGB2YUV_I420: number
  COLOR_RGB2YUV_IYUV: number
  COLOR_RGB2YUV_YV12: number
  COLOR_RGBA2BGR: number
  COLOR_RGBA2BGR555: number
  COLOR_RGBA2BGR565: number
  COLOR_RGBA2BGRA: number
  COLOR_RGBA2GRAY: number
  COLOR_RGBA2RGB: number
  COLOR_RGBA2YUV_I420: number
  COLOR_RGBA2YUV_IYUV: number
  COLOR_RGBA2YUV_YV12: number
  COLOR_RGBA2mRGBA: number
  COLOR_XYZ2BGR: number
  COLOR_XYZ2RGB: number
  COLOR_YCrCb2BGR: number
  COLOR_YCrCb2RGB: number
  COLOR_YUV2BGR: number
  COLOR_YUV2BGRA_I420: number
  COLOR_YUV2BGRA_IYUV: number
  COLOR_YUV2BGRA_NV12: number
  COLOR_YUV2BGRA_NV21: number
  COLOR_YUV2BGRA_UYNV: number
  COLOR_YUV2BGRA_UYVY: number
  COLOR_YUV2BGRA_Y422: number
  COLOR_YUV2BGRA_YUNV: number
  COLOR_YUV2BGRA_YUY2: number
  COLOR_YUV2BGRA_YUYV: number
  COLOR_YUV2BGRA_YV12: number
  COLOR_YUV2BGRA_YVYU: number
  COLOR_YUV2BGR_I420: number
  COLOR_YUV2BGR_IYUV: number
  COLOR_YUV2BGR_NV12: number
  COLOR_YUV2BGR_NV21: number
  COLOR_YUV2BGR_UYNV: number
  COLOR_YUV2BGR_UYVY: number
  COLOR_YUV2BGR_Y422: number
  COLOR_YUV2BGR_YUNV: number
  COLOR_YUV2BGR_YUY2: number
  COLOR_YUV2BGR_YUYV: number
  COLOR_YUV2BGR_YV12: number
  COLOR_YUV2BGR_YVYU: number
  COLOR_YUV2GRAY_420: number
  COLOR_YUV2GRAY_I420: number
  COLOR_YUV2GRAY_IYUV: number
  COLOR_YUV2GRAY_NV12: number
  COLOR_YUV2GRAY_NV21: number
  COLOR_YUV2GRAY_UYNV: number
  COLOR_YUV2GRAY_UYVY: number
  COLOR_YUV2GRAY_Y422: number
  COLOR_YUV2GRAY_YUNV: number
  COLOR_YUV2GRAY_YUY2: number
  COLOR_YUV2GRAY_YUYV: number
  COLOR_YUV2GRAY_YV12: number
  COLOR_YUV2GRAY_YVYU: number
  COLOR_YUV2RGB: number
  COLOR_YUV2RGBA_I420: number
  COLOR_YUV2RGBA_IYUV: number
  COLOR_YUV2RGBA_NV12: number
  COLOR_YUV2RGBA_NV21: number
  COLOR_YUV2RGBA_UYNV: number
  COLOR_YUV2RGBA_UYVY: number
  COLOR_YUV2RGBA_Y422: number
  COLOR_YUV2RGBA_YUNV: number
  COLOR_YUV2RGBA_YUY2: number
  COLOR_YUV2RGBA_YUYV: number
  COLOR_YUV2RGBA_YV12: number
  COLOR_YUV2RGBA_YVYU: number
  COLOR_YUV2RGB_I420: number
  COLOR_YUV2RGB_IYUV: number
  COLOR_YUV2RGB_NV12: number
  COLOR_YUV2RGB_NV21: number
  COLOR_YUV2RGB_UYNV: number
  COLOR_YUV2RGB_UYVY: number
  COLOR_YUV2RGB_Y422: number
  COLOR_YUV2RGB_YUNV: number
  COLOR_YUV2RGB_YUY2: number
  COLOR_YUV2RGB_YUYV: number
  COLOR_YUV2RGB_YV12: number
  COLOR_YUV2RGB_YVYU: number
  COLOR_YUV420p2BGR: number
  COLOR_YUV420p2BGRA: number
  COLOR_YUV420p2GRAY: number
  COLOR_YUV420p2RGB: number
  COLOR_YUV420p2RGBA: number
  COLOR_YUV420sp2BGR: number
  COLOR_YUV420sp2BGRA: number
  COLOR_YUV420sp2GRAY: number
  COLOR_YUV420sp2RGB: number
  COLOR_YUV420sp2RGBA: number
  COLOR_mRGBA2RGBA: number
  CONTOURS_MATCH_I1: number
  CONTOURS_MATCH_I2: number
  CONTOURS_MATCH_I3: number
  CORNER_REFINE_APRILTAG: number
  CORNER_REFINE_CONTOUR: number
  CORNER_REFINE_NONE: number
  CORNER_REFINE_SUBPIX: number
  COVAR_COLS: number
  COVAR_NORMAL: number
  COVAR_ROWS: number
  COVAR_SCALE: number
  COVAR_SCRAMBLED: number
  COVAR_USE_AVG: number
  COV_POLISHER: number
  CV_8S: number
  CV_8SC1: number
  CV_8SC2: number
  CV_8SC3: number
  CV_8SC4: number
  CV_8U: number
  CV_8UC1: number
  CV_8UC2: number
  CV_8UC3: number
  CV_8UC4: number
  CV_16S: number
  CV_16SC1: number
  CV_16SC2: number
  CV_16SC3: number
  CV_16SC4: number
  CV_16U: number
  CV_16UC1: number
  CV_16UC2: number
  CV_16UC3: number
  CV_16UC4: number
  CV_32F: number
  CV_32FC1: number
  CV_32FC2: number
  CV_32FC3: number
  CV_32FC4: number
  CV_32S: number
  CV_32SC1: number
  CV_32SC2: number
  CV_32SC3: number
  CV_32SC4: number
  CV_64F: number
  CV_64FC1: number
  CV_64FC2: number
  CV_64FC3: number
  CV_64FC4: number
  CV_MAT_DEPTH: () => unknown
  CalibrateCRF: () => unknown
  CalibrateDebevec: () => unknown
  CalibrateRobertson: () => unknown
  CamShift: () => unknown
  Canny: () => unknown
  Canny1: () => unknown
  CascadeClassifier: () => unknown
  CharVector: () => unknown
  Circle: () => unknown
  CirclesGridFinderParameters_ASYMMETRIC_GRID: number
  CirclesGridFinderParameters_SYMMETRIC_GRID: number
  DCT_INVERSE: number
  DCT_ROWS: number
  DECOMP_CHOLESKY: number
  DECOMP_EIG: number
  DECOMP_LU: number
  DECOMP_NORMAL: number
  DECOMP_QR: number
  DECOMP_SVD: number
  DFT_COMPLEX_INPUT: number
  DFT_COMPLEX_OUTPUT: number
  DFT_INVERSE: number
  DFT_REAL_OUTPUT: number
  DFT_ROWS: number
  DFT_SCALE: number
  DICT_4X4_50: number
  DICT_4X4_100: number
  DICT_4X4_250: number
  DICT_4X4_1000: number
  DICT_5X5_50: number
  DICT_5X5_100: number
  DICT_5X5_250: number
  DICT_5X5_1000: number
  DICT_6X6_50: number
  DICT_6X6_100: number
  DICT_6X6_250: number
  DICT_6X6_1000: number
  DICT_7X7_50: number
  DICT_7X7_100: number
  DICT_7X7_250: number
  DICT_7X7_1000: number
  DICT_APRILTAG_16h5: number
  DICT_APRILTAG_25h9: number
  DICT_APRILTAG_36h10: number
  DICT_APRILTAG_36h11: number
  DICT_ARUCO_MIP_36h12: number
  DICT_ARUCO_ORIGINAL: number
  DISOpticalFlow_PRESET_FAST: number
  DISOpticalFlow_PRESET_MEDIUM: number
  DISOpticalFlow_PRESET_ULTRAFAST: number
  DIST_C: number
  DIST_FAIR: number
  DIST_HUBER: number
  DIST_L1: number
  DIST_L2: number
  DIST_L12: number
  DIST_LABEL_CCOMP: number
  DIST_LABEL_PIXEL: number
  DIST_MASK_3: number
  DIST_MASK_5: number
  DIST_MASK_PRECISE: number
  DIST_USER: number
  DIST_WELSCH: number
  DMatchVector: () => unknown
  DMatchVectorVector: () => unknown
  DNN_BACKEND_CANN: number
  DNN_BACKEND_CUDA: number
  DNN_BACKEND_DEFAULT: number
  DNN_BACKEND_HALIDE: number
  DNN_BACKEND_INFERENCE_ENGINE: number
  DNN_BACKEND_OPENCV: number
  DNN_BACKEND_TIMVX: number
  DNN_BACKEND_VKCOM: number
  DNN_BACKEND_WEBNN: number
  DNN_LAYOUT_NCDHW: number
  DNN_LAYOUT_NCHW: number
  DNN_LAYOUT_ND: number
  DNN_LAYOUT_NDHWC: number
  DNN_LAYOUT_NHWC: number
  DNN_LAYOUT_PLANAR: number
  DNN_LAYOUT_UNKNOWN: number
  DNN_PMODE_CROP_CENTER: number
  DNN_PMODE_LETTERBOX: number
  DNN_PMODE_NULL: number
  DNN_TARGET_CPU: number
  DNN_TARGET_CPU_FP16: number
  DNN_TARGET_CUDA: number
  DNN_TARGET_CUDA_FP16: number
  DNN_TARGET_FPGA: number
  DNN_TARGET_HDDL: number
  DNN_TARGET_MYRIAD: number
  DNN_TARGET_NPU: number
  DNN_TARGET_OPENCL: number
  DNN_TARGET_OPENCL_FP16: number
  DNN_TARGET_VULKAN: number
  DescriptorMatcher: () => unknown
  DescriptorMatcher_BRUTEFORCE: number
  DescriptorMatcher_BRUTEFORCE_HAMMING: number
  DescriptorMatcher_BRUTEFORCE_HAMMINGLUT: number
  DescriptorMatcher_BRUTEFORCE_L1: number
  DescriptorMatcher_BRUTEFORCE_SL2: number
  DescriptorMatcher_FLANNBASED: number
  DoubleVector: () => unknown
  DrawMatchesFlags_DEFAULT: number
  DrawMatchesFlags_DRAW_OVER_OUTIMG: number
  DrawMatchesFlags_DRAW_RICH_KEYPOINTS: number
  DrawMatchesFlags_NOT_DRAW_SINGLE_POINTS: number
  ENUM_LOG_LEVEL_FORCE_INT: number
  FILLED: number
  FILTER_SCHARR: number
  FLOODFILL_FIXED_RANGE: number
  FLOODFILL_MASK_ONLY: number
  FM_7POINT: number
  FM_8POINT: number
  FM_LMEDS: number
  FM_RANSAC: number
  FONT_HERSHEY_COMPLEX: number
  FONT_HERSHEY_COMPLEX_SMALL: number
  FONT_HERSHEY_DUPLEX: number
  FONT_HERSHEY_PLAIN: number
  FONT_HERSHEY_SCRIPT_COMPLEX: number
  FONT_HERSHEY_SCRIPT_SIMPLEX: number
  FONT_HERSHEY_SIMPLEX: number
  FONT_HERSHEY_TRIPLEX: number
  FONT_ITALIC: number
  FaceRecognizerSF_FR_COSINE: number
  FaceRecognizerSF_FR_NORM_L2: number
  FastFeatureDetector: () => unknown
  FastFeatureDetector_FAST_N: number
  FastFeatureDetector_NONMAX_SUPPRESSION: number
  FastFeatureDetector_THRESHOLD: number
  FastFeatureDetector_TYPE_5_8: number
  FastFeatureDetector_TYPE_7_12: number
  FastFeatureDetector_TYPE_9_16: number
  Feature2D: () => unknown
  FileNode_EMPTY: number
  FileNode_FLOAT: number
  FileNode_FLOW: number
  FileNode_INT: number
  FileNode_MAP: number
  FileNode_NAMED: number
  FileNode_NONE: number
  FileNode_REAL: number
  FileNode_SEQ: number
  FileNode_STR: number
  FileNode_STRING: number
  FileNode_TYPE_MASK: number
  FileNode_UNIFORM: number
  FileStorage_APPEND: number
  FileStorage_BASE64: number
  FileStorage_FORMAT_AUTO: number
  FileStorage_FORMAT_JSON: number
  FileStorage_FORMAT_MASK: number
  FileStorage_FORMAT_XML: number
  FileStorage_FORMAT_YAML: number
  FileStorage_INSIDE_MAP: number
  FileStorage_MEMORY: number
  FileStorage_NAME_EXPECTED: number
  FileStorage_READ: number
  FileStorage_UNDEFINED: number
  FileStorage_VALUE_EXPECTED: number
  FileStorage_WRITE: number
  FileStorage_WRITE_BASE64: number
  FloatVector: () => unknown
  Formatter_FMT_C: number
  Formatter_FMT_CSV: number
  Formatter_FMT_DEFAULT: number
  Formatter_FMT_MATLAB: number
  Formatter_FMT_NUMPY: number
  Formatter_FMT_PYTHON: number
  GC_BGD: number
  GC_EVAL: number
  GC_EVAL_FREEZE_MODEL: number
  GC_FGD: number
  GC_INIT_WITH_MASK: number
  GC_INIT_WITH_RECT: number
  GC_PR_BGD: number
  GC_PR_FGD: number
  GEMM_1_T: number
  GEMM_2_T: number
  GEMM_3_T: number
  GFTTDetector: () => unknown
  GaussianBlur: () => unknown
  GpuApiCallError: number
  GpuNotSupported: number
  GraphicalCodeDetector: () => unknown
  HEAP8: Int8Array
  HEAP16: Int16Array
  HEAP32: Int32Array
  HEAPF32: Float32Array
  HEAPF64: Float64Array
  HEAPU8: Uint8Array
  HEAPU16: Uint16Array
  HEAPU32: Uint32Array
  HISTCMP_BHATTACHARYYA: number
  HISTCMP_CHISQR: number
  HISTCMP_CHISQR_ALT: number
  HISTCMP_CORREL: number
  HISTCMP_HELLINGER: number
  HISTCMP_INTERSECT: number
  HISTCMP_KL_DIV: number
  HOGDescriptor: () => unknown
  HOGDescriptor_DEFAULT_NLEVELS: number
  HOGDescriptor_DESCR_FORMAT_COL_BY_COL: number
  HOGDescriptor_DESCR_FORMAT_ROW_BY_ROW: number
  HOGDescriptor_L2Hys: number
  HOUGH_GRADIENT: number
  HOUGH_GRADIENT_ALT: number
  HOUGH_MULTI_SCALE: number
  HOUGH_PROBABILISTIC: number
  HOUGH_STANDARD: number
  HeaderIsNull: number
  HoughCircles: () => unknown
  HoughLines: () => unknown
  HoughLinesP: () => unknown
  INPAINT_NS: number
  INPAINT_TELEA: number
  INTERSECT_FULL: number
  INTERSECT_NONE: number
  INTERSECT_PARTIAL: number
  INTER_AREA: number
  INTER_BITS: number
  INTER_BITS2: number
  INTER_CUBIC: number
  INTER_LANCZOS4: number
  INTER_LINEAR: number
  INTER_LINEAR_EXACT: number
  INTER_MAX: number
  INTER_NEAREST: number
  INTER_NEAREST_EXACT: number
  INTER_TAB_SIZE: number
  INTER_TAB_SIZE2: number
  INT_MAX: number
  INT_MIN: number
  IntVector: () => unknown
  InternalError: () => unknown
  KAZE: () => unknown
  KAZE_DIFF_CHARBONNIER: number
  KAZE_DIFF_PM_G1: number
  KAZE_DIFF_PM_G2: number
  KAZE_DIFF_WEICKERT: number
  KMEANS_PP_CENTERS: number
  KMEANS_RANDOM_CENTERS: number
  KMEANS_USE_INITIAL_LABELS: number
  KeyPointVector: () => unknown
  LDR_SIZE: number
  LINE_4: number
  LINE_8: number
  LINE_AA: number
  LMEDS: number
  LOCAL_OPTIM_GC: number
  LOCAL_OPTIM_INNER_AND_ITER_LO: number
  LOCAL_OPTIM_INNER_LO: number
  LOCAL_OPTIM_NULL: number
  LOCAL_OPTIM_SIGMA: number
  LOG_LEVEL_DEBUG: number
  LOG_LEVEL_ERROR: number
  LOG_LEVEL_FATAL: number
  LOG_LEVEL_INFO: number
  LOG_LEVEL_SILENT: number
  LOG_LEVEL_VERBOSE: number
  LOG_LEVEL_WARNING: number
  LSD_REFINE_ADV: number
  LSD_REFINE_NONE: number
  LSD_REFINE_STD: number
  LSQ_POLISHER: number
  Laplacian: () => unknown
  MAGSAC: number
  MARKER_CROSS: number
  MARKER_DIAMOND: number
  MARKER_SQUARE: number
  MARKER_STAR: number
  MARKER_TILTED_CROSS: number
  MARKER_TRIANGLE_DOWN: number
  MARKER_TRIANGLE_UP: number
  MIXED_CLONE: number
  MONOCHROME_TRANSFER: number
  MORPH_BLACKHAT: number
  MORPH_CLOSE: number
  MORPH_CROSS: number
  MORPH_DILATE: number
  MORPH_ELLIPSE: number
  MORPH_ERODE: number
  MORPH_GRADIENT: number
  MORPH_HITMISS: number
  MORPH_OPEN: number
  MORPH_RECT: number
  MORPH_TOPHAT: number
  MOTION_AFFINE: number
  MOTION_EUCLIDEAN: number
  MOTION_HOMOGRAPHY: number
  MOTION_TRANSLATION: number
  MSER: () => unknown
  MaskIsTiled: number
  Mat: new (rows?: number, cols?: number, type?: number) => Mat
  MatVector: new () => MatVector
  Mat_AUTO_STEP: number
  Mat_CONTINUOUS_FLAG: number
  Mat_DEPTH_MASK: number
  Mat_MAGIC_MASK: number
  Mat_MAGIC_VAL: number
  Mat_SUBMATRIX_FLAG: number
  Mat_TYPE_MASK: number
  MergeDebevec: () => unknown
  MergeExposures: () => unknown
  MergeMertens: () => unknown
  MergeRobertson: () => unknown
  MinMaxLoc: () => unknown
  NEIGH_FLANN_KNN: number
  NEIGH_FLANN_RADIUS: number
  NEIGH_GRID: number
  NONE_POLISHER: number
  NORMAL_CLONE: number
  NORMCONV_FILTER: number
  NORM_HAMMING: number
  NORM_HAMMING2: number
  NORM_INF: number
  NORM_L1: number
  NORM_L2: number
  NORM_L2SQR: number
  NORM_MINMAX: number
  NORM_RELATIVE: number
  NORM_TYPE_MASK: number
  OPTFLOW_FARNEBACK_GAUSSIAN: number
  OPTFLOW_LK_GET_MIN_EIGENVALS: number
  OPTFLOW_USE_INITIAL_FLOW: number
  ORB: () => unknown
  ORB_FAST_SCORE: number
  ORB_HARRIS_SCORE: number
  OpenCLApiCallError: number
  OpenCLDoubleNotSupported: number
  OpenCLInitError: number
  OpenCLNoAMDBlasFft: number
  OpenGlApiCallError: number
  OpenGlNotSupported: number
  PCA_DATA_AS_COL: number
  PCA_DATA_AS_ROW: number
  PCA_USE_AVG: number
  PROJ_SPHERICAL_EQRECT: number
  PROJ_SPHERICAL_ORTHO: number
  Param_ALGORITHM: number
  Param_BOOLEAN: number
  Param_FLOAT: number
  Param_INT: number
  Param_MAT: number
  Param_MAT_VECTOR: number
  Param_REAL: number
  Param_SCALAR: number
  Param_STRING: number
  Param_UCHAR: number
  Param_UINT64: number
  Param_UNSIGNED_INT: number
  Point: () => unknown
  PointVector: () => unknown
  QRCodeDetector: () => unknown
  QRCodeDetectorAruco: () => unknown
  QRCodeDetectorAruco_Params: () => unknown
  QRCodeEncoder_CORRECT_LEVEL_H: number
  QRCodeEncoder_CORRECT_LEVEL_L: number
  QRCodeEncoder_CORRECT_LEVEL_M: number
  QRCodeEncoder_CORRECT_LEVEL_Q: number
  QRCodeEncoder_ECI_UTF8: number
  QRCodeEncoder_MODE_ALPHANUMERIC: number
  QRCodeEncoder_MODE_AUTO: number
  QRCodeEncoder_MODE_BYTE: number
  QRCodeEncoder_MODE_ECI: number
  QRCodeEncoder_MODE_KANJI: number
  QRCodeEncoder_MODE_NUMERIC: number
  QRCodeEncoder_MODE_STRUCTURED_APPEND: number
  QUAT_ASSUME_NOT_UNIT: number
  QUAT_ASSUME_UNIT: number
  QuatEnum_EULER_ANGLES_MAX_VALUE: number
  QuatEnum_EXT_XYX: number
  QuatEnum_EXT_XYZ: number
  QuatEnum_EXT_XZX: number
  QuatEnum_EXT_XZY: number
  QuatEnum_EXT_YXY: number
  QuatEnum_EXT_YXZ: number
  QuatEnum_EXT_YZX: number
  QuatEnum_EXT_YZY: number
  QuatEnum_EXT_ZXY: number
  QuatEnum_EXT_ZXZ: number
  QuatEnum_EXT_ZYX: number
  QuatEnum_EXT_ZYZ: number
  QuatEnum_INT_XYX: number
  QuatEnum_INT_XYZ: number
  QuatEnum_INT_XZX: number
  QuatEnum_INT_XZY: number
  QuatEnum_INT_YXY: number
  QuatEnum_INT_YXZ: number
  QuatEnum_INT_YZX: number
  QuatEnum_INT_YZY: number
  QuatEnum_INT_ZXY: number
  QuatEnum_INT_ZXZ: number
  QuatEnum_INT_ZYX: number
  QuatEnum_INT_ZYZ: number
  RANSAC: number
  RECURS_FILTER: number
  REDUCE_AVG: number
  REDUCE_MAX: number
  REDUCE_MIN: number
  REDUCE_SUM: number
  REDUCE_SUM2: number
  RETR_CCOMP: number
  RETR_EXTERNAL: number
  RETR_FLOODFILL: number
  RETR_LIST: number
  RETR_TREE: number
  RHO: number
  RNG_NORMAL: number
  RNG_UNIFORM: number
  ROTATE_90_CLOCKWISE: number
  ROTATE_90_COUNTERCLOCKWISE: number
  ROTATE_180: number
  Range: () => unknown
  Rect: new (x: number, y: number, width: number, height: number) => Rect
  RectVector: () => unknown
  Rodrigues: () => unknown
  RotatedRect: () => unknown
  SAMPLING_NAPSAC: number
  SAMPLING_PROGRESSIVE_NAPSAC: number
  SAMPLING_PROSAC: number
  SAMPLING_UNIFORM: number
  SCORE_METHOD_LMEDS: number
  SCORE_METHOD_MAGSAC: number
  SCORE_METHOD_MSAC: number
  SCORE_METHOD_RANSAC: number
  SOLVELP_LOST: number
  SOLVELP_MULTI: number
  SOLVELP_SINGLE: number
  SOLVELP_UNBOUNDED: number
  SOLVELP_UNFEASIBLE: number
  SOLVEPNP_AP3P: number
  SOLVEPNP_DLS: number
  SOLVEPNP_EPNP: number
  SOLVEPNP_IPPE: number
  SOLVEPNP_IPPE_SQUARE: number
  SOLVEPNP_ITERATIVE: number
  SOLVEPNP_MAX_COUNT: number
  SOLVEPNP_P3P: number
  SOLVEPNP_SQPNP: number
  SOLVEPNP_UPNP: number
  SORT_ASCENDING: number
  SORT_DESCENDING: number
  SORT_EVERY_COLUMN: number
  SORT_EVERY_ROW: number
  SVD_FULL_UV: number
  SVD_MODIFY_A: number
  SVD_NO_UV: number
  Scalar: new (red: number, green: number, blue: number) => Scalar
  Scharr: () => unknown
  Size: new (width: number, height: number) => Size
  Sobel: () => unknown
  SoftNMSMethod_SOFTNMS_GAUSSIAN: number
  SoftNMSMethod_SOFTNMS_LINEAR: number
  SparseMat_HASH_BIT: number
  SparseMat_HASH_SCALE: number
  SparseMat_MAGIC_VAL: number
  SparseMat_MAX_DIM: number
  StereoBM_PREFILTER_NORMALIZED_RESPONSE: number
  StereoBM_PREFILTER_XSOBEL: number
  StereoMatcher_DISP_SCALE: number
  StereoMatcher_DISP_SHIFT: number
  StereoSGBM_MODE_HH: number
  StereoSGBM_MODE_HH4: number
  StereoSGBM_MODE_SGBM: number
  StereoSGBM_MODE_SGBM_3WAY: number
  StsAssert: number
  StsAutoTrace: number
  StsBackTrace: number
  StsBadArg: number
  StsBadFlag: number
  StsBadFunc: number
  StsBadMask: number
  StsBadMemBlock: number
  StsBadPoint: number
  StsBadSize: number
  StsDivByZero: number
  StsError: number
  StsFilterOffsetErr: number
  StsFilterStructContentErr: number
  StsInplaceNotSupported: number
  StsInternal: number
  StsKernelStructContentErr: number
  StsNoConv: number
  StsNoMem: number
  StsNotImplemented: number
  StsNullPtr: number
  StsObjectNotFound: number
  StsOk: number
  StsOutOfRange: number
  StsParseError: number
  StsUnmatchedFormats: number
  StsUnmatchedSizes: number
  StsUnsupportedFormat: number
  StsVecLengthErr: number
  Subdiv2D_NEXT_AROUND_DST: number
  Subdiv2D_NEXT_AROUND_LEFT: number
  Subdiv2D_NEXT_AROUND_ORG: number
  Subdiv2D_NEXT_AROUND_RIGHT: number
  Subdiv2D_PREV_AROUND_DST: number
  Subdiv2D_PREV_AROUND_LEFT: number
  Subdiv2D_PREV_AROUND_ORG: number
  Subdiv2D_PREV_AROUND_RIGHT: number
  Subdiv2D_PTLOC_ERROR: number
  Subdiv2D_PTLOC_INSIDE: number
  Subdiv2D_PTLOC_ON_EDGE: number
  Subdiv2D_PTLOC_OUTSIDE_RECT: number
  Subdiv2D_PTLOC_VERTEX: number
  TEST_CUSTOM: number
  TEST_EQ: number
  TEST_GE: number
  TEST_GT: number
  TEST_LE: number
  TEST_LT: number
  TEST_NE: number
  THRESH_BINARY: number
  THRESH_BINARY_INV: number
  THRESH_MASK: number
  THRESH_OTSU: number
  THRESH_TOZERO: number
  THRESH_TOZERO_INV: number
  THRESH_TRIANGLE: number
  THRESH_TRUNC: number
  TM_CCOEFF: number
  TM_CCOEFF_NORMED: number
  TM_CCORR: number
  TM_CCORR_NORMED: number
  TM_SQDIFF: number
  TM_SQDIFF_NORMED: number
  TermCriteria: () => unknown
  TermCriteria_COUNT: number
  TermCriteria_EPS: number
  TermCriteria_MAX_ITER: number
  Tonemap: () => unknown
  TonemapDrago: () => unknown
  TonemapMantiuk: () => unknown
  TonemapReinhard: () => unknown
  Tracker: () => unknown
  TrackerMIL: () => unknown
  TrackerMIL_Params: () => unknown
  TrackerSamplerCSC_MODE_DETECT: number
  TrackerSamplerCSC_MODE_INIT_NEG: number
  TrackerSamplerCSC_MODE_INIT_POS: number
  TrackerSamplerCSC_MODE_TRACK_NEG: number
  TrackerSamplerCSC_MODE_TRACK_POS: number
  UMatData_ASYNC_CLEANUP: number
  UMatData_COPY_ON_MAP: number
  UMatData_DEVICE_COPY_OBSOLETE: number
  UMatData_DEVICE_MEM_MAPPED: number
  UMatData_HOST_COPY_OBSOLETE: number
  UMatData_TEMP_COPIED_UMAT: number
  UMatData_TEMP_UMAT: number
  UMatData_USER_ALLOCATED: number
  UMat_AUTO_STEP: number
  UMat_CONTINUOUS_FLAG: number
  UMat_DEPTH_MASK: number
  UMat_MAGIC_MASK: number
  UMat_MAGIC_VAL: number
  UMat_SUBMATRIX_FLAG: number
  UMat_TYPE_MASK: number
  USAC_ACCURATE: number
  USAC_DEFAULT: number
  USAC_FAST: number
  USAC_FM_8PTS: number
  USAC_MAGSAC: number
  USAC_PARALLEL: number
  USAC_PROSAC: number
  USAGE_ALLOCATE_DEVICE_MEMORY: number
  USAGE_ALLOCATE_HOST_MEMORY: number
  USAGE_ALLOCATE_SHARED_MEMORY: number
  USAGE_DEFAULT: number
  UnboundTypeError: () => unknown
  VideoCapture: () => unknown
  WARP_FILL_OUTLIERS: number
  WARP_INVERSE_MAP: number
  WARP_POLAR_LINEAR: number
  WARP_POLAR_LOG: number
  absdiff: () => unknown
  adaptiveThreshold: () => unknown
  add: () => unknown
  addRunDependency: () => unknown
  addWeighted: () => unknown
  approxPolyDP: () => unknown
  arcLength: () => unknown
  aruco_ArucoDetector: () => unknown
  aruco_Board: () => unknown
  aruco_CharucoBoard: () => unknown
  aruco_CharucoDetector: () => unknown
  aruco_CharucoParameters: () => unknown
  aruco_DetectorParameters: () => unknown
  aruco_Dictionary: () => unknown
  aruco_GridBoard: () => unknown
  aruco_RefineParameters: () => unknown
  asm: unknown
  barcode_BarcodeDetector: () => unknown
  bilateralFilter: () => unknown
  bitwise_and: () => unknown
  bitwise_not: () => unknown
  bitwise_or: () => unknown
  bitwise_xor: () => unknown
  blobFromImage: () => unknown
  blur: () => unknown
  boundingRect: (contour: Mat) => Rect
  boxFilter: () => unknown
  calcBackProject: () => unknown
  calcHist: () => unknown
  calcOpticalFlowFarneback: () => unknown
  calcOpticalFlowPyrLK: () => unknown
  calibrateCameraExtended: () => unknown
  calledRun: true
  cartToPolar: () => unknown
  circle: () => unknown
  compare: () => unknown
  compareHist: () => unknown
  connectedComponents: () => unknown
  connectedComponentsWithStats: () => unknown
  contourArea: () => unknown
  convertScaleAbs: () => unknown
  convexHull: () => unknown
  convexityDefects: () => unknown
  copyMakeBorder: (
    src: Mat,
    dst: Mat,
    top: number,
    bottom: number,
    left: number,
    right: number,
    borderType: number,
    borderColor: Scalar,
  ) => void
  cornerHarris: () => unknown
  cornerMinEigenVal: () => unknown
  countNonZero: () => unknown
  count_emval_handles: () => unknown
  createContext: () => unknown
  cvtColor: (src: Mat, dst: Mat, type: number) => void
  demosaicing: () => unknown
  determinant: () => unknown
  dft: () => unknown
  dilate: () => unknown
  distanceTransform: () => unknown
  distanceTransformWithLabels: () => unknown
  divide: () => unknown
  divide1: () => unknown
  dnn_Net: () => unknown
  drawContours: () => unknown
  drawDetectedCornersCharuco: () => unknown
  drawDetectedDiamonds: () => unknown
  drawDetectedMarkers: () => unknown
  drawFrameAxes: () => unknown
  drawKeypoints: () => unknown
  drawMatches: () => unknown
  drawMatches1: () => unknown
  drawMatchesKnn: () => unknown
  eigen: () => unknown
  ellipse: () => unknown
  ellipse1: () => unknown
  ellipse2Poly: () => unknown
  equalizeHist: () => unknown
  erode: () => unknown
  estimateAffine2D: () => unknown
  estimateAffine2D1: () => unknown
  exceptionFromPtr: () => unknown
  exp: () => unknown
  extendDictionary: () => unknown
  fillConvexPoly: () => unknown
  fillPoly: () => unknown
  filter2D: () => unknown
  findContours: () => unknown
  findHomography: () => unknown
  findHomography1: () => unknown
  findTransformECC: () => unknown
  findTransformECC1: () => unknown
  fisheye_initUndistortRectifyMap: () => unknown
  fisheye_projectPoints: () => unknown
  fitEllipse: () => unknown
  fitLine: () => unknown
  flip: () => unknown
  floodFill: () => unknown
  flushPendingDeletes: () => unknown
  gemm: () => unknown
  generateImageMarker: () => unknown
  getAffineTransform: () => unknown
  getBuildInformation: () => unknown
  getDefaultNewCameraMatrix: () => unknown
  getInheritedInstanceCount: () => unknown
  getLiveInheritedInstances: () => unknown
  getLogLevel: () => unknown
  getMemory: () => unknown
  getOptimalDFTSize: () => unknown
  getPerspectiveTransform: () => unknown
  getPredefinedDictionary: () => unknown
  getRotationMatrix2D: () => unknown
  getStructuringElement: (shape: number, size: Size) => Mat
  getUserMedia: () => unknown
  get_first_emval: () => unknown
  goodFeaturesToTrack: () => unknown
  goodFeaturesToTrack1: () => unknown
  grabCut: () => unknown
  groupRectangles: () => unknown
  hconcat: () => unknown
  imread: (image: HTMLImageElement) => Mat
  imshow: (canvas: HTMLCanvasElement, mat: Mat) => void
  inRange: () => unknown
  initUndistortRectifyMap: () => unknown
  inpaint: () => unknown
  integral: () => unknown
  integral2: () => unknown
  invert: () => unknown
  isContourConvex: () => unknown
  kmeans: () => unknown
  line: () => unknown
  log: () => unknown
  magnitude: () => unknown
  matFromArray: () => unknown
  matFromImageData: () => unknown
  matchShapes: () => unknown
  matchTemplate: () => unknown
  max: () => unknown
  mean: () => unknown
  meanShift: () => unknown
  meanStdDev: () => unknown
  medianBlur: () => unknown
  merge: () => unknown
  min: () => unknown
  minAreaRect: () => unknown
  minEnclosingCircle: () => unknown
  minMaxLoc: () => unknown
  mixChannels: () => unknown
  moments: () => unknown
  morphologyDefaultBorderValue: () => unknown
  morphologyEx: (binary: Mat, mask: Mat, type: number, kernel: Mat) => void
  multiply: () => unknown
  norm: () => unknown
  norm1: () => unknown
  normalize: () => unknown
  pauseMainLoop: () => unknown
  perspectiveTransform: () => unknown
  pointPolygonTest: () => unknown
  polarToCart: () => unknown
  polylines: () => unknown
  pow: () => unknown
  preloadedAudios: unknown
  preloadedImages: unknown
  projectPoints: () => unknown
  putText: () => unknown
  pyrDown: () => unknown
  pyrUp: () => unknown
  randn: () => unknown
  randu: () => unknown
  readNet: () => unknown
  readNet1: () => unknown
  readNetFromCaffe: () => unknown
  readNetFromCaffe1: () => unknown
  readNetFromDarknet: () => unknown
  readNetFromDarknet1: () => unknown
  readNetFromONNX: () => unknown
  readNetFromONNX1: () => unknown
  readNetFromTFLite: () => unknown
  readNetFromTFLite1: () => unknown
  readNetFromTensorflow: () => unknown
  readNetFromTensorflow1: () => unknown
  readNetFromTorch: () => unknown
  rectangle: () => unknown
  rectangle1: () => unknown
  reduce: () => unknown
  remap: () => unknown
  removeRunDependency: () => unknown
  repeat: () => unknown
  requestAnimationFrame: () => unknown
  requestFullScreen: () => unknown
  requestFullscreen: () => unknown
  resize: (src: Mat, dst: Mat, size: Size, xScale: number, yScale: number, type: number) => void
  resumeMainLoop: () => unknown
  rotate: () => unknown
  rotatedRectBoundingRect: () => unknown
  rotatedRectBoundingRect2f: () => unknown
  rotatedRectPoints: () => unknown
  run: () => unknown
  segmentation_IntelligentScissorsMB: () => unknown
  sepFilter2D: () => unknown
  setCanvasSize: () => unknown
  setDelayFunction: () => unknown
  setIdentity: () => unknown
  setLogLevel: () => unknown
  setRNGSeed: () => unknown
  solve: () => unknown
  solvePnP: () => unknown
  solvePnPRansac: () => unknown
  solvePnPRansac1: () => unknown
  solvePnPRefineLM: () => unknown
  solvePoly: () => unknown
  split: () => unknown
  sqrt: () => unknown
  stackAlloc: () => unknown
  stackRestore: () => unknown
  stackSave: () => unknown
  stderr: undefined
  stdin: undefined
  stdout: undefined
  subtract: () => unknown
  then: () => unknown
  threshold: (src: Mat, dst: Mat, thresh: number, maxval: number, type: number) => void
  trace: () => unknown
  transform: () => unknown
  transpose: () => unknown
  undistort: () => unknown
  vconcat: (src: MatVector, dst: Mat) => void
  warpAffine: () => unknown
  warpPerspective: () => unknown
  warpPolar: () => unknown
  watershed: () => unknown
}
