import { Component, Input, Output, DoCheck, EventEmitter } from '@angular/core';

@Component({
  selector: 'instalation-problem-select',
  templateUrl: 'instalation-problem-select.html'
})
export class InstalationProblemSelect implements DoCheck {
  @Input() model:any;
  @Output() modelChange = new EventEmitter();
  @Input() showBanner?:boolean = false;

  instalations:any[] = [
    {id: 1, name: "Acometida Domiciliaria", problems: [
      {name: "Fuego", danger: true},
      {name: "Chisporroteo", danger: true},
      {name: "Mal estado"},
      {name: "Cortada"}
    ]
  },
    {id: 2, name: "Caja, buzón o fusiblera", problems: [
      {name: "Fuego", danger: true},
      {name: "Chisporroteo", danger: true},
      {name: "Tensión", danger: true}
    ]
  },
    {id: 3, name: "Cámara", problems: [
      {name: "Fuego", danger: true},
      {name: "Chisporroteo", danger: true},
      {name: "Inundada", danger: true}
    ]
  },
    {id: 4, name: "Línea", problems: [
      {name: "Cortada", danger: true},
      {name: "Mal estado"}
    ]
  },
    {id: 5, name: "Medidor", problems: [
      {name: "Fuego", danger: true},
      {name: "Chisporroteo", danger: true}
    ]
  },
    {id: 6, name: "Pilar, cerco o pared", problems: [
      {name: "Fuego", danger: true},
      {name: "Chisporroteo", danger: true},
      {name: "Tensión", danger: true}
    ]
  },
    {id: 7, name: "Poste", problems: [
      {name: "Fuego", danger: true},
      {name: "Chisporroteo", danger: true},
      {name: "Inclinado"},
      {name: "Roto"}
    ]
  },
    {id: 8, name: "Transformador", problems: [
      {name: "Fuego", danger: true},
      {name: "Chisporroteo", danger: true},
      {name: "Perdida de aceite", danger: true}
    ]
  },
    {id: 0, name: "No puedo identificarlo"}
  ];

  instalationChanged(){
    delete this.model.problem;
    delete this.model.danger;
  }

  problemChanged(){
    delete this.model.danger;
  }

  ngDoCheck(){
    this.modelChange.next(this.modelChange);
  }
}
