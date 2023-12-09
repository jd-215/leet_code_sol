// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

//Slolution of the code

function productExceptSelf(nums: number[]): number[] {
        
    let ans: number [] = []

    let post = 1
    let pre = 1

    for(let i =0 ; i<nums.length ; i ++){
        ans[i] = pre
        pre = pre * nums[i] 
    }
    for (let j = nums.length - 1 ; j>=0 ;j--){
            ans[j] = ans[j] * post
            post = post* nums[j]
    }
    
    console.log(ans)

}

productExceptSelf([1,2,3,4])