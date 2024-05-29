// given n , we have to count the factors of n 
module.exports = {
    getCountOfFactors :function(A){
        // let count = 0 ;
        // for(let i = 1 ;i <=A ;i++){
        //     if(A%i==0) 
        //         count++;
        // }
        // return count;

        let count = 0 ; 
        for(let i = 1 ; i * i <= A ;i++){
            if(A%i==0){
                if(A/i==i)count++;
                else count+=2;
            }
        }
        return count;
    },
    checkPrime : function(A){
        let count = this.getCountOfFactors(A);
        if(count==2) return 1;
        return 0;
    }
}


