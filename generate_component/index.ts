import fs from 'fs';

import inquirer from 'inquirer';
import camelCase from 'lodash/camelCase';

import {component, styles, test, types, testID} from './component_templates';

const writeFileErrorHandler = (err: NodeJS.ErrnoException | null) => {
  if (err) {
    throw err;
  }
};

const generateComponent = async (): Promise<string> => {
  const {type, name} = await inquirer.prompt<{
    type: 'component' | 'screen';
    name: string;
  }>([
    {
      name: 'type',
      message: 'Select type of react-native component',
      type: 'list',
      choices: ['component', 'screen'],
    },
    {
      name: 'name',
      message: 'Type name of react-native component',
      type: 'input',
    },
  ]);

  if (!type) {
    throw new Error('Type of component is required');
  }

  if (!name) {
    throw new Error('Name of component is required');
  }

  const PATHS = {
    component: `./src/components/${name}/`,
    screen: `./src/screens/${name}/`,
  };

  const dir = PATHS[type];

  // throw an error if the file already exists
  if (fs.existsSync(dir)) {
    throw new Error('A component with that name already exists.');
  }

  // create the folder
  fs.mkdirSync(dir);

  // component.tsx
  fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
  // component.types.ts
  fs.writeFile(
    `${dir}/${camelCase(name)}.types.ts`,
    types(name),
    writeFileErrorHandler,
  );
  // component.testID.ts
  fs.writeFile(
    `${dir}/${camelCase(name)}.testID.ts`,
    testID(name),
    writeFileErrorHandler,
  );
  // component.styles.ts
  fs.writeFile(
    `${dir}/${camelCase(name)}.styles.ts`,
    styles(),
    writeFileErrorHandler,
  );
  // component.test.tsx
  fs.writeFile(
    `${dir}/${camelCase(name)}.test.tsx`,
    // eslint-disable-next-line jest/no-disabled-tests
    test(name),
    writeFileErrorHandler,
  );

  return dir;
};

generateComponent().then(dir =>
  console.warn(`Successfully created component by path ${dir}`),
);
