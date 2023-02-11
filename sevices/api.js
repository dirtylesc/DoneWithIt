import axios from "axios";

const EXPO_SERVER_URL = "https://exp.host/--/api/v2/push/send";

export const sendPushNotigication = async (token, title, body) => {
  const message = {
    to: token,
    sound: "default",
    title,
    body,
  };

  await axios.post(EXPO_SERVER_URL, message);
  alert("Triệu hồi thành công~");
};
