Feature('login');

const { I } = inject();

Scenario('API POST positive', async () => {
    const res = await I.sendPostRequest('api/user/login', { "email": "mnemonik@internet.ru", "password": "k9@v285wVR@E43W" });
    I.assertEqual(res.status, 200);
    console.log('Response : ', res);
    // console.log('Response status : ', res.status)
    // console.log('Response Data: ', res.data)

});

Scenario('API POST negative', async () => {
    const resNegativ = await I.sendPostRequest('api/user/login', { "email": "mnemonik@internet.ru", "password": "*k9@v285wVR@E43W" });
    I.assertEqual(resNegativ.status, 403);
    console.log('Response : ', resNegativ);
    // console.log('Response status : ', res.status)
    // console.log('Response Data: ', res.data)

});