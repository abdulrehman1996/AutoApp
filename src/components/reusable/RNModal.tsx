import { StyleSheet, Text, ViewStyle } from "react-native";
import React, { memo } from "react";
import Modal from "react-native-modal";
import { useTheme } from "@react-navigation/native";

interface BottomModalProps {
  style?: ViewStyle;
  children?: any;
  visible?: boolean;
  setVisible: any;
  backdrop?: boolean;
}
const RNModal = ({
  children,
  visible,
  style,
  setVisible,
  backdrop = true,
}: BottomModalProps) => {
  const { colors } = useTheme();
  const styles = Styles(colors);
  return (
    <Modal
      style={[styles.modal, style]}
      // propagateSwipe
      isVisible={visible}
      animationIn="slideInUp"
      onBackdropPress={() => setVisible(backdrop ? false : true)}
      onBackButtonPress={() => setVisible(false)}
      animationOut="slideOutDown"
      animationInTiming={1000}
      animationOutTiming={700}
      backdropColor={"rgba(0,0,0,0.60)"}
    >
      {children}
    </Modal>
  );
};

export default memo(RNModal);

const Styles = (colors: any) =>
  StyleSheet.create({
    modal: {
      backgroundColor: "white",
    },
  });
