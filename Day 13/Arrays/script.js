/*



*/


let arr = [121,51,8,89,12,178,34]
let ans = 999999999999
for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]%2==0&&arr[j]%2==0&&arr[i]>0&&arr[j]>0){
            ans = Math.min(j-i, ans)
        }
    }
    if(ans==999999999999){
        return -1
    }else{
        return ans;
    }
}
