# Fundamentals of Python

<div style="text-align: right"> 24. 01. 15. ~ 24. 01. 16. </div>

## 1. 프로그래밍
  * 프로그래밍(Programming)  

  * 프로그램 작성 - 프로그램 실행  
  
  * 프로그램은 몇 가지 기초 연산으로 구성  
  
  * 컴퓨터는 더 다양한 연산 집합을 가짐  
  
    * 기존 연산을 활용해 더 많은 연산을 만들어냄
    * 사용한 연산 위에 차곡차곡 쌓여 새로운 연산을 만들어냄
    * *새 연산을 정의하고 조합해 유용한 작업을 수행하는 것* → *문제를 해결*하는 매우 강력한 방법
  * 프로그래밍 언어
    * 컴퓨터에게 작업을 지시하고 문제를 해결하는 도구  

## 2. 파이썬
  * 파이썬을 사용하는 이유  

    * 간결하고 읽기 쉬운 문법(사람이 사용하는 언어와 유사하게 구성)
    * 데이터 분석, 인공지능, 웹 개발, 자동화 등 다양한 응용 분야
    * 세계적 규모의 파이썬 커뮤니티(온라인 포럼 및 커뮤니티 생태계)

  * 파이썬 프로그램이 실행되는 법  

    * 컴퓨터는 기계어로 소통하기 때문에 사람이 기계어를 직접 작성하기 어려움  
    (→ *파이썬 프로그램* ↔ *운영 체제* 간 언어가 일치하지 않음)  
    * *인터프리터*가 사용자의 명령어를 운영체제가 이해하는 언어(기계어)로 바꿈  
    (→ *파이썬 프로그램* ↔ *파이썬 인터프리터* ↔ *운영 체제*)
      * 운영 체제가 바뀌더라도 인터프리터가 실행에 도움

## 3. 표현식과 값
  * 표현식(*수식, expression*)  
  
    * 값, 변수, 연산자 등을 조합해 계산되고 결과를 내는 코드 구조  
    * 계산에 의해 하나의 값이 되게 된다.
      * 자료형 : 값의 종류

  * 평가(*evaluate*)  

    * 표현식이 *평가*되어 값이 반환됨  
    * 표현식이나 문장을 실행하여 그 결과를 계산하고 값을 결정하는 과정  
    * 표현식이나 문장을 순차적으로 평가해 프로그램 동작 결정  

  * 문장(*statement*)

    * 조건문, 반복문, 함수 정의 등 “실행 가능한” 동작을 기술하는 코드
    * 문장은 보통 여러 개의 표현식을 포함함

## 4. 타입
  * 타입(*type*)

    * 값이 어떤 종류의 데이터(숫자, 문자 등)인지, 어떻게 해석/처리되어야 하는지를 정의  
      * 값 : 피연산자  
      * 연산자 : 값에 적용할 수 있는 연산
  * 데이터 타입
    | N | Type | Contents |
    | --- | --- | --- |
    | 1 | *Numeric Type* | int, float, complex |
    | 2 | *Sequence Type* | list, tuple, range |
    | 3 | *Text Sequence Type* | str |
    | 4 | *Set Type* | set |
    | 5 | *Mapping Type* | dict |
    | 6 | *기타* | None, Boolean, Function 등 |  
    | |

  * 산술 연산자 및 연산자 우선순위
    | 우선순위 | 연산자 | 연산자 설명 |
    | :---: | :---: | --- |
    | 높음 | ** | 지수, 거듭제곱 | 
    | | - | 음수 부호 |
    | | *, /, //, % | 곱셈, 나눗셈, 정수 나눗셈, 나머지 |
    | 낮음 | +, - | 덧셈, 뺄셈 |
    | |

