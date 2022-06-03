const rawDatas = {
  nationality: "Canada",
  owners: ["Linus", "James Hobson", "Mehdi", "Ryan George"],
  channels: ["Linus Tech Tips", "Hacksmith", "ElectroBoom", "Ryan George"],
  contents: [
    "Technology-Review",
    "Engineering-Invention",
    "Engineering-Comedy-Education",
    "Comedy-Sketch",
  ],
};

const filterByContent = (keyword, data) => {
  const { nationality, owners, channels, contents } = data;
  let arr = [];
  contents.forEach((content, ind) => {
    if (content.toLowerCase().includes(keyword.toLowerCase())) {
      arr.push(ind);
    }
  });

  if (arr.length) {
    let own = arr.map((x) => {
      return owners[x];
    });

    let chan = arr.map((x) => {
      return channels[x];
    });

    let cont = arr.map((x) => {
      return contents[x];
    });

    return {
      nationality,
      owners: own,
      channels: chan,
      contents: cont,
    };
  }
};
console.log(filterByContent("sketch", rawDatas));

// example2 = {
//   nationality: "Canada",
//   owners: ["Mehdi", "Ryan George"],
//   channels: ["ElectroBoom", "Ryan George"],
//   contents: ["Engineering-Comedy-Education", "Comedy-Sketch"],
// };
