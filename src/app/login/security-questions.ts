import { Component } from '@angular/core';
import { SecurityQuestion } from '../model/security_question';

@Component({
  selector: 'security-questions',
  templateUrl: './security-questions.html',

})
export class SecurityQuestions {
  securityQuestions: Array<SecurityQuestion> = [
    {
      title: "Identifique el domicilio del suministro número 12345678",
      type: "radio",
      answer: null,
      options: [
        {
          id: 1,
          value: "15 Nro 570 E/ 41 y 44 Fondo a 13"
        },
        {
          id: 2,
          value: "16 Nro 571 E/ 42 y 44 Fondo a 13"
        },
        {
          id: 3,
          value: "14 Nro 572 E/ 43 y 44 Fondo a 13"
        }
      ]
    },
    {
      title: "Identifique el telefono asociado",
      type: "radio",
      answer: null,
      options: [
        {
          id: 1,
          value: "15342456"
        },
        {
          id: 2,
          value: "15235412"
        },
        {
          id: 3,
          value: "15768312"
        }
      ]
    }
  ]

  submit(){
    console.log(this.securityQuestions);
  }

}
