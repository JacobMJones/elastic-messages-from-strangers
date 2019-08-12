export default messages => {
  let wordCount = 0;
  messages.forEach((item, index) => {
    let count = item.text.trim().split(/\s+/).length;
    wordCount = wordCount + count;
  });
  return wordCount;
};
