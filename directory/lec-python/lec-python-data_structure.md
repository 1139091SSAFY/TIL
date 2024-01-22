# Data Structures

<div style="text-align: right"> 24. 01. 22. </div>

## 1. 데이터 구조  

  * 데이터 구조(Data Structure) 

    * 여러 데이터를 효과적으로 사용, 관리하기 위한 구조

    * str, list, dict 등
    
  * 자료 구조
  
    * 각 데이터의 효율적인 저장, 관리를 위한 구조를 나눠 놓은 것

    ```python
    '자료구조' = {
      '단순 구조': {
        '정수', '실수', '문자', '문자열'
      },
      '선형 구조': {
        '순차 리스트',
        '연결 리스트': {
          '단순 연결 리스트', '이중 연결 리스트', '원형 연결 리스트'
        },
        '스택',
        '큐',
        '덱'
      },
      '비선형 구조': {
        '트리': {
          '일반 트리', '이진 트리'
        }, 
        '그래프': {
          '방향 그래프', '무방향 그래프'
        }
      },
      '파일 구조': {
        '순차 파일', '색인 파일', '직접 파일'
      }
    }
    ```


## 2. 메서드

  * 메서드(method)

    * 객체에 속한 함수로, 객체의 상태를 조작하거나 동작을 수행

  * 특징

    * method는 class 내부에 정의되는(class 어딘가에 속해 있는) 함수

    * 각 data type별로 다양한 기능을 가진 method가 존재

    * 예를 들어 help 함수를 통해 str을 호출해보면 class 였다는 것을 확인 가능

      ```python
      print(help(str))

      """
      Help on class str in module builtins:

      class str(object)
      |  str(object='') -> str
      |  str(bytes_or_buffer[, encoding[, errors]]) -> str
      |
      |  Create a new string object from the given object. If encoding or
      |  errors is specified, then the object must expose a data buffer
      |  …
      """
      ```

  * method 호출 방법 및 예시

  ```python
  data_type.method()

  # string method
  'hello'.capitalize()  # Hello

  # list method
  numbers = [1, 2, 3]
  numbers.append(4)

  print(numbers)  # [1, 2, 3, 4]
  ```


