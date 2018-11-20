import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Authors } from './authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorsInMemoryDataService {

    // createDb() {
    //     const authorsDB = [
    //       { id: 1, firstName: 'Mr.Nice', lastName:'lastName1'},
    //       { id: 2, firstName: 'Narco', lastName:'lastName2' },
    //       { id: 3, firstName: 'Bombasto', lastName:'lastName3' },
    //       { id: 4, firstName: 'Celeritas', lastName:'lastName4' },
    //       { id: 5, firstName: 'Magneta', lastName:'lastName5' },
    //       { id: 6, firstName: 'RubberMan', lastName:'lastName6'},
    //       { id: 7, firstName: 'Dynama', lastName:'lastName7'},
    //       { id: 8, firstName: 'Dr IQ', lastName:'lastName8' },
    //       { id: 9, firstName: 'Magma', lastName:'lastName9'},
    //       { id: 10, firstName: 'Tornado', lastName:'lastName10' }
    //     ];
    //     return {authorsDB};
    //   }
    //   genId(authorsDB: Authors[]): number
    //   {
    //     return authorsDB.length > 0 ? Math.max(...authorsDB.map(authors => authors.id)) + 1 : 11;
    //   }
}
