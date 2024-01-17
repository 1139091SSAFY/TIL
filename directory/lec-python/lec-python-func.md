# Functions

<div style="text-align: right"> 24. 01. 17. </div>

## 1. 함수  

  * 함수(functions) 

    * 특정 작업을 수행하기 위한 재사용 가능한 코드 묶음 
    
  * 함수를 사용하는 이유  
  
    * *재사용성*이 높아지고, 코드의 *가독성과 유지보수성* 향상

  ```python
  # 두 수의 합을 구하는 코드
  num1 = 5
  num2 = 3

  sum_result = num1 + num2
  print(sum_result)

  # 두 수의 합을 구하는 함수
  def get_sum(num1, num2):
    return num1 + num2

  # 함수 사용해 결과 출력
  num1 = 5
  num2 = 3

  sum_result = get_sum(num1, num2)
  print(sum_result)
  ```

## 2. 함수의 종류 

  1. 내장 함수(Built-in function) 

      * Python이 기본적으로 제공하는 함수 

      * 별도의 import 없이 바로 사용 가능 

      * 내장 함수의 예시

      ```python
      # 내장함수인 abs 함수 호출의 반환값을 result에 할당

      result = abs(-1)

      print(result) # 1
      ```

  2. 내장 함수 외

  * 함수 호출(function call)  

    * funciton_name(arguments)  

    * 함수를 실행하기 위해, 함수의 이름을 사용해 해당 함수의 코드 블록을 실행하는 것


## 3. 함수 구조

```python
def make_sum(pram1, pram2):
  """이것은 두 수를 받아
  두 수의 합을 반환하는 함수입니다.

  >>> make_sum(1, 2)
  3
  """
  return pram1 + pram2
```  

> ### **함수 구성의 4가지 요소**
>  1. Input *x* : 매개변수(pram1, pram2)
>  2. function body : 함수 내 연산식, 주석(Docstring) 등
>  3. Docstring : 함수 내 주석, 함수를 사용하는 가이드를 작성함, # 대신 """로 사용함
>  4. Output : 반환값(return value)  

## 4. 함수의 정의와 호출

  ```python
  # 함수 정의
  def greet(name):
    """입력된 이름 값에
    인사를 하는 메시지를 만드는 함수
    """
    mesage = 'Hello, ' + name
    return message

  # 함수 호출
  result = greet('Alice')
  print(result)      
  ```

  * 함수 정의(define)
    * 함수 정의는 def 키워드로 시작
    * def 키워드 이후 함수 이름 작성
    * 괄호 안에 매개변수 정의
    * 매개변수(parameter)는 함수에 전달되는 값을 나타냄

  * 함수 body
    * 콜론(:) 다음에 들여쓰기된 코드 블록
    * 함수가 실행될 때 수행되는 코드를 정의
    * Docstring은 함수 body 앞에 선택적으로 작성 가능한 함수 설명서

  * 함수 반환값
    * 함수는 필요한 경우 결과를 반환할 수 있음
    * return 키워드 이후에 반환할 값을 명시
    * return 문은 *함수의 실행을 종료*하고, 결과를 호출 부분으로 반환

  * 함수 호출
    * 함수를 호출하기 위해서는 함수의 이름과 필요한 인자(argument)를 전달해야 함
    * *호출 부분*에서 *전달된 인자*는 *함수 정의 시 작성한 매개변수*에 대입됨

  * 구분 유의
    | 매개변수 parameter | 인자 argument |
    | :---: | :---: |
    | 함수를 정의할 때, <br>함수가 받을 값을 나타내는 변수 | 함수를 호출할 때, <br>실제로 전달되는 것 |
    | |


