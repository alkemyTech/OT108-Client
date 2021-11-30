import { Component, OnInit } from '@angular/core';
import{trigger,style,transition,animate, state} from'@angular/animations'
@Component({
  selector: 'app-dashboard-screen',
  templateUrl: './dashboard-screen.component.html',
  styleUrls: ['./dashboard-screen.component.scss'],
  animations:[trigger('left',[state('void',style({transform:'translateX(400%)',opacity:0})),
      transition(':enter',[animate(2500,style({transform:'translateX(0)',opacity:1}))])]),
    trigger('up',[state('void',style({transform:'translateY(400%)',opacity:0})),
      transition(':enter',[animate(2500,style({transform:'translateY(0)',opacity:1}))])
    ]),
    trigger('down',[state('void',style({transform:'translateY(-400%)',opacity:0})),
      transition(':enter',[animate(2500,style({transform:'translateY(0)',opacity:1}))])
    ]),
    trigger('right',[state('void',style({transform:'translateX(-400%)',opacity:0})),
    transition(':enter',[animate(2500,style({transform:'translateX0)',opacity:1}))])
  ])
  ]
})
export class DashboardScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  go(route:string){
    switch (route) {
      case 'members':
        
        break;
      case 'user':
        
        break;
      case 'slides':

        break;
      case 'community':

        break;
      case 'testimony':

        break;
      case 'categories':

        break;
      case 'activities':

        break;
      case 'novelties':

        break;
    }
  }
}
