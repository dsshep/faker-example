import fs from 'fs';
import { stringify } from 'csv-stringify/sync';
import { faker } from '@faker-js/faker';

const count = 5;

const data =  [...Array(count).keys()]
    .map(_ => { return {
        fullname: faker.name.fullName(),
        address: faker.address.streetAddress(),
        email: faker.internet.email()
    }});

console.log(data);

fs.writeFile("./generated_data.csv", stringify(data), () => { });