## 5. 매개변수와 인자 예시와 종류

  ```python
  def add_numbers(x, y):  # x, y는 매개변수(parameter)
    result = x + y
    return result

  a = 2
  b = 3
  sum_result = add_numbers(a, b)  # a와 b는 인자(argument)
  print(sum_result)      
  ```

  1. **Positional Arguments (위치 인자)**
      * 함수 호출 시 인자의 위치에 따라 전달되는 인자
      * <span style='background-color: #ffdce0'>**위치인자는 함수 호출 시 반드시 값을 전달해야 함**</span>

  ```python
  def greet(name, age):
    print(f'안녕하세요, {name}님! {age}살이시군요.')

  greet('Alice', 25)  # 안녕하세요, Alice님! 25살이시군요.

  greet('Bella')  # TypeError: greet() missing 1 required positional arguments: 'age'

  greet(30) # TypeError: greet() missing 1 required positional arguments: 'age'

  greet(30, 'Bella')  # 안녕하세요, 30님! Bella살이시군요.

  greet(30, 'Bella', 'aaa') # TypeError: greet() takes 2 positional arguments but 3 were given
  ```

  2. **Default Arguments Values (기본 인자 값)**
      * 함수 정의에서 매개변수에 기본 값을 할당하는 것
      * 함수 호출 시 인자를 전달하지 않으면, 기본값이 매개변수에 할당됨

  ```python
  def greet(name, age = 30):
    print(f'안녕하세요, {name}님! {age}살이시군요.')

  greet('Bob')  # 안녕하세요, Bob님! 30살이시군요.
  greet('Charlie', 40)  # 안녕하세요, Charlie님! 40살이시군요.
  ```

  3. **Keywork Arguments (키워드 인자)**
      * 함수 호출 시 인자의 이름과 함께 값을 전달하는 인자
      * 매개변수와 인자를 일치시키지 않고, 특정 매개변수에 값을 할당할 수 있음
      * 인자의 순서는 중요하지 않으며, 인자의 이름을 명시하여 전달
      * <span style='background-color: #ffdce0'>**단, 호출 시 키워드 인자는 위치 인자 뒤에 위치해야 함**</span>

  ```python
  def greet(name, age):
    print(f'안녕하세요, {name}님! {age}살이시군요.')

  greet(age = 30, name = 'Bella') # 

  greet(age = 30, 'Bella')  # Positional argument follows keyword argument
  ```

  4. **Arbitrary Argument Lists (임의의 인자 목록)**
      * 정해지지 않은 개수의 인자를 처리하는 인자
      * 함수 정의 시 매개변수 앞에 '*'를 붙여 사용함
      * 여러 개의 인자를 <span style='background-color: #ffdce0'>tuple</span>로 처리함     

  ```python
  def calculate_sum(*args):
    print(args)
    total = sum(args)
    print(f'합계: {total}')

  """
  (1, 2, 3)
  합계: 6
  """
  calculate_sum(1, 2, 3)
  ``` 

  5. **Arbitrary Keyword Argument Lists (임의의 키워드 인자 목록)**
      * 정해지지 않은 개수의 키워드 인자를 처리하는 인자
      * 함수 정의 시 매개변수 앞에 '**'를 붙여 사용
      * 여러 개의 인자를 <span style='background-color: #ffdce0'>dict</span>로 묶어 처리

  ```python
  def print_info(**kwargs):
    print(kwargs)

  print_info(name = 'Eve', age = 30)  #{'name': 'Eve', 'age': 30}
  ```

  * 함수 인자 권장 작성순서 

    * 위치 → 기본 → 가변 → 가변 키워드
    * 호출 시 인자를 전달하는 과정에서 혼란을 줄일 수 있도록 함
    * 단, 모든 상황에 적용되는 절대적 규칙은 아니며, 상황에 따라 유연하게 조절될 수 있음
    
    ```python
    def func(pos1, pos2, default_arg = 'default', *args, **kwargs):
      ...
    ```

