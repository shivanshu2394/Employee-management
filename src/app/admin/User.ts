export class User{
    first_name:String=""
    setname(data:any){
        this.first_name=data
    }
    getname(){
        return this.first_name
    }
}