import { verticalScale, horizontalScale } from '@/utils/styles';

const dimensions = {
  height: {
    size1: verticalScale(1),
    size2: verticalScale(2),
    size8: verticalScale(8),
    size14: verticalScale(14),
    size16: verticalScale(16),
    size20: verticalScale(20),
    size24: verticalScale(24),
    size30: verticalScale(30),
    size32: verticalScale(32),
    size34: verticalScale(34),
    size40: verticalScale(40),
    size43: verticalScale(43),
    size48: verticalScale(48),
    size50: verticalScale(50),
    size54: verticalScale(54),
    size64: verticalScale(64),
    size66: verticalScale(66),
    size70: verticalScale(70),
    size80: verticalScale(80),
    size84: verticalScale(84),
    size90: verticalScale(90),
    size96: verticalScale(96),
    size100: verticalScale(100),
    size128: verticalScale(128),
    size150: verticalScale(150),
    size164: verticalScale(164),
    size200: verticalScale(200),
    size222: verticalScale(222),
    size225: verticalScale(225),
    size500: verticalScale(500),
    size550: verticalScale(550),
  },
  width: {
    size3: horizontalScale(3),
    size4: horizontalScale(4),
    size5: horizontalScale(5),
    size12: horizontalScale(12),
    size14: horizontalScale(14),
    size16: horizontalScale(16),
    size20: horizontalScale(20),
    size24: horizontalScale(24),
    size26: horizontalScale(26),
    size32: horizontalScale(32),
    size48: horizontalScale(48),
    size56: horizontalScale(56),
    size64: horizontalScale(64),
    size70: horizontalScale(70),
    size80: horizontalScale(80),
    size90: horizontalScale(90),
    size100: horizontalScale(100),
    size117: horizontalScale(117),
    size124: horizontalScale(124),
    size130: horizontalScale(130),
    size144: horizontalScale(144),
    size160: horizontalScale(160),
    size168: horizontalScale(168),
    size295: horizontalScale(295),
    size343: horizontalScale(343),
    size375: horizontalScale(375),
  },
} as const;

export default dimensions;