## 3. 시퀀스 데이터 구조(Sequence Data Structure)

  * string 조회/탐색 및 검증 method  

    | method | 설명 |
    | :------------------: | :-----------------------------------------------------------------------------------: |
    | s.find(x) | x의 첫 번째 위치를 반환. 없으면, -1을 반환 	|
    | s.index(x) | x의 첫 번째 위치를 반환. 없으면, 오류 발생 |
    | s.isalpha() | 알파벳 문자 여부<br>* 단순 알파벳이 아닌 유니코드 상 Letter (한국어도 포함) 	|
    | s.isupper() | 대문자 여부 |
    | s.islower() | 소문자 여부 |
    | s.istitle() | 타이틀 형식 여부 |
    | |  

    ```python
    # .index(x)
    # x의 첫 번째 위치를 반환. 없으면, 오류 발생 반환
    print('banana'.index('a'))  # 1
    print('banana'.index('z'))  # ValueError: substring not found

    # .find(x)
    # x의 첫 번째 위치를 반환. 없으면, -1을 반환
    print('banana'.find('a')) # 1
    print('banana'.find('z')) # -1

    # .isupper(x) / .islower(x)
    string1 = 'HELLO'
    string2 = 'Hello'
    print(string1.isupper()) # True
    print(string2.isupper()) # False
    print(string1.islower()) # False
    print(string2.islower()) # False

    # .isalpha(x)
    # 문자열이 알파벳으로만 이루어져 있는지 확인
    string1 = 'Hello'
    string2 = '123'
    print(string1.isalpha()) # True
    print(string2.isalpha()) # False
    ```

  * string 조작 method  

    | method | 설명 |
    |:---------------------------------------: | :--------------------------------------------------------------------------------------------:	|
    | s.replace(old, new[,count]) | 바꿀 대상 글자를 새로운 글자로 바꿔서 반환 |
    | s.strip([chars]) | 공백이나 특정 문자를 제거 |
    | s.split(sep = None, maxsplit = -1) | 공백이나 특정 문자를 기준으로 분리 	|
    | 'separator'.join(iterable) | 구분자로 iterable을 합침 	|
    | s.capitalize() | 가장 첫 번째 글자를 대문자로 변경 	|
    | s.title() | 문자열 내 띄어쓰기 기준으로 각 단어의 첫 글자는 대문자로, 나머지는 소문자로 변환 |
    | s.upper() | 모두 대문자로 변경 	|
    | s.lower() | 모두 소문자로 변경 |
    | s.swapcase() | 대↔소문자 서로 변경	|
    | |  

    ```python
    # .replace(old, new[, count]) : 바꿀 대상 글자를 새로운 글자로 바꿔 반환
    text = 'Hello, world'
    new_text = text.replace('world', 'Python')
    print(new_text) # Hello, Python!

    # .strip([chars]) : str의 시작과 끝에 있는 공백 혹으느 지정한 문자 제거
    text = '   Hello, world!   '
    new_text = text.strip()
    print(new_text) # Hello, world!

    # .split(sep = None, maxsplit = -1) : 지정한 문자를 구분자로 문자열을 분리하여 str의 list로 반환
    test = 'Hello, world!'
    words = text.split(',')
    print(words)  # ['Hello', ' world!']

    # 'separator'.join(iterable) : iterable 요소들의 원래의 str을 구분자로 이용해 하나의 문자열로 연결
    words = ['Hello', 'world!']
    text = '-'.join(words)
    print(text) # Hello-world!
    ```

    * string 조작 - 기타 method  

      ```python
      text = 'heLLo, woRld!'
      new_text1 = text.capitalize()
      new_text2 = text.title()
      new_text3 = text.upper()
      new_text4 = text.swapcase()

      print(new_text1)  # Hello, world!
      print(new_text2)  # Hello, World!
      print(new_text3)  # HELLO, WORLD!
      print(new_text4)  # HEllO, WOrLD!

      # method 이어서 사용하기
      new_text = text.swapcase().reloace('l', 'z')
      print(new_text) # HEzzO, WOrLD!
      ```  

  * list 값 추가 및 삭제 method  

    | method | 설명 |
    | :-----------------------: | :-------------------------------------------------------------------------------------------------------:	|
    | L.append(x) | 리스트 마지막에 항목 x를 추가 |
    | L.extend(m) | Iterable m의 모든 항목들을 리스트 끝에 추가 (+=과 같은 기능) |
    | L.insert(i, x) | 리스트 인덱스 i에 항목 x를 삽입 	|
    | L.remove(x) | 리스트 가장 왼쪽에 있는 항목(첫 번째) x를 제거 항목이 존재하지 않을 경우,   ValueError |
    | L.pop() | 리스트 가장 오른쪽에 있는 항목(마지막)을 반환 후 제거 |
    | L.pop(i) | 리스트의 인덱스 i에 있는 항목을 반환 후 제거 |
    | L.clear() | 리스트의 모든 항목 삭제	|
    | |

    ```python
    # .append(x) : list 마지막에 항목 x를 추가
    my_list = [1, 2, 3]
    my_list.append(4)
    print(my_list)  # [1, 2, 3, 4]

    # .extend(iterable) : list에 다른 반복 가능한 객체의 모든 항목을 추가
    my_list = [1, 2, 3]
    my_list.extend([4, 5, 6])
    print(my_list)  # [1, 2, 3, 4, 5, 6]

    # .insert(i, x) : list의 지정한 인덱스 i 위치에 항목 x를 삽입
    my_list [1, 2, 3]
    my_list.insert(1, 5)
    print(my_list)  # [1, 5, 2, 3]

    # .remove(x) : list에서 첫 번째로 일치하는 항목을 삭제
    my_list = [1, 2, 3]
    my_list.remove(2)
    print(my_list)  # [1, 3]

    # .pop(i)
    # list에서 지정한 인덱스의 항목을 제거하고 반환
    # i를 작성하지 않을 경우 마지막 항목을 제거
    my_list = [1, 2, 3, 4, 5]

    item1 = my_list.pop() # my_list에서 5 제거, 제거된 5가 item1 변수에 반환
    item2 = my_list.pop(0)  # my_list에서 1 제거, 제거된 1이 item2 변수에 반환

    print(item1)  # 5
    print(item2)  # 1
    print(my_list)  # [2, 3, 4]

    # .clear() : list의 모든 항목 삭제
    my_list = [1, 2, 3]
    my_list.clear()
    print(my_list)  # []
    ```  

  * list 탐색 및 정렬 method  

    |               문법              	|                                   설명                                 	|
    |:-------------------------------:	|:----------------------------------------------------------------------:	|
    |     L.index(x,   start, end)    	|     리스트에   있는 항목 중 가장 왼쪽에 있는 항목 x의 인덱스를 반환    	|
    |            L.reverse()          	|     리스트의 순서를 역순으로 변경 (정렬 X)|
    |             L.sort()            	|     리스트를 정렬 (매개변수   이용가능)                                	|
    |            L.count(x)           	|     리스트에서 항목   x의 개수를 반환                                  	|

    ```python
    # .index(x) : list에서 첫 번째로 일치하는 항목의 인덱스 반환
    my_list = [1, 2, 3]
    index = my_list.index(2)
    print(index)  # 1

    # .count(x) : list에서 항목 x가 등장하는 횟수를 반환
    my_list [1, 2, 2, 3, 3, 3]
    count = my_list.count(3)
    print(count)  # 3

    # .sort() : 원본 리스트를 오름차순으로 정렬
    my_list = [3, 1, 2]
    my_list.sort()
    print(my_list)  # [1, 2, 3]

    # .reverse() : list의 순서를 역순으로 변경(정렬 X)
    my_list = [1, 3, 2, 8, 1, 9]
    my_list.reverse()
    print(my_list)  # [9, 1, 8, 2, 3, 1]
    ```

