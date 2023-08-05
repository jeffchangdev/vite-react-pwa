type MakeLoadingButtonProps = {
  setState: React.Dispatch<React.SetStateAction<string>>;
  status: string;
};

export default function MakeStatusButton({
  setState,
  status,
}: MakeLoadingButtonProps) {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setState(status);
  };
  return (
    <button
      type="button"
      style={{
        backgroundColor: 'white',
        color: 'black',
        width: '40vw',
        height: '45px',
        border: 'black',
        outline: 'none',
      }}
      onClick={handleClick}
    >
      {`Set ${status}`}
    </button>
  );
}
