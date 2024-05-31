import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
  name: 'CIRCLE' | 'CROSS';
}>;

const Icons = ({name}: IconsProps): JSX.Element => {
  switch (name) {
    case 'CIRCLE':
      return <Icon name="circle-thin" size={38} color="#F7CD2E" />;
    case 'CROSS':
      return <Icon name="times" size={38} color="#38CC77" />;
    default:
      return <Icon name="pencil" size={38} color="#0D0D0D" />;
  }
};

export default Icons;
