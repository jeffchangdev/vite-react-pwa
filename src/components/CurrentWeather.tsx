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
        className="flex-down-center"
        style={{
          fontSize: '25px',
          marginTop: '10%',
          color: 'gray',
        }}
      >
        <IconComponent />
      </div>
      <div
        className="flex-across-center"
        style={{
          fontSize: '65px',
          marginTop: '-18px',
          color: '#0066cc',
        }}
      >
        <div>{Math.round(temp)}</div>
        <div style={{ fontSize: '45px', marginTop: '6px' }}>°</div>
        <div>F</div>
      </div>
      <div style={{ marginTop: '-20px' }}>
        <div
          className="flex-down-center"
          style={{ fontSize: '15px', marginTop: '0px' }}
        >
          {`${Math.round(min)} | ${Math.round(max)}`}
        </div>
        <div className="flex-across-center">
          <div
            style={{
              position: 'relative',
              fontSize: '14px',
              width: '45%',
              overflowWrap: 'break-word',
              textAlign: 'center',
              marginTop: '-4px',
            }}
          >
            {description}
          </div>
        </div>
      </div>
    </>
  );
}