## 6. 함수와 Scope

  * Python의 범위(scope)  
    * 함수는 코드 내부에 local scope를 생성하며, 그 외의 공간인 global scope로 구분 

    * scope 
      * global scope : 코드 어디서든 참조할 수 있는 공간
      * local scope : 함수가 만든 scope (함수 내부에서만 참조 가능) 

    * variable
      * global variable : global scope에 정의된 변수
      * local variable : local scope에 정의된 변수

  * scope 예시

    ```python
    def func():
      num = 20
      print('local', num) # local 20

    func()

    print('global', num)  # NameError: name 'num' is not defined
    ```

    * num은 local scope에 존재하기 때문에 global에서 사용할 수 없음  

    * 변수 수명주기 (lifecycle)  

      * 변수의 수명주기는 변수가 선언되는 위치와 scope에 따라 결정됨  

      1. built-in scope : Python이 실행된 이후부터 영원히 유지  

      2. global scope : 모듈이 호출된 시점 이후 혹은 인터프리터가 끝날 때까지 유지  

      3. local scope : 함수가 호출될 때 생성되고, *함수가 종료될 때까지* 유지

    * 이름 검색 규칙 (Name Resolution)  

      * Python에서 사용되는 이름(식별자)들은 특정한 이름공간(namespace)에 저장되어 있음  

      * LEGB Rule : 아래와 같은 순서로 이름을 찾아 나감  

      >  1. Local scope : 지역 범위(현재 작업 중인 범위)  
      >  2. Enclosed scope : 지역 범위 한 단계 위 범위
      >  3. Global scope : 최상단에 위치한 범위
      >  4. Built-in scope : 모든 것을 담고 있는 범위  

      * LEGB Rule 예시  

        * sum이라는 이름을 global scope에서 사용하게 되면서, 기존에 built-in scope에 있던 내장함수 sum을 사용하지 못하게 됨  

        * sum을 참조 시 LEGB Rule에 따라 global에서 먼저 찾기 때문
      
      ```python
      print(sum)  # <built-in function sum>
      print(sum(range(3)))  # 3

      sum = 5

      print(sum)  # 5
      print(sum(range(3)))  # TypeError: 'int' object is not callable
      ```

      ```python
      a = 1
      b = 2

      def enclosed():
        a = 10
        c = 3

        def local(c):
          print(a, b, c)

        local(500)  # 10 2 500
        print(a, b, c)  

      enclosed()  # 10 2 3
      print(a, b) # 1 2
      ```

    * 'global' 키워드  

      * 변수의 scope를 전역 범위로 지정하기 위해 사용  

      * 일반적으로 함수 내에서 전역 변수를 수정하려는 경우에 사용(권장되는 사항은 아님)  

      * 주의사항  

        * global 선언 전에 print 선언 불가  

        * 매개변수에 global 사용 불가  

      * global 키워드는 *가급적* 사용하지 않고, 함수로 값을 바꾸고자 한다면 항상 *인자*로 넘기고 함수의 *반환값*을 사용하는 것을 권장

      ```python
      num = 0 # 전역 변수

      def increment():
        global num  # num를 전역 변수로 선언
        num += 1

      print(num)  # 0
      increment()
      print(num)  # 1
      ```

      ```python
      # global 키워드 선언 전에 접근 시
      num = 0

      def increment():
        # SyntaxError: name 'num' is used prior to global declaration
        print(num)
        global num
        num += 1
      ```

      ```python
      # 매개변수에 global 사용 불가
      num = 0

      def increment(num):
        # 'num' is assigned before global declaration
        global num
        num += 1
      ```

## 7. 재귀 함수  

  * 함수 내에서 자기 자신을 호출하는 함수  

  * 특정 알고리즘 식을 표현할 때 변수의 사용이 줄어들며, 코드의 가독성이 높아짐  

  * 1개 이상의 base case(종료되는 상황)가 필요하고, 수렴하도록 작성  

  * 재귀 함수 예시 - factorial  

  ```python
  def factorial(n):
    # 종료 조건: n이 0이면 1을 반환
    if n == 0:
      return 1
    # 재귀 호출: n과 n - 1의 factorial을 곱한 결과를 반환
    else:
      return n * factorial(n - 1)

  # factorial 계산 예시
  result = factorial(5)
  print(result) # 120
  ```

