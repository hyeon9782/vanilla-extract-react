const Address = ({ onNext }: { onNext: () => void }) => {
  return (
    <div>
      <button onClick={onNext}>성공으로 이동</button>
    </div>
  );
};

export default Address;
