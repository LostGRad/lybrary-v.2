import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Books } from './books';
// import { Authors } from './authors';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
    createDb() {
        const booksDB = [
          { id: 1, bookName:'bookName1', author: 'Mr.Nice lastName1',year:'1111',genre:'genre' },
          { id: 2, bookName:'bookName2', author: 'Narco lastName2',year:'1111' ,genre:'genre' },
          { id: 3, bookName:'bookName3', author: 'Bombasto lastName3',year:'1111' ,genre:'genre' },
          { id: 4, bookName:'bookName4', author: 'Celeritas lastName4',year:'1111' ,genre:'genre' },
          { id: 5, bookName:'bookName5', author: 'Magneta lastName5',year:'1111' ,genre:'genre' },
          { id: 6,bookName:'bookName6', author: 'RubberMan lastName6',year:'1111' ,genre:'genre' },
          { id: 7,bookName:'bookName7', author: 'Dynama lastName7',year:'1111' ,genre:'genre' },
          { id: 8,bookName:'bookName8', author: 'Dr IQ lastName8',year:'1111' ,genre:'genre' },
          { id: 9,bookName:'bookName9', author: 'Magma lastName9',year:'1111' ,genre:'genre' },
          { id: 10,bookName:'bookName10', author: 'Tornado lastName10',year:'1111' ,genre:'genre' },
          { id: 11, bookName:'bookName2', author: 'Mr.Nice lastName1',year:'1111' ,genre:'genre' }
        ];
        const authorsDB = [
          { id: 1, firstName: 'Mr.Nice', lastName:'lastName1', booksName:['bookName1','bookName1']},
          { id: 2, firstName: 'Narco', lastName:'lastName2', booksName:['bookName1','bookName1']},
          { id: 3, firstName: 'Bombasto', lastName:'lastName3', booksName:['bookName1','bookName1'] },
          { id: 4, firstName: 'Celeritas', lastName:'lastName4', booksName:['bookName1','bookName1'] },
          { id: 5, firstName: 'Magneta', lastName:'lastName5', booksName:['bookName1','bookName1']},
          { id: 6, firstName: 'RubberMan', lastName:'lastName6', booksName:['bookName1','bookName1']},
          { id: 7, firstName: 'Dynama', lastName:'lastName7', booksName:['bookName1','bookName1']},
          { id: 8, firstName: 'Dr IQ', lastName:'lastName8', booksName:['bookName1','bookName1']},
          { id: 9, firstName: 'Magma', lastName:'lastName9', booksName:['bookName1','bookName1']},
          { id: 10, firstName: 'Tornado', lastName:'lastName10', booksName:['bookName1','bookName1','bookName1','bookName1','bookName1','bookName1'] }
        ];
        return {booksDB, authorsDB};
      }
      // genId(booksDB: Books[]): number
      // {
      //   return booksDB.length > 0 ? Math.max(...booksDB.map(books => books.id)) + 1 : 11;
      // }
}
