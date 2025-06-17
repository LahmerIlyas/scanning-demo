import React from 'react';
import {Text, TextStyle} from 'react-native';

interface DastRendererProps {
  dastData: any;
  style?: TextStyle;
  numberOfLines?: number;
}

export const DastRenderer = ({
  dastData,
  style,
  numberOfLines,
}: DastRendererProps) => {
  if (!dastData?.document?.children) {
    return null;
  }

  return (
    <Text style={style} numberOfLines={numberOfLines}>
      {dastData.document.children.map((paragraph: any, pIndex: number) => {
        if (!paragraph.children) {
          return null;
        }

        const spans = paragraph.children
          .filter((span: any) => span.value?.trim())
          .map((span: any, sIndex: number) => (
            <Text
              key={sIndex}
              style={
                // eslint-disable-next-line react-native/no-inline-styles
                span.marks?.includes('strong') ? {fontWeight: 'bold'} : {}
              }>
              {span.value}
            </Text>
          ));

        if (spans.length === 0) {
          return null;
        }

        return (
          <Text key={pIndex}>
            {pIndex > 0 && '\n'}
            {spans}
          </Text>
        );
      })}
    </Text>
  );
};

