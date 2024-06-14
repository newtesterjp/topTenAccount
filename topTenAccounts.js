import { LightningElement, track, wire } from 'lwc';
import AccountSearch from '@salesforce/apex/AccountManager.AccountSearch' 

export default class TopTenAccounts extends LightningElement {

    @track accounts;
    num;




    numHandler(event)
    {
        this.num=event.target.value;
    }

    Handle()
    {
        AccountSearch({numAcc:this.num}).then(
            response=>{
                this.accounts=response
            }).catch(error=>{
                console.log(error.body.message);
            }

            )
       
    }
    getStatus()
    {
        if(this.accounts)
            
           return true;
        else
            return false;
    }
  
}