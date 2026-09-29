import * as EXCEL from 'xlsx';
import fs from 'fs';

interface TestCredential {
    Id: number,
    Username: string,
    Password: string
}

export function readExcelFile(filePath:string) {

   const file = fs.readFileSync(filePath); 

   const workbook = EXCEL.read(file);

   const sheet = workbook.Sheets[workbook.SheetNames[0]];

   const rawData: any[] = EXCEL.utils.sheet_to_json(sheet, {header:1})

   const credentialsExcelList: TestCredential[] = rawData.slice(1).map((column: any)=> ({
    Id : column[0],
    Username : column[1],
    Password : column[2]
   }))
   return credentialsExcelList;
}