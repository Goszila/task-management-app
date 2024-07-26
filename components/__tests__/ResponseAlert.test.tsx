import { Alert } from 'react-native';
import ResponseAlert from '../ResponseAlert';

jest.mock('react-native', () => {
  return {
    Alert: {
      alert: jest.fn(),
    },
  };
});

describe('ResponseAlert', () => {
  it('should call Alert.alert with correct parameters', () => {
    const mockCbFunction = jest.fn();
    const props = {
      title: 'Title Message',
      detailMessage: 'Detail Message',
      cbFunction: mockCbFunction,
    };

    ResponseAlert(props);

    expect(Alert.alert).toHaveBeenCalledTimes(1);

    const callArgs = Alert.alert.mock.calls[0];

    expect(callArgs[0]).toBe(props.title);
    expect(callArgs[1]).toBe(props.detailMessage);
    expect(callArgs[2]).toEqual([{ text: 'OK', onPress: expect.any(Function) }]);
    expect(callArgs[3]).toEqual({ cancelable: false });

    const onPressCallback = callArgs[2][0].onPress;
    onPressCallback();
    expect(mockCbFunction).toHaveBeenCalled();
  });
});
