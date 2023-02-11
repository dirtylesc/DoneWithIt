import * as React from "react";
import * as Notifications from "expo-notifications";
import { Text, View } from "react-native";
import { Button, Header } from "@rneui/themed";
import { Page } from "../components";

async function getNotificationToken() {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();

    if (status !== "granted") {
      alert("failed to get notification token");
      return;
    }
  }

  const tokenData = await Notifications.getExpoPushTokenAsync();
  const token = tokenData.data;
  console.log(token);
  return token;
}

const BoyScreen = () => {
  return (
    <View>
      <Header
        centerComponent={{ text: "Cho nam 🧑‍🦱", style: { color: "#fff" } }}
      />
      <Page>
        <Text style={{ fontSize: 24, textAlign: "center" }}>
          Bạn chưa có mã, nhấn vào đây để nhận..
        </Text>
        <Button
          title="Bấm vào để nhận mã"
          style={{ marginTop: 30 }}
          onPress={getNotificationToken}
        />
      </Page>
    </View>
  );
};

export default BoyScreen;
