console.log('hi!');
function sleepIn(weekday, vacation){
    return vacation || !weekday;
  }
  
  function monkeyTrouble(aSmile, bSmile){
    return aSmile == bSmile;
  }
  
  function sumDouble(a, b){
    if(a == b){
      return 2*(a+b);
    }else{
      return a + b;
    }
  }
  function frontBack(str){
    if(str.length > 1){
      let strArr = Array.from(str);
      temp = strArr[strArr.length-1];
      strArr[strArr.length-1] = strArr[0];
      strArr[0] = temp;
      let str2 = "";
      for(i = 0;i < strArr.length;i++){
        str2 += strArr[i];
      }
      return str2;
    }
    return str;
  }
  
  function intMax(a, b, c){
    if(a > b){
      if(a > c) return a;
      return c;
    }
    if(b > c) return b;
    return c;
  }
  
  function arrayCount9(nums){
    let count = 0;
    for(i=0;i<nums.length;i++){
      if(nums[i] == 9) count++;
    }
    return count;
  }
  
  function array667(nums){
    let count = 0;
    for(i=0;i<nums.length;i++){
      if(nums[i] == 6 && i + 1 < nums.length){
        if(nums[i+1] == 6 || nums[i+1] == 7) count++;
      }
    }
    return count;
  }
  
  function squirrelPlay(temp, isSummer){
    if(isSummer) return (temp >= 60 && temp <= 100);
    return (temp >= 60 && temp <= 90);
  }
  
  function withoutDoubles(die1, die2, noDoubles){
    if(noDoubles && die1==die2){
      if(die1 == 6) die1 = 0;
      return die1 + die2 + 1;
    }
    return die1 + die2;
  }
  
  function greenTicket(a, b, c){
    let count = 0;
    if(a==b) count++;
    if(a==c) count++;
    if(b==c) count++;
    if(count>0){
      if(count==3) return 20;
      return 10;
    }
    return count;
  }
  
  function blackjack(a, b){
    if(a > 21 && b > 21) return 0;
    if(a > b){
      if(a <= 21) return a;
      return b;
    }
    if(b > a && b <= 21) return b;
    return a;
  }
  
  function makeChocolate(small, big, goal){
    if(small + 5*big < goal) return -1;
    if(goal % 5 == 0 && (goal / 5) <= big) return 0;
    let count = 0;
    while(count / 5 < big && count + 5 < goal){
      count+=5;
    }
    return goal-count;
  }