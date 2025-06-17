import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '@/styles/colors';
import styles from './styles';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export function CollapsibleSection({
  title,
  children,
  defaultExpanded = false,
}: CollapsibleSectionProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [contentHeight, setContentHeight] = useState(0);

  const onContentLayout = (event: any) => {
    const {height} = event.nativeEvent.layout;
    if (height > 0 && contentHeight !== height) {
      setContentHeight(height);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View>
          <Icon
            name="keyboard-arrow-down"
            size={24}
            color={colors.text.primary}
          />
        </View>
      </TouchableOpacity>
      <View style={[styles.content]}>
        <View style={styles.contentInner} onLayout={onContentLayout}>
          {children}
        </View>
      </View>
    </View>
  );
}
