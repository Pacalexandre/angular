import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styleUrls: ['./cmail-list-item.component.css'],
  styles: [`
  ul,li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }`]

})
export class CmailListItemComponent implements OnInit {

  @Input() destinatario = '';
  @Input() assunto = '';
  @Input() introducaoDoConteudo='';
  @Input() dataDeEnvio = '';
  @Output('eventoVaiRemover') vaiRemover = new EventEmitter() 
  
  constructor() { }

  ngOnInit() {}

  removeEmail(click: Event){
    console.log('clicou no botao')
    if(confirm('Tem certeza?')){
      this.vaiRemover.emit({status: 'removing'})
    }
  }

}
