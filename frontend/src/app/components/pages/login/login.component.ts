import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { ICustomer } from '../../../../../../backend/src/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  router: Router;
  name: string = '';
  cpf: string = '';
  table: number = 1;

  constructor(
    private customerService: CustomerService,
    router: Router
    ) { this.router = router;}

  ngOnInit(): void {}

 async handleClick()  {
  const newCustomer: ICustomer = {
    name: '',
    cpf: '',
    table: 0
  };

  newCustomer.name = this.name;
  newCustomer.cpf = this.cpf;
  newCustomer.table = this.table;

  await this.customerService.createCustomer(newCustomer).subscribe();

  this.name = '';
  this.cpf = '';

  this.router.navigate(['/cardapio'])
 }
}
