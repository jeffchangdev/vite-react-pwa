import { Forecast, MinutelyForecast } from '../types/types';

type MakeRainProps = {
  setState: React.Dispatch<React.SetStateAction<Forecast | undefined>>;
  forecast: Forecast;
  mockRainData: MinutelyForecast[];
};

export default function MakeRainButton({
  setState,
  forecast,
  mockRainData,
}: MakeRainProps) {
  const copy = { ...forecast };
  copy.minutely = mockRainData;

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setState(copy);
  };

  return (
    <button
      type="button"
      style={{
        backgroundColor: 'white',
        color: 'white',
        width: '40vw',
        height: '45px',
        border: 'none',
        outline: 'none',
      }}
      onClick={handleClick}
    >
      Rain!
    </button>
  );
}
