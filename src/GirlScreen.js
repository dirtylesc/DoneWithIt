import * as React from "react";
import styled from "styled-components";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Header, Input } from "@rneui/themed";
import { Page } from "../components";
import { sendPushNotigication } from "../sevices/api";

const ButtonContainer = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
`;

const SummonButton = styled(TouchableOpacity)`
  background-color: ${(props) => props.color || "red"};
  flex: 48% 0 0;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  height: 150px;
  border-radius: 5px;
`;

const ButtonText = styled(Text)`
  font-size: 16px;
  color: white;
`;

const token = "ExponentPushToken[MPnfxtO03R4x80PyUv245i]";

const GirlScreen = () => {
  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: "Cho nữ 👧", style: { color: "#fff" } }}
      />
      <Page>
        <View>
          <Input
            label="Mã số 🧑‍🦱"
            placeholder="Nhập số điện thoại nam vào đây!!"
          />
          <Button title="Xác nhận mã số" />
        </View>
        <ButtonContainer>
          <SummonButton
            color="#e74c3c"
            onPress={() =>
              sendPushNotigication(token, "Đói quá~", "Qua chở mình đi ăn zớii")
            }
          >
            <ButtonText>Phan Xuân Sỹ</ButtonText>
          </SummonButton>
          <SummonButton color="#2980b9">
            <ButtonText>Đinh Việt Phương</ButtonText>
          </SummonButton>
          <SummonButton color="#2ecc71">
            <ButtonText>Tuấn Anh</ButtonText>
          </SummonButton>
          <SummonButton color="#f1c40f">
            <ButtonText>Thắng Buồi</ButtonText>
          </SummonButton>
        </ButtonContainer>
      </Page>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default GirlScreen;
