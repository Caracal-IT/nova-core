import {Injectable} from "@angular/core";
import {HttpClient, HttpHandler} from "@angular/common/http";

@Injectable()
export class NovaHttpClient extends HttpClient {
  constructor(handler: HttpHandler){
    super(handler);
  }
}
