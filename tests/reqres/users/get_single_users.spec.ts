import {test, expect} from 'playwright/test';
const {singleUser} = require ('../../../pages/reqres/users');

const path = '/users/{userId}';
const testCase = {
    describe: `Get Single User | [GET] ${path}`,
    describePositive: 'Positive Test Cases',
    describeNegative: 'Negative Test Cases',
    positive: {
        singleUser: 'As an admin, I can get single user'
    },
    negative: {
        notFound: 'As an admin, I can not get user if data not found'
    }
};

test.describe(`@getSingleUser ${testCase.describe}`, () => {
    test.describe(testCase.describePositive, () => {
        test(`${testCase.positive.singleUser}`, async () => {
            const res = await singleUser(2);
            console.log(res.body);
            expect(res.status).toBe(200);
            expect(res.body.data.id).toBe(2);
        })
        
    })
})