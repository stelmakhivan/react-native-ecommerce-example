import {getTestID} from './getTestID';

describe('The getTestID helper', () => {
  const TEST_ID_MOCK = {
    ID: 'ID',
  };

  it('should unmodified testID', () => {
    expect(getTestID({testID: TEST_ID_MOCK, prefix: ''})).toStrictEqual(
      TEST_ID_MOCK,
    );
  });

  it('should testID with prefix', () => {
    const testID = getTestID({testID: TEST_ID_MOCK, prefix: 'TEST'});

    expect(testID.ID).toStrictEqual('TEST_ID');
  });
});
