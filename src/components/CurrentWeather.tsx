import { getIcon } from '../utils/utilities';

type CurrentlyProps = {
  temp: number;
  iconID: string;
};

export default function CurrentWeather({ temp, iconID }: CurrentlyProps) {
  const IconComponent = getIcon(iconID.substring(0, 2));

  return (
    <>
      <div className="emphasis">
        <IconComponent />
      </div>
      <div className="emphasis">{Math.round(temp)}°F</div>
    </>
  );
}
