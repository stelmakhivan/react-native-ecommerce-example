import fs from 'fs';
import path from 'path';

import appRoot from 'app-root-path';
import fetch from 'node-fetch';
import {
  quicktype,
  InputData,
  jsonInputForTargetLanguage,
  Options,
} from 'quicktype-core';

const GENERATED_TYPES_PATH = path.join(appRoot.path, 'src/__generated__');

const fetchSchema = async () => {
  try {
    //TODO: move url to .env file and git env variables
    const response = await fetch(
      'https://my-json-server.typicode.com/benirvingplt/products/db',
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

async function quicktypeJSON(
  targetLanguage: Options['lang'],
  typeName: string,
  jsonString: string,
) {
  const jsonInput = jsonInputForTargetLanguage(targetLanguage);

  await jsonInput.addSource({
    name: typeName,
    samples: [jsonString],
  });

  const inputData = new InputData();
  inputData.addInput(jsonInput);

  const data = await quicktype({
    inputData,
    lang: targetLanguage,
    outputFilename: `${GENERATED_TYPES_PATH}/types.d.ts`,
    rendererOptions: {
      'just-types': 'true',
    },
  });

  const text = data.lines.join('\n');

  if (!fs.existsSync(GENERATED_TYPES_PATH)) {
    fs.mkdirSync(GENERATED_TYPES_PATH);
  }

  fs.writeFileSync(`${GENERATED_TYPES_PATH}/types.d.ts`, text);
}

const main = async () => {
  try {
    const schema = await fetchSchema();
    await quicktypeJSON('typescript', 'DB', JSON.stringify(schema));
  } catch (error) {
    console.error(error);
  }
};

main()
  .then(() => {
    console.warn('Successfully compiled schema');
  })
  .catch(error => console.error(error));

//TODO:remove comments with unused code
// compileFromFile(SCHEMA_FILE_PATH)
//   .then(ts => {
//     if (!fs.existsSync(GENERATED_TYPES_PATH)) {
//       fs.mkdirSync(GENERATED_TYPES_PATH);
//     }
//
//     fs.writeFileSync(`${GENERATED_TYPES_PATH}/types.d.ts`, ts);
//
//     console.warn('Successfully compiled schema');
//   })
//   .catch(error => console.error('Unable to compile schema', error));
