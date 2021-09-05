function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ');
  if (pattern.length !== words.length) return false;
  let record = new Map();
  let record2 = new Map();
  let mode = new Array();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (record.has(char)) {
      mode.push(record.get(char));
    } else {
      record.set(char, i);
      mode.push(i);
    }
    if (!record2.has(words[i])) {
      record2.set(words[i], i);
    }
    if (mode[i] !== record2.get(words[i])) return false;
  };
  return true;
};