## 8. 유용한 내장 함수  

  1. map(function, iterable)  

    * function : 함수  

    * iterable : 반복 가능한 요소(ex. sequence(str, list, tuple 등))  

    * 순회 가능한 데이터 구조(iterable)의 모든 요소를 함수에 적용하고, 그 결과를 map object로 반환

    ```python
    numbers = [1, 2, 3]
    result = map(str, numbers)

    print(result) # <map object at 0x00000239C915D760>
    print(list(result)) # ['1', '2', '3']
    ```
    
    * map 함수의 반환값은 map 객체(map object)이기 때문에, 사용을 위해 이 객체를 바꿔줘야 함(list 등)

    ```python
    numbers = input().split() # 1 2 3 4 5

    print(numbers)  # ['1', '2', '3', '4', '5']

    result = map(int, numbers)

    print(result) # <map object at 0x000001EC92074FA0>

    print(list(result)) # [1, 2, 3, 4, 5]
    ```

  2. zip(*iterables)  

    * 임의의 iterable을 모아 tuple을 원소로 하는 zip object 반환  

    * 가변 인자를 받을 수 있는 함수(*iterables)

    ```python
    girls = ['jane', 'ashley']
    boys = ['peter', 'jay']
    pair = zip(girls, boys)
    
    print(pair) # <zip object at 0x000001C76DE58700>
    print(list(pair)) # [('jane', 'peter'), ('ashley', 'jay')]
    ```

## 9. lambda 함수  

  * lambda 함수  
  
    * 이름 없이 정의되고 사용되는 익명 함수

    ```python
    # lambda 함수 구조
    lambda parameter: expression
    ```
    * 1회성으로 함수를 사용할 때 자주 활용 → map 함수와 함께 자주 사용됨

  * lambda 함수 예시  

    * 간단한 연산이나 함수를 한 줄로 표현할 때 사용  

    * 함수를 매개변수로 전달하는 경우에도 유용하게 활용


    ```python
    numbers = [1, 2, 3, 4, 5]

    # 요소를 제곱하여 list를 return받고 싶은 경우
    def func(x):
      return x ** 2

    result = list(map(func, numbers))
    print(result) # [1, 4, 9, 16, 25]

    # 함수를 코드 전역에 define하지 않고 map 안에서만 사용하고 싶을 때
    result2 = list(map(lambda x: return x ** 2, numbers))
    print(result2)  # [1, 4 ,9, 16, 25]
    ```

## 10. Packing & Unpacking

  1. Packing  

      * 여러 개의 값을 하나의 변수에 묶어서 담는 것  

      * Packing 예시

      ```python
      # 변수에 담긴 값들은 tuple 형태로 묶임
      packed_values = 1, 2, 3, 4, 5
      print(packed_values)  # (1, 2, 3, 4, 5)

      # *을 활용한 packing
      # *b는 남은 요소들을 list로 packing하여 할당
      numbers = [1, 2, 3, 4, 5]
      a, *b, c = numbers

      print(a)  # 1
      print(b)  # [2 ,3 ,4]
      print(c)  # 5

      # print 함수에서 임의의 가변 인자를 작성할 수 있었던 이유 → 인자 개수에 상관없이 tuple 하나로 packing되어 내부에서 처리

      def my_func(*objects):
        print(objects)  # (1, 2, 3, 4, 5)
        print(type(objects))  # <class 'tuple'>

      my_func(1, 2, 3, 4, 5)
      # (1, 2, 3, 4, 5)
      # <class 'tuple'>

      print(*objects, sep = ' ', end='\n', file=sys.stdout, flush=False)
      ```

  2. Unpacking  

      * tuple이나 list 등의 객체의 요소들을 개별 변수에 할당  

      * Unpacking 예시

      ```python
      packed_values = 1, 2, 3, 4, 5
      a, b, c, d, e = packed_values

      print(a, b, c, d, e)  # 1 2 3 4 5

      # *는 list의 요소를 unpacking
      names = ['alice', ]

      # **는 dict의 key-value쌍 값을 함수의 키워드 인자로 unpacking
      def my_function(x, y, z):
        print(x, y, z)

      my_dict = {'x': 1, 'y': 2, 'z': 3}
      my_function(**my_dict)  # 1 2 3
      ```

  3. *, ** Packing / Unpacking 연산자 정리  

      * ‘*’  

        * Packing 연산자로 사용될 때, 여러 개의 인자를 하나의 tuple로 묶는 역할  

        * Unpacking 연산자로 사용될 때, sequence나 반복 가능한 객체를 각각의 요소로 Unpacking하여 함수의 인자로 전달  

      * ‘**’  

        * Unpacking 연산자로 사용될 때, dict의 key-value 쌍을 키워드 인자로 Unpacking하여 함수의 인자로 전달하는 역할