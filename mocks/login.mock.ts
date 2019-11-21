import { RequestMock } from 'testcafe';

export const loginMock = RequestMock()
    .onRequestTo('http://application.com/api/data')
    .respond({ data: 'Hello World!' }, 200);