## 4. 복사

  * 데이터 타입과 복사  

    * Python에서는 데이터의 분류에 따라 복사가 달라짐

    * *변경 가능한 데이터 타입*과 *변경 불가능한 데이터 타입*을 다르게 다룸

  * 변경 가능한 데이터 타입의 복사

    ```python
    a = [1, 2, 3, 4]
    b = a
    b[0] = 100

    print(a)  # [100, 2, 3, 4]
    print(b)  # [100, 2, 3, 4]
    ```

    ![local image](../../image/lec-python-data_structure-1.png)

  * 변경 불가능한 데이터 타입의 복사

    ```python
    a = 20
    b = a
    b = 10

    print(a)  # 20
    print(b)  # 10
    ```

    ![local image](../../image/lec-python-data_structure-2.png)

  * 복사 유형

    1. 할당(assignment)

      ```python
      original_list = [1, 2, 3]
      copy_list = original_list
      print(original_list, copy_list) # [1, 2, 3] [1, 2, 3]

      copy_list[0] = 'hi'
      print(original_list, copy_list) # ['hi', 2, 3] ['hi', 2, 3]
      ```

      ![local image](../../image/lec-python-data_structure-3.png)

      * 할당 연산자(=)를 통한 복사는 해당 객체에 대한 **객체 참조를 복사**

    2. 얕은 복사(shallow copy)

      ```python
      a = [1, 2, 3]
      b = a[:]
      print(a, b) # [1, 2, 3] [1, 2, 3]

      b[0] = 100
      print(a, b) # [1, 2, 3] [100, 2, 3]
      ```

      ![local image](../../image/lec-python-data_structure-4.png)

      * 슬라이싱을 통해 생성된 객체는 원본 객체와 독립적으로 존재

      * 얕은 복사의 한계

        ```python
        # 2차원 list와 같이 변경 가능한 객체 안에 변경 가능한 객체가 있을 경우
        a = [1, 2, [1, 2]]
        b = a[:]
        print(a, b) # [1, 2, [1, 2]] [1, 2, [1, 2]]

        b[2][0] = 100
        print(a, b) # [1, 2, [100, 2]] [1, 2, [100, 2]]
        ```

        ![local image](../../image/lec-python-data_structure-5.png)

        * a와 b의 주소는 다르지만 내부 객체의 주소는 같기 때문에 함께 변경됨
    
    3. 깊은 복사(deep copy)

      ```python
      import copy # Python 표준 라이브러리 내 내장 모듈

      original_list = [1, 2, [1, 2]]
      deep_copied_list = copy.deepcopy(original_list)

      deep_copied_list[2][0] = 100

      print(original_list)  # [1, 2, [1, 2]]
      print(deep_copied_list) # [1, 2, [100, 2]]
      ```

      ![local image](../../image/lec-python-data_structure-6.png)

      * 내부에 중첩된 모든 객체까지 새로운 객체 주소를 참조하도록 함


## 000. 참고 자료

  * 문자열에 포함된 문자들의 유형을 판별하는 method

    * isdecimal()

      * 문자열이 모두 숫자 문자(0 ~ 9)로만 이루어져 있어야 True

    * isdigit()

      * isdecimal()과 비슷하지만, 유니코드 숫자도 인식('①'도 숫자로 인식)

    * isnumeric()

      * isdigit()과 비슷하지만, 몇 가지 추가적인 유니코드 문자들을 인식

      * 분수, 지수, 루트 기호도 숫자로 인식

  * [배커스-나우르 표기법(Backus-Naur form, BNF)](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)

    * 당신이 어떤 프로그래밍 언어(문법)을 쓰던 간에 이 표기법을 활용해 설명하자(표기법).

    * 기계가 읽을 수 있는(machine-readable) 형식의 문법을 명확히 정의 또는 표준화하기 위해 사용된다.