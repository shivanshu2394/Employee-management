import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NewEmployeeData {
    data = {
        first_name: '',
        last_name: ''
    }
    getData(val: any) {
        this.data = val        
    }
    setData() {
        return this.data
    }
}