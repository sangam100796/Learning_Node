class  Calculation {
    addition(num1,num2)
    {
        const ans = num1 + num2;
       return ans;
    }
    subtraction(num1,num2)
    {
        const ans = num1 - num2;
        return ans; 
    }
    multiplication(num1,num2)
    {
        const ans = num1 * num2;
        return ans;
    }
    division(num1,num2)
    {
        if(isNaN(num1) || isNaN(num2)|| num2==0)
        {
            return "error";
        }
        else
        {
            const ans = num1 / num2;
            return ans;
        }
    }
}
module.exports=Calculation;