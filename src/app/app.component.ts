import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bazel-with-lib';
  subject = new BehaviorSubject('hello');
  piped: Observable<string> = this.subject.pipe(
    map(it => `${it}!!!`)
  );
}
