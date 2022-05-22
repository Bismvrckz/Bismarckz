var data = [
  ["John", 43, "Jakarta"],
  ["Derieri", 34, "Jakarta"],
  ["Dena", 35, "Jakarta"],
  ["Tony", 34, "Surabaya"],
  ["Dustin Timberlake", 29, "Banjarmasin"],
];

var ageAddress = (persons) => {
  var pengurutan = (org1, org2) => {
    if (org1[1] < org2[1]) {
      return -1;
    } else if (org1[1] > org2[1]) {
      return 1;
    } else if (org1[1] == org2[1]) {
      if (org1[2] < org2[2]) {
        return -1;
      } else if (org1[2] > org2[2]) {
        return 1;
      } else if (org1[2] == org2[2]) {
        return 0;
      }
    }
  };
  persons.sort(pengurutan);

  return persons;
};

var filteredPersons = ageAddress(data);
console.log(filteredPersons);
