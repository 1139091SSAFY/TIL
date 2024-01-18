# Modules

<div style="text-align: right"> 24. 01. 18. </div>

## 1. 모듈  

  * 모듈(functions) 

    * 한 파일로 묶인 변수와 함수의 모음

    * 특정한 기능을 하는 코드가 작성된 *Python 파일(.py)*
    
  * 모듈을 사용하는 이유

    * 과학자, 수학자가 모든 이론을 새로 만들거나 증명하지 않는 것처럼, 개발자 또한 프로그램 전체를 모두 혼자 힘으로 작성하는 것은 드문 일

    * 이미 다른 프로그래머가 이미 작성해 놓은 수천, 수백만 줄의 코드를 사용하는 것은 생산성에서 매우 중요한 일

  * 모듈 예시 및 활용

    * 모듈 내 변수와 함수에 접근하려면 import 문이 필요

    * 내장 함수 help를 사용해 모듈에 무엇이 들어있는지 확인 가능

    * .(dot notation 혹은 dot operator)은 *점의 왼쪽 객체에서 점의 오른쪽 이름을 찾아라* 라는 의미의 연산자

    ```python
    import math

    help(math)

    print(math.pi)  # 3.141592653589793

    print(math.sqrt(4)) # 2.0
    ```

    * from 절을 활용해 특정 모듈을 미리 참조하고 어떤 요소를 import할 지 명시하는 방법으로도 사용 가능

    ```python
    from math import pi, sqrt

    print(pi)

    print(sqrt(4))

    # 만약 서로 다른 모듈이 같은 이름의 함수를 제공할 경우 문제가 발생함 → 모듈 내 모든 요소를 한번에 import하는 * 표기는 권장하지 않는다

    from my_math import sqrt
    ```

  * 사용자 정의 모듈

