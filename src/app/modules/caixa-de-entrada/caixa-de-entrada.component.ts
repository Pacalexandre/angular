import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: []
})
export class CaixaDeEntradaComponent {

  private _isNewEmailFormOpen = false;

  emailList = [];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  constructor( private emailService: EmailService){}

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen
  }

  handleNewEmail(formEmail: NgForm) {

    if (formEmail.invalid) return;

    this.emailService.enviar(this.email)
    .subscribe(
      emailApi => {
        this.emailList.push(emailApi)
        this.email = {destinatario: '', assunto: '', conteudo: ''}
        formEmail.reset()
      }
      ,erro => console.error(erro)
    )

    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: ''
    }

    formEmail.reset();

  }

  handleRemoveEmail(eventoVaiRemover, emailId){
    console.log(eventoVaiRemover, emailId);
    if(eventoVaiRemover.status === 'removing'){
      this.emailService.deletar(emailId)
      .subscribe(
        res => {
          console.log(res);
          this.emailList = this.emailList.filter(email => email.id != emailId);

        }
        ,err => console.error(err)
        
        
      )

    }

  }

  removeEmail(click: Event){
    console.log('clicou no botao remove');
  }

  ngOnInit(){
    this.emailService.listar()
    .subscribe(
      lista => {
        this.emailList = lista;
      }
    )
  }

}
