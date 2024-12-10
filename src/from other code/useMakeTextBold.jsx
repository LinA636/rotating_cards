const useMakeTextBold = (text) => {
  if (!text) return null;
  
  const splittedText = text.split(/(<strong>.*?<\/strong>)/g)
  const result = splittedText.map((part, index) => {
    if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
      return <strong key={index}>{part.replace(/<\/?strong>/g, '')}</strong>;
    }
    return part;
  });
  return result
};

export default useMakeTextBold;