## 2. Python 표준 라이브러리

  * [Python Standard Library, PSL](https://docs.python.org/ko/3/library/index.html)

  * Python 언어와 함께 제공되는 다양한 모듈과 패키지의 모음

  * 별도 설치 불필요, 이미 Python에 내장

  * 패키지(Package)

    * 관련된 모듈들을 하나의 디렉토리(폴더)에 모아놓은 것

    * Package 사용 목적

      * 모듈들의 이름공간은 구분하여 충돌을 방지
      * 모듈들을 효율적으로 관리하고 재사용할 수 있도록 돕는 역할

    * PSL 내부 패키지 : 설치 없이 바로 import 사용
    * 외부 패키지 : pip를 사용해 설치 후 import 필요

    * pip

      * 외부 패키지들을 설치하도록 도와주는 Python의 Package 관리 시스템

      ```python
      # 최신 버전 / 특정 버전/ 최소 버전을 명시하여 설치 가능
      pip install Somepackage
      pip install Somepackage==1.0.5
      pip install Somepackage>=1.0.4
      ```

    * requests

      ```python
      pip install requests

      import requests

      url = 'https://random-data-api.com/api/v2/users'
      response = requests.get(url).json()

      print(response)
    ```


  * 라이브러리(Library)

    * 모듈 → 패키지 → 라이브러리로 이어지는, 모듈 및 패키지 모음의 가장 큰 단위


## 3. 제어문

  * 제어문 (Control of Statement)

    * 코드의 실행 흐름을 제어하는 데 사용되는 구문

    * *조건에 따라* 코드 블록을 실행하거나 *반복적으로* 코드를 실행

  * 조건문 (Conditional Statement)

    * 주어진 조건식을 평가해, 해당 조건이 참(True)인 경우에만 코드 블록을 실행하거나 건너뜀

    * if / elif / else

    ```python
    # if statement의 기본 구조

    if expression:
      code block
    elif expression:
      code block
    else:
      code block
    ```

    ```python
    # 조건문 예시

    a = 5
    
    if a > 3:
      print('3 초과')
    else:
      print('3 이하')
    
    print(a)  # 3 초과
    ```

    ```python
    # 복수 조건문 예시
    # 조건식을 동시에 검사하는 것이 아니라 순차적으로 비교

    dust = 35

    if dust > 150:
        print('매우 나쁨')
    elif dust > 80:
        print('나쁨')
    elif dust > 30:
        print('보통')
    else:
        print('좋음')
    ```

    ```python
    # 중첩 조건문 예시

    dust = 480

    if dust > 150:
        print('매우 나쁨')

        # 중첩 조건문
        if dust > 300:
            print('위험해요! 나가지 마세요!')
    elif dust > 80:
        print('나쁨')
    elif dust > 30:
        print('보통')
    else:
        print('좋음')
    ```

  * 반복문 (Loop Statement)

    * 주어진 코드 블록을 여러 번 반복해서 실행하는 구문

      > 1. 특정 작업을 반복적으로 수행
      >     - 제한된 작업량 존재

      > 2. 주어진 조건이 참인 동안 반복해서 실행
      >     - 작업량이 제한되어 있지 않음

  * 반복문 - 'for' statement

    * 임의의 sequence의 항목들을 그 iterable에 들어있는 순서대로 반복

    * iterable

      * 반복문에서 순회할 수 있는 객체

      * sequence(str, list, tuple, range, ...) + dict, set

    * 반복되는 작업량이 정해져 있음

    ```python
    # 반복문 예시
    for variable in iterable:
        code block
    ```
    ```python
    # list 활용
    items = ['apple', 'banana', 'coconut']

    for item in items:
        print(item)

    """
    apple
    banana
    coconut
    """
    ```

    ```python
    # string 활용
    country = 'Korea'

    for char in country:
        print(char)

    """ K o r e a """

    country = 'Korea'

    for char in country: print(char)

    """ K o r e a """
    ```

    ```python
    # range 활용
    for i in range(5):
        print(i)

    """
    0
    1
    2
    3
    4
    """
    ```

    ```python
    # dict 반복 - 기본적으로 key를 읽음
    my_dict = {
      'x': 10,
      'y': 20,
      'z': 30
    }

    for key in my_dict:
      print(key, my_dict[key])

    """
    x 10
    y 20
    z 30
    """
    ```

    ```python
    # list의 요소가 아닌 인덱스로 접근하여 해당 요소들을 변경하기

    numbers = [4, 6, 10, -8, 5]

    for i in range(len(numbers)):
        numbers[i] = numbers[i] * 2

    print(numbers) # [8, 12, 20, -16, 10]
    ```

    ```python
    # 중첩 반복문
    outers = ['A', 'B']
    inners = ['c', 'd']

    for outer in outers:
        for inner in inners:
            print(outer, inner)

    """
    A c
    A d
    B c
    B d
    """
    ```

    ```python
    # 안쪽 list 요소에 접근하려면 바깥 list를 순회하면서 중첩 반복을 사용해 각 안쪽 반복을 순회
    elements = [['A', 'B'], ['c', 'd']]

    for elem in elements:
        print(elem)

    """
    ['A', 'B']
    ['c', 'd']
    """
    elements = [['A', 'B'], ['c', 'd']]

    for elem in elements:
        for item in elem:
            print(item)

    """
    A
    B
    c
    d
    """
    ```

  * 반복문 - 'while' statement

    * 주어진 조건식이 참(True)인 동안 코드를 반복해서 실행<br>== 조건식이 거짓(False)가 될 때 까지 반복

    * while 문은 반드시 *종료 조건*이 필요하다

    ```python
    while conditional:
        code block
    ```

    ```python
    a = 0

    while a < 3:
        print(a)
        a += 1

    print('끝')

    """
    0
    1
    2
    """
    ```

    ```python
    # while문을 사용한 특정 입력 값에 대한 종료 조건 활용하기

    number = int(input('양의 정수를 입력해주세요.: '))

    while number <= 0:
        if number < 0:
            print('음수를 입력했습니다.')
        else:
            print('0은 양의 정수가 아닙니다.')

        number = int(input('양의 정수를 입력해주세요.: '))

    print('잘했습니다!')
    """
    양의 정수를 입력해주세요.: 0
    0은 양의 정수가 아닙니다.  
    양의 정수를 입력해주세요.: -1
    음수를 입력했습니다.       
    양의 정수를 입력해주세요.: 1
    잘했습니다!
    """
    ```

    | for | while |
    | :---: | :---: |
    | iterable의 요소를<br>하나씩 순회하며 반복 | 주어진 조건이 참인 동안 반복<br>**False가 될 때까지 반복** |
    | 반복 횟수가 명확하게 정해져 있는 경우에 유용 | 반복 횟수가 불명확하거나 조건에 따라 반복을 종료해야 할 때 유용 |
    | list, tuple, str 등과 같은 sequence 형식의 데이터를 처리할 때 | 사용자의 입력을 받아서 특정 조건이 충족될 때까지 반복하는 경우 |

  * 반복 제어 *(break, continue)*

    * for문과 while문은 매 반복마다 본문 내 모든 코드를 실행하지만, 때때로 일부만 실행하는 것이 필요할 때가 있음

      | break | continue |
      | :---: | :---: |
      | 반복을 즉시 중지 | 다음 반복으로 건너뜀 |
      | |

    ```python
    # break 예시

    # 1 - 프로그램 종료 조건 만들기

    number = int(input('양의 정수를 입력해주세요.: '))

    while number <= 0:
        """
        종료 조건과 break
        """
        if number == -9999: 
            print('프로그램을 종료합니다.')
            break

        if number < 0:
            print('음수를 입력했습니다.')
        else:
            print('0은 양의 정수가 아닙니다.')

        number = int(input('양의 정수를 입력해주세요.: '))

    print('잘했습니다!')

    """
    양의 정수를 입력해주세요.: -9999
    프로그램을 종료합니다.
    잘했습니다!
    """
    ```

    ```python
    # list에서 홀수만 출력하기

    numbers = [1, 3, 5, 6, 7, 9, 10, 11]
    found_even = False  # 짝수를 못 찾았을 때를 위한 변수

    for num in numbers:
        if num % 2 == 0:
            print('첫 번째 짝수를 찾았습니다:', num)
            found_even = True
            break

    if not found_even:
        print('짝수를 찾지 못했습니다')

    """
    첫 번째 짝수를 찾았습니다: 6
    """
    ```

    ```python
    # continue 예시
    # list에서 홀수만 출력하기
    # 현재 반복문의 남은 코드를 건너뛰고 다음 반복으로 넘어감

    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for num in numbers:
        if num % 2 == 0:
            continue
        print(num)
        
    """
    1
    3
    5
    7
    9
    """
    ```

    * break와 continue 주의사항
      
      * break와 continue를 남용하는 것은 코드의 가독성을 저하시킬 수 있음

      * 특정한 종료 조건을 만들어 break을 대신하거나, if 문을 사용해 continue 처럼 코드를 건너 뛸 수도 있음

      * 약간의 시간이 들더라도 가능한 코드의 가독성을 유지하고 코드의 의도를 명확하게 작성하도록 노력하는 것이 중요

    ```python
    # 수정 전

    for number in range(1, 5):
        if number == 3:
            continue
        print(number)
    """
    1
    2
    4
    """
    # 수정 후

    for number in range(1, 5):
        if number != 3:
            print(number)
    """
    1
    2
    4
    """
    ```

  * List Comprehension

    * 간결하고 효율적인 list 생성 방법

    ```python
    # list comprehension 구조

    [expression for variable in iterable]

    list(expression for variable in iterable)

    # 조건이 붙는 list comprehension

    [expression for variable in iterable if conditional]

    list(expression for variable in iterable if conditional)
    ```

    ```python
    numbers = [1, 2, 3, 4, 5]

    # 사용 전

    squared_numbers = []

    for num in numbers:
        squared_numbers.append(num ** 2)

    print(squared_numbers)  # [1, 4, 9, 16, 25]


    # 사용 후

    squared_numbers = [num ** 2 for num in numbers]

    print(squared_numbers)  # [1, 4, 9, 16, 25]
    ```

    ```python
    # Comprehension 사용

    result = [i for i in range(10) if i % 2 == 1]

    # Comprehension 미사용

    result = []
    for i in range(10):
        if i % 2 == 1:
            result.append(i)
    ```


## 4. 참고

  * pass

    * 아무런 동작도 수행하지 않고 넘어가는 역할

    * 문법적으로 문장이 필요하지만 프로그램 실행에는 영향을 주지 않아야 할 때 사용

    ```python
    # pass 예시 (1/3)
    # 코드 작성 중 미완성 부분
    # 구현해야 할 부분이 나중에 추가될 수 있고, 코드를 컴파일하는 동안 오류가 발생하지 않음

    def my_function():
        pass  

    # pass 예시 (2/3)
    # 조건문에서 아무런 동작을 수행하지 않아야 할 때

    if condition:
        pass # 아무런 동작도 수행하지 않음
    else:
        # 다른 동작 수행
    
    # pass 예시 (3/3)
    # 무한 루프에서 조건이 충족되지 않을 때 pass를 사용하여 loop를 계속 진행하는 방법

    while True:
        if condition:
            break
        elif condition:
            pass  # 루프 계속 진행
        else:
            print('..')
    ```

  * enumerate(iterable, start = 0)

    * iterable 객체의 각 요소에 대해 인덱스와 함께 반환하는 내장함수

    ```python
    # enumerate 예시
    fruits = ['apple', 'banana', 'cherry']

    for index, fruit in enumerate(fruits):
    print(f'인덱스 {index}: {fruit}')

    """
    인덱스 0: apple
    인덱스 1: banana
    인덱스 2: cherry
    """
    ```