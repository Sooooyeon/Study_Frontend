interface Axios {
  get(): void;
}

class CustomError extends Error {
  response?: {
    data: any;
  }
}

// 인터페이스는 타입가드로 사용할 수 없다.(class 로 바꿔서 적용하기)

/*
extends 키위드가 생각나지 않을경우 아래롸 같이 사용 할 수 있다.

class CustomError {
  name: string;
  message: string;
  stack?: string;
  response?: {
    data: any;
  }
}


 */
declare const axios: Axios;

(async () => {
  try {
    await axios.get();
  } catch (err: unknown){
    // 아래처럼 타입 가드를 적용하면 err를 unknown으로 지정하지 않아도 된다.

    // as 단언을 하면 CustomError가 아닐경우 문제가 발생한다. 따라서 as를 사용하지 않고 타입가드를 적용하는것이 좋다.
    if(err instanceof CustomError){
      console.error((err as CustomError).response?.data);
      // err.response?.data -> 타입스크립트는 일회성으로 위에서 as로 단언했음에도 불구하고 에러 발생.
      (err as CustomError).response?.data


      // 타입 가드를 적용하고 아래와 같이 as 없이 사용하는 것이 좋다.
      console.error(err.response?.data);
      err.response?.data


      //변수에 담아서 사용하면 해결가능
      const customError = err as CustomError;
      console.error(customError.response?.data);
      customError.response?.data;
    }
    
  }
})();