const dogs = [
  {
    이름: '맥스',
    크기: '소형견',
    견종: '보스턴 테리어',
    색상: '검정색',
  },
  {
    이름: '도니',
    크기: '대형견',
    견종: '래브라도레트리버',
    색상: '검정색',
  },
  {
    이름: '섀도',
    크기: '중형견',
    견종: '래브라도레트리버',
    색상: '갈색',
  },
];

function getColors(dogs) {
  return dogs.map(dog => dog['색상']);
}

function getUnique(attributes) {
  const unique = [];
  for (const attribute of attributes) {
    if (!unique.includes(attribute)) {
      unique.push(attribute);
    }
  }
  return unique;
}
const colors = getColors(dogs);


function getUniqueWithSet(attributes) {
  return [...new Set(attributes)];
}

function getUniqueColors(dogs) {
  const unique = new Set();
  for (const dog of dogs) {
    unique.add(dog.색상);
  }
  return [...unique];
}

const uniqueColors = getUniqueColors(dogs);

console.log(`getUnique: ${getUnique(colors)}`);
console.log(`getUniqueWithSet from colors: ${getUniqueWithSet(colors)}`);
console.log(`getUniqueColor with Set (from array dogs): ${uniqueColors}`);
