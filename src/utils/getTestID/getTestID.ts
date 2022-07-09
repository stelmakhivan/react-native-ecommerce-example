import {GetTestIDArgs} from 'utils/getTestID/getTestID.types';

export const getTestID = <TestID extends Record<string, string>>({
  testID,
  prefix,
}: GetTestIDArgs<TestID>): TestID => {
  return new Proxy(testID, {
    get: (obj, prop: string) => {
      return prefix ? `${prefix}_${obj[prop]}` : obj[prop];
    },
  });
};
