import camelCase from 'lodash/camelCase';
import snakeCase from 'lodash/snakeCase';
import upperFirst from 'lodash/upperFirst';

// component.tsx
const component = (name: string) => `import {FC} from 'react';
import {View, Text} from 'react-native';

import styles from './${camelCase(name)}.styles';
import {TEST_ID} from './${camelCase(name)}.testID';
import {${name}Props} from './${camelCase(name)}.types';

const ${name}: FC<${name}Props> = () => {
  return (
    <View style={styles.container} testID={TEST_ID.${snakeCase(
      name,
    ).toUpperCase()}}>
      <Text>${name} component</Text>
    </View>
  );
};

export {${name}};
`;

// component.types.ts
const types = (name: string) => `export type ${name}Props = {};
`;

// component.testID.ts
const testID = (name: string) => `export const TEST_ID = {
  ${snakeCase(name).toUpperCase()}: '${snakeCase(name).toUpperCase()}',
};
`;

// component.styles.ts
const styles = () => `import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
});

export default styles;
`;

// component.test.tsx
const test = (
  name: string,
) => `import {render} from '@testing-library/react-native';

import {${upperFirst(name)}} from './${upperFirst(name)}';

describe('The ${upperFirst(name)} component', () => {
  it('should render title', () => {
    const {getByText} = render(<${upperFirst(name)} />);

    expect(getByText('${upperFirst(name)} component')).toBeTruthy();
  });
});
`;

export {component, styles, test, types, testID};
