import { getIcon } from '../utils/utilities';

type CurrentlyProps = {
  temp: number;
  iconID: string;
  description: string;
  min: number;
  max: number;
};

export default function CurrentWeather({
  temp,
  iconID,
  description,
  min,
  max,
}: CurrentlyProps) {
  const IconComponent = getIcon(iconID.substring(0, 2));

  return (
    <>
      <div
        className="flex-across-center"
        style={{
          marginTop: '13%',
        }}
      >
        <div style={{ fontSize: '16px', color: 'black' }}>
          {`${Math.round(min)} | ${Math.round(max)}`}
        </div>
        <div
          style={{
            marginLeft: '5px',
            marginTop: '-8px',
            color: 'gray',
            fontSize: '25px',
          }}
        >
          <IconComponent />
        </div>
      </div>
      <div
        className="flex-across-center"
        style={{
          fontSize: '78px',
          marginTop: '-25px',
          color: '#0059b3',
        }}
      >
        <div>{Math.round(temp)}</div>
        <div style={{ fontSize: '45px', marginTop: '6px' }}>°</div>
        <div>F</div>
      </div>
      <div className="flex-across-center">
        <div
          style={{
            position: 'relative',
            fontSize: '16px',
            width: '45%',
            overflowWrap: 'break-word',
            textAlign: 'center',
            marginTop: '-22px',
          }}
        >
          {description}
        </div>
      </div>
    </>
  );
}
