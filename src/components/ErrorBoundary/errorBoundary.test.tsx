import {ReactElement} from 'react';
import {Text} from 'react-native';

import {render} from '@testing-library/react-native';

import {ErrorBoundary} from './ErrorBoundary';
import {ERROR_TITLE} from './errorBoundary.settings';

const TestContent: () => ReactElement = () => <Text>Test Content</Text>;

//NOTE: This is a simulation of an error that can occur in real conditions
const ComponentWithError: () => ReactElement = () => {
  const arr: string[] = JSON.parse('true');

  return <Text>{arr[0].toUpperCase()}</Text>;
};

describe('The ErrorBoundary component', () => {
  //NOTE: ignore console error after 'throw new Error' when test running
  console.error = jest.fn();

  it('should render child', () => {
    const {getByText} = render(<TestContent />);

    expect(getByText('Test Content')).toBeTruthy();
  });

  it('should render error', () => {
    const {getByText, queryByText} = render(
      <ErrorBoundary>
        <TestContent />
        <ComponentWithError />
      </ErrorBoundary>,
    );

    expect(getByText(ERROR_TITLE)).toBeTruthy();
    expect(queryByText('Test Content')).toBeNull();
  });
});
