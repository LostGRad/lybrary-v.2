import {TemplateRef, ViewChild} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
////
import {Books} from '../books';
import {Authors} from '../authors';
///services
import { LibraryService} from '../library.service';
import { AuthorsService} from '../authors.service';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['../buttons/buttons.component.css'],
   providers: [HttpService]
})
export class AUTHORSComponent implements OnInit {
        title = 'Authors';
        booksItems: Books[]=[];
        authorsItems: Authors[]=[];
        @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
        @ViewChild('editTemplate') editTemplate: TemplateRef<any>;
        editedAuthor: Authors;
        editedBook: Books;
        authors: Array<Authors>;
        isNewRecord: boolean;
        statusMessage: string;
          constructor(private libraryService: LibraryService,private authorsService: AuthorsService) { }
          ngOnInit() {
               this.getBooks();
               this.getAuthors();
          }
          ///gets
          getBooks(): void {
       this.libraryService.getBooks()
       .subscribe(booksItems => this.booksItems = booksItems);
      }
      getAuthors(): void {
          this.authorsService.getAuthors()
          .subscribe(authorsItems => this.authorsItems = authorsItems);
      }


      ///
      loadTemplate(author: Authors) {
         if (this.editedAuthor && this.editedAuthor.id == author.id) {
           return this.editTemplate;
        } else {
             return this.readOnlyTemplate;
         }
      }
      addAuthor() {
        this.editedAuthor = new Authors();
         this.authorsItems.push(this.editedAuthor);
          this.isNewRecord = true;
      }
      saveBook() {
 //  console.log(this.editedAuthor.id);
           if (this.isNewRecord) {
               this.authorsService.createData(this.editedAuthor).subscribe(data => {
                   this.statusMessage = 'Дані успішно добавлені',
                   this.getAuthors();
               });
               // this.libraryService.createData(this.editedAuthor).subscribe(data => {
               //     this.getBooks();
               // });
               this.isNewRecord = false;
               this.editedAuthor = null;
           } else {
               this.authorsService.updateData(this.editedAuthor.id, this.editedAuthor).subscribe(data => {
                   this.statusMessage = 'Дані удачно обновились',
                   this.getAuthors();
               });
               // this.libraryService.updateData(this.editedAuthor.id, this.editedBook).subscribe(data => {
               //     this.getBooks();
               // });
               this.editedAuthor = null;
           }
       }
       cancel() {
            if (this.isNewRecord) {
                this.authorsItems.pop();
                this.isNewRecord = false;
            }
            this.editedAuthor = null;
        }
       editAuthor(author: Authors)
      {

      this.editedAuthor = new Authors();
      this.editedAuthor.id=author.id;
      this.editedAuthor.firstName=author.firstName;
      this.editedAuthor.lastName=author.lastName;
      this.editedAuthor.booksName=author.booksName;
      }
      deleteBook(author: Authors): void
      {
        this.authorsItems = this.authorsItems.filter(a => a !== author);
        this.authorsService.deleteAuthor(author).subscribe();
      }
      // booksForAuthor(author: Authors)
      // {
      //     var bookName="";
      //     for(let i = 0; i<this.booksItems.length; i++)
      //     {
      //         if(author.firstName==this.booksItems[i].firstName)
      //         {
      //             bookName+=this.booksItems[i].bookName+";";
      //       }
      //    }
      //    return bookName;
      // }
      // change(author: Authors){
      //     let bookName=this.booksForAuthor(author).split(';');
      //           for(let i = 0; i<bookName.length-1; i++)
      //           {
      //
      //             for(let j = 0; j<this.booksItems.length; j++)
      //             {
      //                 if((bookName[i]==this.booksItems[j].bookName)){
      //                     console.log(bookName[i]);
      //                 }
      //             }
      //           }
      //             //return bookName;
      //
      //     }





}
