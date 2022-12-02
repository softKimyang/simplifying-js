const firms = new Map()
  .set(10, 'Ivie Group')
  .set(23, 'Soundscaping Source')
  .set(31, 'Big 6');

function checkConflicts(firms, isAvailable) {
  const entries = [...firms];
  for (let i = 0; i < entries.length; i++) {
    const [id, name] = entries[i];
    if (!isAvailable(id)) {
      return `${name}은 사용할 수 없습니다`;
    }
  }
  return '모든 회사를 사용할 수 있습니다.';
}

const soundscapeUnavailable = id => id !== 23;
console.log(`${checkConflicts(firms, soundscapeUnavailable)}`);


function checkConflictsFull(firms, isAvailable) {
  const unavailable = [...firms].find(firm => {
    const [id] = firm;
    return !isAvailable(id);
  });
  if (unavailable) {
    return `${unavailable[1]}은 사용할 수 없습니다.`;
  }
  return '모든 회사를 사용할 수 있습니다.';
}

console.log(`${checkConflictsFull(firms, soundscapeUnavailable)}`);



function checkConflictsReduce(firms, isAvailable) {
  console.log('---------------------------');
  const message = [...firms].reduce((isAvailability, firm) => {
    const [id, name] = firm;
    console.log(`before id: ${id}`);
    if (!isAvailable(id)) {
      console.log(`id: ${id}`);
      return `${name}은 사용할 수 없습니다.`;
    }
    console.log(`isAvailability : ${isAvailability}`);
    return isAvailability;
  }, '모든 회사를 사용할 수 있습니다.');
  return message;
}

console.log(`checkConflictsReduce: ${checkConflictsReduce(firms, soundscapeUnavailable)}`);


function checkConflictsFilter(firms, isAvailable) {
  console.log('>>>>>>>>>>>>>>>>>>>>>>>');
  const unavailable = [...firms].filter(firm => !isAvailable(firm[0])).map(id => id[1]);
  if (unavailable) {
    return `${unavailable}은 사용할 수 없습니다.`;
  }
  return '모든 회사를 사용할 수 있습니다.';
}
console.log(`>>>checkConflictsFilter : ${checkConflictsFilter(firms, soundscapeUnavailable)}`);

function checkConflictsForOf(firms, isAvailable) {
  for (const firm of firms) {
    const [id, name] = firm;
    if (!isAvailable(id)) {
      return `${name}은 사용할 수 없습니다.`;
    }
  }
  return '모든 회사를 사용할 수 있습니다.';
}

console.log(`checkConflictsForOf: ${checkConflictsForOf(firms, soundscapeUnavailable)}`);

