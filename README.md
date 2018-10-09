# Hackaton XLS parser
This is a simple code sample used to parse data from an Excel file, then either :

* make API calls for each row
* get particular data from rows and concatenate it
* build another Excel file using the parsed data

## Uses
There are different contexts in which this sample can be useful :

* Get a **subset of data** from a complex Excel file (e.g. a character-separated list of emails from a database export to be used for a mailing list)
* **Fix incomplete data** : for instance, you can reverse geolocate an entire list of PoIs using their coordinates, and save additional data in the file (addresses, zip codes...)

## How to use
As the tool is written in ES6, you first need to port it to ES5 with :

`npm run build`

Then run it with the following :

`node dist --file myfile.xls --limit 500`

The `--file` and `--limit` parameter are optional, more details are in the source.

### Build an executable
If needed, make a portable version of the tool using `nexe` or `pkg` so that it can easily be used without node.