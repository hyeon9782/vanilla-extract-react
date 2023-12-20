const Phone = ({ onNext }: { onNext: () => void }) => {
  return (
    <div>
      <button onClick={onNext}>집주소로 이동</button>
    </div>
  );
};

export default Phone;
