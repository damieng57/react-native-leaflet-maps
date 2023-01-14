import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { IPropsCommandButton } from './types';

export const CommandButton = (props: IPropsCommandButton) => {
  const { title, backgroundColor, onPress } = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        // eslint-disable-next-line react-native/no-inline-styles
        { backgroundColor },
      ]}
      onPress={onPress}
    >
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};
