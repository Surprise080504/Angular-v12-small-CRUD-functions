import { Injectable } from '@angular/core';

import { BaseService } from './baseService.service'

@Injectable({
    providedIn: 'root'
})
export class ProductService {


    constructor(private BaseService: BaseService) { }

    getproducts() {
        // return this.http.get(this.url);  
        return this.BaseService.getData();
    }

}  