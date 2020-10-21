import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public cards = [
    {
      quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live',
      person: 'John Woods'
    },
    {
      quote: 'Talk is cheap. Show me the code.',
      person: 'Linus Torvalds'
    },
    {
      quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      person: 'Martin Fowler'
    },
    {
      quote: 'Truth can only be found in one place: the code.',
      person: 'Robert C. Martin'
    },
    {
      quote: 'Give a man a program, frustrate him for a day.  Teach a man to program, frustrate him for a lifetime.',
      person: 'Muhammad Waseem'
    },
    {
      quote: 'That\'s the thing about people who think they hate computers. What they really hate is lousy programmers.',
      person: 'Larry Niven'
    },
    {
      quote: 'A language that doesn\'t affect the way you think about programming is not worth knowing.',
      person: 'Alan J. Perlis'
    },
    {
      quote: 'Everyone knows that debugging is twice as hard as writing a program in the first place. So if you\'re as clever as you can be when you write it, how will you ever debug it?',
      person: 'Brian Kernighan'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
