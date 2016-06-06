///<reference path="../typings/browser.d.ts"/>
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import {LoggingService} from "./logging.service";
import {CalculatorService} from "./calculator.service";

bootstrap(AppComponent, [LoggingService, CalculatorService]);