function humanReadable(seconds) {
  let hour = Math.floor(seconds / 3600);
  let minute = Math.floor((seconds % 3600) / 60);
  let second = Math.floor((seconds % 3600) % 60);

  if (`${second}`.length == 1) {
    second = `0${second}`;
  }
  if (`${minute}`.length == 1) {
    minute = `0${minute}`;
  }
  if (`${hour}`.length == 1) {
    hour = `0${hour}`;
  }

  return `${hour}:${minute}:${second}`;
}

console.log(humanReadable(123123));
