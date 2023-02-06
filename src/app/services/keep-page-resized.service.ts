import { Injectable } from '@angular/core';
import { Pages, PageSize } from '../interfaces/pageSize.interface';

@Injectable({
  providedIn: 'root'
})
export class KeepPageResizedService {

  constructor() { }

  pages: Pages = {
    uiBrExtSearch: {},
    uiBrExtCreatePage: {},
    uiBrExtCreateEvent: {},
    uiBrExtSettings: {},
    uiBrExtExecute: {},
    uiBrExtLogin: {},
    uiBrExtSignup: {},
  }

}


