import {useState, useEffect, useRef} from 'react';
import {Dimensions, Platform} from 'react-native';
import {
  useOrientationChange,
  OrientationType,
} from 'react-native-orientation-locker';

interface ISize {
  width: number;
  height: number;
}

export function useScreenDimensions() {
  const [dimensions, setDimensions] = useState<ISize>({
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  });
  const listener = useRef<any>();
  const [orientation, setOrientation] = useState<string>(
    OrientationType.PORTRAIT,
  );

  useOrientationChange((o: string) => {
    setOrientation(o);
  });

  useEffect(() => {
    function onChange(data: any) {
      const {width: screenWidth, height: screenHeight} = data.screen;

      // flag is the case when iOS opens the camera to take video || image and rotates it landscape -> when back to the app, the dimensions do not change (because the app is always fixed to portrait)
      const flag =
        Platform.OS === 'android' &&
        (orientation === OrientationType['LANDSCAPE-LEFT'] ||
          orientation === OrientationType['LANDSCAPE-RIGHT']) &&
        screenHeight < screenWidth;

      setDimensions(
        flag
          ? {
              width: Math.round(data.screen.height),
              height: Math.round(data.screen.width),
            }
          : {
              width: Math.round(data.screen.width),
              height: Math.round(data.screen.height),
            },
      );
    }

    listener.current = Dimensions.addEventListener('change', onChange);

    return () => {
      listener.current.remove();
    };
  }, [orientation]);

  return dimensions;
}
