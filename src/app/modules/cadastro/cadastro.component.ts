import { HttpClient, HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { User } from '../../models/user';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {
  mensagensErro: any;

  constructor(private httpClient: HttpClient, private roteador: Router) { }

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

    if (this.formCadastro.valid) {
      console.log(this.formCadastro.value);
      const userData = new User(this.formCadastro.value);
      this.httpClient.post('http://localhost:3200/users', userData).subscribe(
        () => {
          console.log('Cadastro com sucesso');

          setTimeout(() => {
            this.roteador.navigate(['/cadastro']);
          }, 1000);
          this.formCadastro.reset();
        }
        , (responseError: HttpErrorResponse) => {
          this.mensagensErro = responseError.error.body
        }
        //erro => console.error(erro)
      )

    } else {
      this.validarTodosOsCamposDoFormulario(this.formCadastro);

    }
  }

}
