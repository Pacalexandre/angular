import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('\\d{4,5}-?\\d{4}')]),
    avatar: new FormControl('', [Validators.required], this.validaImagem.bind(this))
  })

  validarTodosOsCamposDoFormulario(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsTouched({ onlySelf: true })
    })
  }

  validaImagem(campoDoFormulario: FormControl) {
    return this.httpClient.head(campoDoFormulario.value,
      {
        observe: 'response'
      }).pipe(map((response: HttpResponseBase) => {
        return response.ok ? null : { urlInvalida: true }
      }),
        catchError((error) => {
          return [{ urlInvalida: true }]
        })
      );
  }

  handleCadastrarUsuario() {
    console.log(this.formCadastro.value);
    if (this.formCadastro.valid) {
      console.log(this.formCadastro.value);
      this.formCadastro.reset();
    } else {
      this.validarTodosOsCamposDoFormulario(this.formCadastro);
    }
  }

}
