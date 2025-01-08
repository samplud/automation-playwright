import {test, expect} from 'playwright/test';
const {listUsers} = require('../../../pages/reqres/users');

const path = '/users';
const testCase = {
    describe: `Get List Users | [GET] ${path}`,
    describePositive: 'Positive Test Cases',
    describeNegative: 'Negative Test Cases',
    positive: {
        listUser: 'As a user, I can get list users'
    }
};

test.describe(`@getListUser ${testCase.describe}`, () => {
    test.describe(testCase.describePositive, () => {
        test(`${testCase.positive.listUser}`, async() => {
            const res = await listUsers(2);
            console.log(res.body);
            expect(res.status).toBe(200);
            expect(res.body.page).toBe(2);
            expect(res.body.data[0]).toBeTruthy();
        })
    })
})