## 5. 변수
  * 변수(*variable*)  

    * 값을 참조하는 이름
    * 할당문 예시
      ```python
      degree = 36.5
      ```  
  * 변수명 규칙  
    * 영문 알파벳, 언더스코어(_), 숫자로 구성
    * 숫자로 시작할 수는 없음
    * 대소문자 구분함
    * 변수명으로 쓰지 말아야 할 예약어(기본적으로 Python에 저장되어 사용되고 있는 값)
      >  *False, None, True, \__peg_parser__, and, as ,assert, async, await, break, class, continue, def, del, elif, else, except, finally, for, from, global, if, import, in, is, lambda, nonlocal, not, or, pass, raise, return, try, while, with, yield*

  * 변수, 값, 메모리
    * 거리에 집 주소가 있듯 메모리의 모든 위치에는 그 위치를 고유하게 식별하는 메모리 주소가 존재
    * 객체(object)
      * 타입을 갖는 *메모리 주소* 내 값
      * 변수는 값이 들어있는 상자가 아닌, 변수가 들어있는 주소를 뜻함
      * *바라본다*라고도 표현함
    * 변수는 그 변수가 참조하는 객체의 메모리 주소를 가짐

  * 할당문
    ```python
    variable = 'express'
    ```
    * 할당 연산자(=) 오른쪽에 있는 표현식을 평가해서 값(메모리 주소)을 생성
    * 값의 메모리 주소를 '=' 왼쪽에 있는 변수에 저장
    * 존재하지 않는 변수라면 *새 변수*를 생성
    * 기존에 존재했던 변수라면 *기존 변수를 재사용해서* 변수에 들어있는 메모리 주소를 변경

