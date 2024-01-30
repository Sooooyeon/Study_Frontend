/*
constructor가 필요하지 않은 경우 아래와 같이 생략할 수 있다.

class ABBA {
  a: string = '123';
  b: number = 123;
  method(){

  }
}

*/


// constructor가 있는 경우
class ABAB {
  a: string;
  b: number;

  constructor(a: string, b:number = 123){
    this.a = a;
    this.b = b;
  }

  method(){

  }
}

// 아래처럼 사용하기 위해 constructor가 필요
const abab = new ABAB('123') 
// 기본값이 있는 b는 인수로 넣지 않아도 오류가 발생하지 않음 (인수로 넣어 재할당 가능)


// 클래스의 이름은 그 자체로 타입이 될 수 있다.
type Q = ABAB; // 여기서 ABAB는 new ABAB()를 의미
const ababab: ABAB = new ABAB('123');
// 클래스 이름은 인스턴스를 가리킨다.

// 클래스 자체를 가리키는 타입은 typeof ABAB;
const abc: typeof ABAB = ABAB


// private
class P {
  private a : string = '123'; // ts의 privata
  // ts의 private사용을 권장 protected 사용해 구분이 가능.
  // 다만 실제 코드에서는 public으로 변경됨. 

  #b: number = 123; // js의 private , protected가 안됨

  method(){
    console.log(this.a, this.#b)
  }

}


// class에 추가된 기능들
interface E {
  // readonly a: string;
  // b: string;
}
class FF implements E { 
  // implements를 사용하면 class의 모양을 interface로 통제할 수 있음
  // FF에서 사용된 private, protected는 E에 없어서 오류 발생
  private readonly a: string ='123';
  protected b: string = 'hello';
  public c: string = 'world';
  // public은 기본으로 생략가능. (c: string = 'world')
  method(){
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
  }
}
class GG extends FF {
  method(){
  // private과 protected는 상속 받았을 때 사용 가능 여부에서 차이가 있다.
    console.log(this.a); // 상속 받아도 접근 불가능
    console.log(this.b); // 상속 받으면 접근 가능
    console.log(this.c);
  }
  }

// 인스턴스의 경우
new GG().a; // private로 접근 불가능
new GG().b; // protected로 접근 불가능
new GG().c;


/*
            public        protected         private
클래스 내부      o              o                 o
인스턴스        o              x                 x
상속클래스       o              o                 x

 */


// abstract붙여 가상클래스로 만들어 가상 클래스 메서드도 사용할 수 있다.
abstract class H {
  private readonly a: string = '123';
  protected b: string = 'hello';
  c: string = 'world';

  abstract method (): void;
  method2(){
    return '3';
  }
}
class I extends H {
  // 추상클래스 실제 구현은 여기서 한다.
  method(){
  // private과 protected는 상속 받았을 때 사용 가능 여부에서 차이가 있다.
    console.log(this.a); // 상속 받아도 접근 불가능
    console.log(this.b); // 상속 받으면 접근 가능
    console.log(this.c);
  }
  }

// 인스턴스의 경우
new I().a; // private로 접근 불가능
new I().b; // protected로 접근 불가능
new I().c;