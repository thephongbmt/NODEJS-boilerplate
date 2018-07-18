/*eslint-disable*/
import server from '../server';

export const test = (describeMess = '[MissDescription]', testCases) => {
  describe(describeMess, () => {
    after(done => {
      server.close();
      done();
    });
    testCases.forEach(test => {
      it(test.message, test.itFunc);
    });
  });
};
