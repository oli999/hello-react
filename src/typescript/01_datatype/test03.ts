/*
    [ array type ]
    
    데이터 type[]  형식으로 만들수 있다. 

    number[] , string[], boolean[], object[] ... 
*/

// nums 는 number[] type 이다
let nums=[10, 20, 30];

// type 을 명시적으로 선언하면 아래와 같다 
let nums2:number[] = [40, 50, 60];

// names 는 string[] type 이다 
let names=["kim", "lee", "park"];

// nums 는 number[] type 이기 때문에 당연히 a 는 number type 으로 추론된다.
// undefined type 도 가능 
// type 을 정확히 명시하면  number | undefined  인  union(합집합) type 이된다.
let a=nums[10];

// result 는 number 또는 string 이 들어 있는 배열
let result: (number|string)[];

result = [10, "kim", "lee", 20];
