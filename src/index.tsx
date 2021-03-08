import React, { useCallback } from 'react'
import { Platform, StyleSheet, View } from "react-native";

/**
 * [width, height, radius, color, opacity]
 */
type Shadow = [number, number, number, string, number]

interface ShadowProps {
  shadows: Shadow[]
  elevation: number
  borderRadius?: number
}

interface ShadowItemsProps {
  shadow: Shadow
  zIndex: number
  borderRadius?: number
}

const Shadow: React.FC<ShadowProps> = (
    {
      children,
      elevation = 0,
      shadows,
      borderRadius = 0
    }
  ) => {
    const renderItem = useCallback(
      (shadow, index) => (
        <ShadowItem
          key={`${shadow.join('-')}${index}`}
          shadow={shadow}
          zIndex={index + 2}
          borderRadius={borderRadius}
        />
      ), []
    );

    return (
      <View>
        {Platform.OS === 'ios' && shadows?.map(renderItem)}
        <View
          style={{
            borderRadius,
            overflow: "hidden",
            zIndex: shadows?.length + 2 || 0,
            elevation
          }}
        >
          {children}
        </View>
      </View>
    );
  }

const buildShadow = (
  width: number,
  height: number,
  radius: number,
  shadowColor: string,
  shadowOpacity: number
) => ({
  shadowColor,
  shadowOffset: {
    height,
    width,
  },
  shadowOpacity,
  shadowRadius: radius,
});



const ShadowItem: React.FC<ShadowItemsProps> = ({
  shadow,
  zIndex,
  borderRadius
}) => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          // backgroundColor needs to be set in order to display shadow
          backgroundColor: '#fff',
          flex: 1,
          borderRadius,
          zIndex,
        },
        buildShadow(...shadow),
      ]}
    />
  );
};

export default Shadow