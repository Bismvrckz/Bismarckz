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
  const rawContents = data.contents;
  let arr = [];
  rawContents.forEach((content, ind) => {
    if (content.toLowerCase().includes(keyword.toLowerCase())) {
      arr.push(ind);
    }
  });

  if (arr.length) {
    let own = arr.map((x) => {
      return data.owners[x];
    });

    let chan = arr.map((x) => {
      return data.channels[x];
    });

    let cont = arr.map((x) => {
      return data.contents[x];
    });

    let result = {
      nationality: data.nationality,
      owners: own,
      channels: chan,
      contents: cont,
    };
    return result;
  }
};
console.log(filterByContent("comedy", rawDatas));

// example2 = {
//   nationality: "Canada",
//   owners: ["Mehdi", "Ryan George"],
//   channels: ["ElectroBoom", "Ryan George"],
//   contents: ["Engineering-Comedy-Education", "Comedy-Sketch"],
// };
