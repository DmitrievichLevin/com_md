export default ({ amount = 2 }) => {
  return (
    <span>
      {Array.from({ length: amount }).map((_, idx) => (
        <span key={`__spc-${idx}`}>&emsp;</span>
      ))}
    </span>
  );
};
