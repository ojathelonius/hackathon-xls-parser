import xlsx from 'node-xlsx';
import polyfill from 'idempotent-babel-polyfill';
import fs from 'fs';

/* OPTIONAL */
// If creating an executable using nexe or pkg
import { argv } from 'yargs';

// If API calls needed
import axios from 'axios';

// If API uses XML
// Send XML
import builder from 'xmlbuilder';
// Parse XML
import parser from 'pixl-xml';

(async () => {

    /* Taking args, e.g. --limit */
    const limit = argv.limit ? argv.limit : undefined;

    try {

        /* Parse the file (can take args, e.g. --file) */
        const worksheet = xlsx.parse(argv.file ? argv.file : 'file.xlsx');

        let index = 0;

        let result = '';

        for (let data of worksheet[0].data) {

            // Do something with the data, either :

            // Stack it
            result += result.data;

            // Use it to call an API
            let response = await axios({
                method: 'post',
                url: 'https://my.api.fr/',
                headers: {},
                data: data.some.parameter
            });
            result += response.data;

            /* Limit number of analyzed results (maybe input data is too large for this proof of concept)  */
            if (limit && index > limit) {
                break;
            }
            index++;
        }

        // Then, either :

        // Export it as another Excel
        var buffer = xlsx.build([{ name: "output", data: result }]);
        fs.writeFileSync("output.xlsx", buffer);

        // Just write it to the file system
        fs.writeFileSync("output.txt", result);

    } catch (e) {
        console.log('File not found.')
    }
})();