## 6. Style Guide
  * Style Guide
    * 프로그래밍 언어의 *맞춤법*
    * 코드의 일관성과 가독성을 향상시키기 위해 반드시 지켜야 하는 *규칙*과 가급적 지켜주면 좋을 *권장사항*의 모음
    * 공식 문서나, 프로그램을 사용하는 커뮤니티에서 제공
  * [Python Style Guide](https://peps.python.org/pep-0008)
    * 변수명은 무엇을 위한 변수인지 직관적인 이름을 가져야 함
    * 공백 4칸을 사용해 코드 블록을 들여쓰기
    * 한 줄의 길이는 79자로 제한하며, 길어질 경우 줄바꿈 사용
    * 문자와 밑줄(_) 사용해 함수, 변수, 속성의 이름을 작성
    * 함수 정의나 클래스 정의 등의 블록 사이에는 빈 줄을 추가

## 7. Python Tutor
  * [Python Tutor](https://pythontutor.com/)
    * Python 프로그램이 어떻게 실행되는지 도와주는 시각화 도우미

## 8. 주석
  * 주석(Comment)
    * 프로그램 코드 내에 작성되는 설명이나 메모
    * 인터프리터에 의해 실행되지 않음 – “인간을 위한 기능”
  * 주석의 목적
    * 코드의 특정 부분을 설명하거나, 임시로 코드를 비활성화할 때
    * 코드를 이해하거나 문서화하기 위해
    * 다른 개발자나 자신에게 코드의 의도나 동작을 설명하는 데 도움

## 9.	데이터 타입
  * 데이터 타입(Data Types)  
    * 값의 종류와 그 값에 적용 가능한 연산과 동작을 결정하는 속성  
  * 데이터 타입이 필요한 이유
    * 값들을 구분하고, 어떻게 다뤄야 하는지 알 수 있음
    * 각 데이터 타입 값들도 각자에게 적합한 도구를 가짐
      * ex. string에 -를 사용할 수 없음
    * 타입을 명시적으로 지정하면 코드를 읽는 사람이 변수의 의도를 더 쉽게 이해할 수 있고, 잘못된 데이터 타입으로 인한 오류를 미리 예방할 수 있음

  ### 1. Numeric Type - int, float
  1. **int** - 정수 자료형 : 정수를 표현하는 자료형  

      | 진수 | 표현 |
      | :---: | :---: | 
      | 2진수(binary) | 0b |
      | 8진수(octal) | 0o |
      | 16진수(hexadecimal) | 0x |
      | |

  2. **float** - 실수 자료형 : 실수를 표현하는 자료형
  * 프로그래밍 언어에서 float는 실수에 대한 근사값을 표현함
    * 컴퓨터는 0.1을 정확하게 표현할 수 없음
    * 유한 정밀도
      * 컴퓨터 메모리 용량이 한정돼 있고 한 숫자에 대해 저장하는 용량이 제한됨
      * 0.6666666666666666과 1. 6666666666666667은 제한된 양의 메모리에 저장할 수 있는 2/3과 5/3에 가장 가까운 값
  * 실수 연산 시 주의사항
    * 컴퓨터는 2진수, 사람은 10진법을 사용
    * 이때 10진수 0.1은 2진수로 표현하면 0.000110011001100110011… 같이 무한대로 반복
    * 무한대 숫자를 그대로 저장할 수 없어서 사람이 사용하는 10진법의 근사값만 표시
    * 0.1의 경우 3602879701896397 / (2 ** 55)이며, 0.1에 가깝지만 정확히 동일하지는 않음
    * 이런 과정에서 예상치 못한 결과가 나타남 – *Floating point rounding error*
  * 실수 연산 시 해결책
    * 두 수의 차이가 매우 작은 수보다 작은지를 확인
    * Math 모듈 활용

    ```python
    a = 3.2 - 3.1 # 0.10000000000000009
    b = 1.2 - 1.1 # 0.09999999999999987

    # 1. 임의의 작은 수 활용
    print(abs(a - b) <= 1e-10) # True

    # 2. math 모듈 활용
    import math
    print(math.isclose(a, b)) # True
    ```
  * 지수 표현 방식
    * E 또는 e를 사용한 지수 표현

    ```python
    # 314 * 0.01
    number = 314e-2

    # float
    print(type(number))

    # 3.14
    print(number)
    ```

  ### 2. Sequence Types - str, list, tuple, range
  * Sequence Types  
    * 여러 개의 값들을 순서대로 나열하여 저장하는 자료
    * 5가지 특징
      1. 순서(sequence)
          * 값들이 순서대로 저장
          * 순서가 있지만 *정렬(sort)되어 있지 않음*
      2. 인덱싱(indexing - 위치)
          * 각 값들이 위치에 대한 고유 인덱스(번호)를 갖고 있으며, 인덱스를 사용해 특정 위치의 값을 선택하거나 수정할 수 있음
      3. 슬라이싱(slicing)
          * 인덱스 범위를 조절해 부분적인 값을 추출할 수 있음
      4. 길이(length)
          * *len()* 함수를 이용해 저장된 값의 개수(길이)를 구할 수 있음
      4. 반복(iteration)
          * 반복문을 사용해 저장된 값들을 반복적으로 처리할 수 있음

  1. str
  * **str** : 문자들의 순서가 있는, 변경 불가능한 sequence 자료형
  * 문자열 표현
    * 문자열은 단일 문자, 혹은 여러 문자의 조합으로 이루어짐
    * 작은따옴표 또는 큰따옴표로 감싸 표현
    ```python
    # Hello, World!
    print('Hello, World!')

    # str
    print(type('Hello, World'))
    ```
    * 중첩 따옴표 : 따옴표 안에 따옴표를 표현할 경우
    ```python
    # 문자열 안에 '작은따옴표'를 사용하려면 큰따옴표로 묶는다.
    print("문자열 안에 '작은따옴표'를 사용하려면 큰따옴표로 묶는다.")

    # 문자열 안에 '큰따옴표'를 사용하려면 작은따옴표로 묶는다.
    print('문자열 안에 "큰따옴표"를 사용하려면 작은따옴표로 묶는다.')
    ```
  * Escape Sequence
    * 역슬래시 뒤에 특정 문자가 와서 특수한 기능을 하는 문자 조합
    * 파이썬의 일반적인 문법 규칙을 잠시 탈출한다는 의미

      | 예약 문자 | 내용(의미) |
      | :---: | :---: |
      | \n | 줄 바꿈 |
      | \t | 탭 |
      | \\\ | 백슬래시 |
      | \' | 작은따옴표 |
      | \" | 큰따옴표 |
      ||

    ```python
    # 철수야 '안녕'
    print('철수야 \'안녕\'')

    # 이 다음은 엔터
    # 입니다.
    print('이 다음은 엔터\n입니다.')
    ```
  
  * String Interpolation
    * 문자열 내에 변수나 표현식을 삽입하는 방법
    * f-string : f / F 접두어와 {표현식}을 통해 문자열에 Python 표현식의 값을 삽입할 수 있음
    ```python
    bugs = 'roaches'
    counts = 13
    area = 'living room'

    # Debugging roaches 13 living room
    print(f'Debugging {bugs} {counts} {area}')
    ```
  
  * 인덱스(index)
    * 문자열의 sequence 특징
    * sequence 내 값들에 대한 고유 번호로, 각 값의 위치를 식별하는 데 사용
    * 0부터 시작하고, 슬라이싱 시 끝 지점 번호는 들어가지 않음
    * Python은 음수 인덱스를 제공함

  * 슬라이싱(slicing)
    * sequence의 일부분을 선택해 추출하는 것
    * 시작/끝 인덱스를 지정해, 해당 범위의 값으르 포함하는 새로운 sequence 생성

  * 문자열은 불변(변경 불가)

    ```python
    my_str = 'hello'

    # 인덱싱
    print(my_str[1])  # e
    print(my_str[-1]) # o

    # 슬라이싱
    print(my_str[2:4])  # ll
    print(my_str[3:]) # lo
    print(my_str[:3]) # hel
    print(my_str[0:5:2])  # hlo
    print(my_str[::-1]) # olleh

    # 길이
    print(len(my_str))  # 5

    # TypeError: 'str' object does not support item assignment
    my_str[1] = 'z'
    ```

  2. list
  * **list** : 여러 개의 값을 순서대로 저장하는, 변경 가능한 sequence 자료형
  * list 표현
    * 0개 이상의 객체를 포함해 데이터 목록 저장
    * [대괄호] 표기
    * 데이터는 어떤 자료형도 저장 가능
    * 타 언어에서 배열(array)과 같은 개념

    ```python
    my_list_1 = []
    my_list_2 = [1, 'a', 3, 'b', 5]
    my_list_3 = [1, 2, 3, 'Python', ['hello', 'world', '!!!']]
    ```

  * list의 sequence 특징
    * 인덱싱, 슬라이싱, 길이
    * list는 가변(변경 가능)

    ```python
    my_list = [1, 'a', 3, 'b', 5]

    # 인덱싱
    print(my_list[1]) # a
    
    # 슬라이싱
    print(my_list[2:4]) # [3, 'b', 5]
    print(my_list[:3])  # [1, 'a', 3]
    print(my_list[3:])  # ['b', 5]
    print(my_list[0:5:2]) # [1, 3, 5]
    print(my_list[::-1])  # [5, 'b', 3, 'a', 1]

    # 길이
    print(len(my_list)) # 5

    # 가변성
    my_list[0] = 100

    print(my_list)  # [100, 'a', 3, 'b', 5]
    ```

  3. tuple
* 여러 개의 값을 순서대로 저장하는, 변경 불가능한 sequence 자료형
* tuple 표현
  * 0개 이상의 객체 포함하면 데이터 목록 저장 - list와 같음
  * (소괄호) 표기
  * 데이터는 어떤 자료형도 저장 가능 - list와 같음
* tuple의 sequence 특징
  * 인덱싱, 슬라이싱, 길이
  ```python
  my_tuple_1 = ()
  my_tuple_2 = (1, )  # tuple의 요소 수가 1 하나뿐일 경우 ,가 빠지면 int data가 된다.
  my_tuple_3 = (1, 'a', 3, 'b', 5)
  
  # 인덱싱
  print(my_tuple_3[1])  # 'a'

  # 슬라이싱
  # 슬라이싱한 결과도 tuple
  print(my_tuple_3[2:4])  # (3, 'b')
  print(my_tuple_3[:3]) # (1, 'a', 3)
  print(my_tuple_3[3:]) # ('b', 5)
  print(my_tuple_3[0:5:2])  # (1, 3, 5)
  print(my_tuple_3[::-1]) # (5, 'b', 3, 'a', 1)

  # 길이
  print(len(my_tuple))  # 5
  ```

* tuple은 어디에 사용되나?
  * tuple의 불변 특성을 활용 - 안전하게 여러 개의 값을 전달, 그룹화, 다중 할당 등
  * 개발자가 직접 사용하기보다 'Python 내부 동작'에서 주로 사용됨

  ```python
  x, y = (10, 20)
  
  print(x)  # 10
  print(y)  # 20

  # Python은 쉼표를 tuple 생성자로 사용하니, 괄호는 생략이 가능하다
  x, y = 10, 20
  ```

3. range
* 연속된 정수 sequence를 생성하는, 변경 불가능한 자료형
* 주로 반복문과 함께 사용
* range 표현
```python
my_range_1 = range(5)
my_range_2 = range(1, 10)

print(my_range_1) # range(0, 5)
print(my_range_2) # range(1, 10)

# list로 변환 시 데이터 확인 가능
print(list(my_range_1)) # [0, 1, 2, 3, 4]
print(list(my_range_2)) # [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

  ### 3. Non-Sequence Types - dict, set
  * dict  
    * *key-value 쌍*으로 이루어진, 순서와 중복이 없는, 변경 가능한 자료형
    * dict 표현
      * key는 변경 불가능한 자료형만 사용 가능(str, int, float, tuple, range, ...)
      * value는 모든 자료형 사용 가능
      * {중괄호} 표기

    * dict 사용
      * key를 통해 value에 접근 및 값 재할당 가능
      * dict는 순서가 없음 → my_dict_3의 'list'는 '두번째 요소'가 아니기 때문에 인덱스로 접근이 불가
      * 중복 불가 → 마지막으로 입력한 입력값으로 갱신

```python
my_dict_1 = {}
my_dict_2 = {'key' : 'value'}
my_dict_3 = {'apple' : 12, 'list' : [1, 2, 3]}

print(my_dict_1)  # {}
print(my_dict_2)  # {'key' : 'value'}
print(my_dict_3)  # {'apple' : 12, 'list' : [1, 2, 3]}

print(my_dict_3['apple']) # 12
print(my_dict_3['list'])  # [1, 2, 3]

# 값 변경
my_dict_3['apple'] = 100
print(my_dict_3)  # {'apple' : 100, 'list' : [1, 2, 3]}
```

  * set
    * 순서와 중복이 없는, 변경 가능한 자료형
      * key-value 쌍이 아님, 나머지는 dict와 동일
    * set 표현
      * 수학에서 집합과 동일한 연산 처리 가능 → 집합 연산에 활용
      * {중괄호} 표기 - key-value 쌍이 아니라서 dict와 구분 가능
      * 빈 set를 만들 때에는 set()를 활용해야 함
      * 순서가 없다 → 'n번째 요소'라는 표현을 사용하지 않고, 인덱싱이 되지 않음

```python
my_set_1 = set()  # my_set = {}로 표현하면 set가 아닌 dict가 생성됨
my_set_2 = {1, 2, 3}
my_set_3 = {1, 1, 1}

print(my_set_1) # set()
print(my_set_2) # {1, 2, 3}
print(my_set_3) # {1}

# set의 집합 연산
set_1 = {1, 2, 3}
set_2 = {3, 6, 9}

# 합집합
print(set_1 | set_2)  # {1, 2, 3, 6, 9}

# 차집합
print(set_1 - set_2)  # {1, 2}

# 교집합
print(set_1 & set_2)  # {3}
```


  ### 4. Other Types
  * None  
    * Python에서 *값이 없음*을 나타내는 자료형  

  * Boolean
    * 참(True) / 거짓(False)을 표현하는 자료형
    * 비교 / 논리 연산의 평가 결과로 사용
    * 주로 조건 / 반복문과 함께 사용

```python
# None
variable = None

print(variable) # None

# Boolean
bool_1 = True
bool_2 = False

print(bool_1) # True
print(bool_2) # False
print(3 > 1)  # True
print('3' != 3) # True
```

### 5. Collection
* 여러 개의 항목 또는 요소를 담는 자료 구조를 통칭
* Sequence / Non-Sequence의 공통점

  | Collection | 변경 가능 여부 | 순서 여부 |
  | :---: | :---: | :---: |
  | str | X | O |
  | list | O | O |
  | tuple | X | O |
  | set | O | X |
  | dict | O | X |
  | |

### 6. Type Conversion - Implicit / Explicit  
* Implicit Type Conversion 암시적 형변환  

  * Python이 연산을 하며 자동으로 형변환하는 것  
  * 가급적 나타나지 않도록 하는 것이 바람직함  

* Explicit Type Conversion 명시적 형변환  
  * 개발자가 직접 형변환하는 것
  * 암시적 형변환이 아닌 경우를 모두 포함

```python
# Implicit Type Conversion

  # int + float → float
  print(3 + 5.0)  # 8.0

  # Boolean + int → int
  print(True + 3) # 4

  # Boolean + Boolean → int
  print(True + False) # 1

# Explicit Type Conversion

  # str → integer : 형식에 맞는 숫자만 가능
  # integer → str : 모두 가능

  print(int('1')) # 1
  print(str(1) + '등')  # 1등
  print(float('3.5')) # 3.5
  print(int(3.5)) #3

  # ValueError: invalid literal for int() with base 10: '3.5'
  print(int('3.5'))
  # string인 3.5가 int 형식에 맞지 않기 때문에 스스로 int로 변형되지 않는다.
```




<<< 공사중 >>>

