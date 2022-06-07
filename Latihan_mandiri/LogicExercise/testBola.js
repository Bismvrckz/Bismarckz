function generateMatchResults(club, matches) {
  let filterMatch = matches.filter((match) =>
    match.includes(`${club.clubname}`)
  );
  let totalGoal = 0;
  let result = {};
  filterMatch.forEach((match) => {
    if (match[0] == `${club.clubname}`) {
      if (match[1] > match[3]) {
        result[`${match[2]}`] = `W`;
        totalGoal += match[1];
      } else if (match[1] < match[3]) {
        result[`${match[2]}`] = `L`;
        totalGoal += match[1];
      } else {
        result[`${match[2]}`] = `D`;
        totalGoal += match[1];
      }
    } else if (match[2] == `${club.clubname}`) {
      if (match[3] > match[1]) {
        result[`${match[2]}`] = `W`;
        totalGoal += match[3];
      } else if (match[3] < match[1]) {
        result[`${match[2]}`] = `L`;
        totalGoal += match[3];
      } else {
        result[`${match[2]}`] = `D`;
        totalGoal += match[3];
      }
    }
  });
  result[`goal`] = totalGoal;
  return result;
}

function fineCount(club) {
  let total = 0;
  total += club.yellowCards * 1000;
  total += club.redCards * 2000;
  return total;
}

function clubReport(club, matches) {
  let result = generateMatchResults(club, matches);
  let fine = fineCount(club);
  let goal = result.goal;
  delete result.goal;
  return {
    clubName: `${club.clubname}`,
    match: result,
    message: `Klub ${club.clubname} berhasil mencetak ${goal} goal, dan denda sebesar $${fine}`,
  };
}

const matches = [
  ["Liverpool", 1, "Manchester_United", 3],
  ["Liverpool", 2, "Chelsea", 0],
  ["Chelsea", 1, "Manchester_City", 2],
  ["Manchester_City", 3, "Liverpool", 3],
  ["Manchester_City", 2, "Manchester_United", 2],
  ["Manchester_United", 2, "Chelsea", 3],
  ["Liverpool", 3, "Tottenham", 1],
  ["Tottenham", 2, "Manchester_United", 1],
  ["Tottenham", 2, "Manchester_City", 2],
  ["Chelsea", 3, "Tottenham", 2],
];

const liverpool = { clubname: `Liverpool`, yellowCards: 2, redCards: 10 };

console.log(clubReport(liverpool, matches));
// {
//     name : "Liverpool",
//     match : {
//       'Manchester United': 'L',
//       Chelsea: 'W',
//       'Manchester City': 'D',
//       'Tottenham': 'W'
//      },
//     message: `Klub Liverpool berhasil mencetak 9 goal, dan denda sebesar $9500`
// }
