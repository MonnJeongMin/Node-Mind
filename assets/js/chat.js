// recevied new message event func
export function handleMessageNotifi(data) {
    const { message, nickname } = data;
    console.log(`${nickname} : ${message}`);
  }