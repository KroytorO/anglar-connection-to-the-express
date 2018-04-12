import {Component, OnInit} from '@angular/core';
import {HttpService} from "./http.service";

//создадим интерфейс юзера
interface User{
  name:string;
  age: number;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[HttpService]
})
export class AppComponent  implements OnInit{
 // user является интерфейсом User,но массивом
 user: User[]=[];
  constructor(private httpservice: HttpService ){}

/**Библиотека rsjx оптимизирует наш код, она смотрит если нет никаких слушателей
 * на наш стрим, то она просто не будет работать. Для этого мы подписываемся
 * на стрим, который возращает метод getUsers*/
  ngOnInit(){
    //указываем, что ожидаем получить уже сам массив юзеров (user: User[])
    this.httpservice.getUsers().subscribe((user: User[])=>{
        this.user = user;
      console.log(user);
    }
    );
 /**метод subscribe принимает либо объект либо 3 функкции либо 1 функцию ,
   которая будет выполненна по завершению стрима */
  }
}
