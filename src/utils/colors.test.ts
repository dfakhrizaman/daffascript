import { alpha } from '@mui/material';
import Colors from './colors';

describe('Colors object', () => {
  it('should contain the correct color values', () => {
    expect(Colors).toEqual({
      background: '#DBE3CE',
      black: '#1B2118',
      white: '#f2f3e7',
      lightGreen: '#CCDCB0',
      green: '#86D7A3',
      blue: '#82BBF2',
      red: '#EC7E5C',
      yellow: '#FEFED2',
      gray: alpha('#1B2118', 0.15),
    });
  });

  it('should have all expected color keys', () => {
    const expectedKeys = [
      'background',
      'black',
      'white',
      'lightGreen',
      'green',
      'blue',
      'red',
      'yellow',
      'gray',
    ];
    expect(Object.keys(Colors)).toEqual(expectedKeys);
  });

  it('should have valid hex color values', () => {
    Object.values(Colors).forEach((color) => {
      expect(color).toMatch(/^#([A-Fa-f0-9]{6})$/); // Validates hex format
    });
  });
});
