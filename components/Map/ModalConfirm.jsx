import React, { useState } from "react";
import { Modal, View, Text , Alert} from "react-native";


export const ModalConfirm = (children) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={show}
          onRequestClose={() => {
            setShow(!show);
          }}
        >
          {children}
        </Modal>
      </View>
    </>
  );
};
