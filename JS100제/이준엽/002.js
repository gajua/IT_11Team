/**
 * <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하라.
 * 출력 값 = [200, 100, 10000, 300]
 */

var arr = [200, 100, 300];
//pass
arr.splice(2,0,10000);
console.log(arr);

// 1번문제와 동일한 splice() 메서드 활용.