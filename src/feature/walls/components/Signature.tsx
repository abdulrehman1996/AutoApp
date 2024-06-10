import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { RNModal } from "@/src/components";
import SignatureScreen from "react-native-signature-canvas";
import { hp } from "@/src/utils/Dimension";

interface SignatureProps {
  showModal?: boolean;
  setShowModal?: any;
}
const Signature = ({ showModal, setShowModal }: SignatureProps) => {
  const ref = useRef();

  const handleOK = (signature: any) => {
    console.log(signature);
  };

  const handleEmpty = () => {
    console.log("Empty");
  };

  const handleClear = () => {
    console.log("clear success!");
  };

  const handleEnd = () => {
    // @ts-ignore
    ref.current.readSignature();
  };

  const handleData = (data: any) => {
    console.log(data);
  };
  return (
    <RNModal visible={showModal} setVisible={setShowModal} style={styles.modal}>
      <View style={styles.modalView}>
        <SignatureScreen
        // @ts-ignore
          ref={ref}
          onEnd={handleEnd}
          onOK={handleOK}
          onEmpty={handleEmpty}
          onClear={handleClear}
          onGetData={handleData}
          autoClear={true}
          descriptionText={"s"}
        />
      </View>
    </RNModal>
  );
};

export default Signature;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "transparent",
  },
  modalView: {
    // height: hp(20),
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: "5%",
    height:hp(70)
  },
});
