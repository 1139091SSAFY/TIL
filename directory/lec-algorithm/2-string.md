# Algorithm

<div style="text-align: right"> 24. 02. 05. ~ 24. 02. 06. </div>

## 1. 문자열 (String)

### 1. 문자열

* 컴퓨터에서의 문자 표현 - ASCII Code

    * 예시 : 영어가 대소문자 합쳐 52개이므로 6(64가지)비트면 모두 표현할 수 있다. 이를 코드 체계라고 한다.

    * ASCII (American Standard Code for Information Interchange, 1967) : 문자 인코딩 표준

    * 7bit 인코딩으로 128문자 표현 - 33개의 출력 불가능한 제어 문자, 95개의 출력 가능한 문자

    * 확장 ASCII : 표준 문자 이외 악센트 문자, 도형 문자, 특수 문자 및 기호 등 부가적인 문자를 128개 추가할 수 있게 하는 부호

    * 표준 ASCII가 7bit를 사용해 문자를 표현하는 것에 더해 확장 ASCII는 1Byte 내 8bit를 모두 사용해 추가적으로 문자 표현

    * 컴퓨터 생산자와 SW 개발자가 여러 가지 다양한 문자에 할당할 수 있도록 하고 있음 → 이렇게 할당된 확장 부호(확장 ASCII)는 표준 ASCII와는 달리 서로 다른 프로그램이나 컴퓨터 사이에 교환되지 못함, 프로그램이나 컴퓨터 또는 프린터가 그것을 해독할 수 있도록 설계되어 있어야만 올바로 해독 가능

* Unicode

    * 미국뿐 아니라 각 나라에서도 자국 문자를 표현하기 위해 코드 체계를 만들어 사용
    
    * 인터넷이 전 세계로 발전하며 ASCII를 만들었을 때의 문제와 같은 문제가 국가간에 정보를 주고받을 때 발생

    * 자국의 코드 체계를 타 국가가 가지고 있지 않으면 정보를 잘못 해석할 우려
    
        * 다국어 처리를 위한 표준 마련

    * 대분류 - UCS-2(Universal Character Set-2), UCS-4(Universal Character Set-4)

    * 유니코드를 저장하는 변수 크기를 정의
    
    * 그러나 바이트 순서에 대해서는 표준화하지 못함 → 파일 인식 시 이 파일이 UCS-2인지, UCS-4인지 인식하고 구분해서 모두 다르게 구현해야 하는 문제

    * 유니코드의 적당한 외부 인코딩이 필요하게 됨

    * 유니코드 인코딩 - UTF (Unicode Transformation Format)

    * UTF-8 (in web)

        * MIN : 8bit, MAX : 32bit (1 Byte * 4)

    * UTF-16 (in windows, java)

        * MIN : 16bit, MAX : 32bit (2 Byte * 2)

    * UTF-32 (in unix)

        * MIN : 32bit, MAX : 32bit (4 Byte * 1)

* Python 인코딩

    * 2.x 버전 : ASCII → #-\*-coding: utf-8 -\*- (첫 줄에 명시)

    * 3.x 버전 : 유니코드 UTF-8 → 생략 가능

* 문자열의 분류

    * fixed length

    * variable length - length controlled / delimited

* Java에서 string class에 대한 메모리 배치 예

    * java.lang.String class에는 기본적인 객체 메타 데이터 외에도 4가지 field들이 포함

    * hash 값(hash), 문자열 길이(count), 문자열 데이터 시작점(offset), 실제 문자열 배열에 대한 참조(value)

* C에서 문자열 처리

    * 문자열은 문자들의 배열 형태로 구현된 응용 자료형

    * 문자배열에 문자열 저장 시 항상 마지막에 끝을 표시하는 null 문자(\0)를 넣어줘야 함.

    * 문자열 처리에 필요한 연산을 함수 형태로 제공

* Java (객체지향 언어) 에서의 문자열 처리

    * 문자열 데이터를 저장, 처리해주는 class를 제공

    * String class 사용

    * 문자열 처리에 필요한 연산을 연산자, method 형태로 제공

    ```java
    String str = "abc"

    String str = new String("abc")
    ```

    * +, length(), replace(), split(), substring(), ...

* Python 에서의 문자열 처리

    * char type 없음

    * text data의 취급 방법이 통일되어 있음

    * 문자열 기호

    * 홑따옴표, 쌍따옴표, 홑따옴표 3개, 쌍따옴표 3개

    * + 연결(Concatenation)
    
        * 문자열 + 문자열 : 이어 붙여주는 역할

    * \* 반복

        * 문자열 * 수 : 수만큼 문자열이 반복

    * 문자열은 Sequence 자료형으로 분류되고, Sequence 자료형에서 사용할 수 있는 인덱싱, 슬라이싱 연산들을 사용할 수 있음

    * 문자열 class에서 제공되는 method

    * replace(), split(), isalpha(), find()

    * 문자열은 tuple과 같이 요소값을 변경할 수 없음 (immutable)

* C와 Java의 String 처리의 기본적인 차이점

    * C는 ASCII Code로 저장 // Java는 Unicode(UTF16, 2byte)로 저장

    ```C
    char *name = "홍길동";
    int count = strlen(name);
    printf("%d", count);
    # 6
    ```

    ```Java
    String name = "홍길동";
    System.out.println(name.length());
    # 3
    ```

    ```Python
    name = "홍길동"
    print(len(name))
    # 3
    ```

* 문자열 뒤집기

    * 자기 문자열에서 뒤집는 방법이 있고, 새로운 빈 문자열을 만들어 소스의 뒤에서부터 읽어서 타겟에 쓰는 방법이 있음

    ```python
    s = 'Reverse this strings'  # sgnirts siht esreveR
    s = s[::-1]

    s = 'abcd'
    s = list(s)
    s.reverse()
    s = ''.join(s)
    ```

* C - strcmp(), Java - equals(), Python - == 연산자, is 연산자

    ```python
    s1 = 'abc'
    s2 = s1
    s3 = s1[:2] + 'c'

    print(s1)
    print(s2)
    print(s3)
    print()
    print(s1 == s3) # True : 값 비교
    print(s1 is s2) # True : 메모리 공간상 위치 비교
    print(s1 is s3) # False : 메모리 공간상 위치 비교
    ```

    ```C
    # 문자열이 같으면 0 리턴
    # str1이 str2보다 사전 순서상 앞이면 음수 혹은 -1 리턴
    # str1이 str2보다 사전 순서상 나중이면 양수 혹은 1 리턴
    int my_strcmp(const char *str1, const char *str2){
        int i = 0;
        while(str1[i] != '\0'){
            if(str1[i] != str2[i]) break;
            i++;
        }
        return (str1[i] - str2[i]);
    }
    ```

* 문자열 숫자를 정수로 변환하기

    * C언어에서는 atoi() 함수를 제공, 역함수로 itoa()

    * Java에서는 숫자 class의 parse method 제공, 역함수로 toString()

    * Python 에서는 숫자와 문자변환 함수를 제공

    * int()와 같은 atoi() 함수 만들기

    ```python
    def atoi(s):
        i = 0
        for x in s:
            i = i * 10 + ord(x) - ord('0')
        return i
    ```

### 2. 패턴 매칭

* 패턴 매칭에 사용되는 알고리즘

    * 고지식한 패턴 검색 알고리즘

    * 카프-라빈 알고리즘

    * KMP 알고리즘

    * 보이어-무어 알고리즘

* 고지식한 알고리즘 (Brute Force)

    * 본문 문자열을 처음부터 끝까지 차례대로 순회하며 패턴 내 문자들을 일일이 비교하는 방식으로 동작

    * 시간 복잡도 : $O(n^2)$

    ```python
    p = 'is'  # 찾을 패턴
    t = 'This is a book~!'  # 전체 텍스트
    M = len(p)  # 찾을 패턴 길이
    N = len(t)  # 전체 텍스트 길이

    def BruteForce(p, t):
        i = 0 # idx_t
        j = 0 # idx_p

        while j < M and i < N:
            if t[i] != p[j]:
                i = i - j
                j = -1
            i += 1
            j += 1
        if j == M:
            return i - M  # 검색 성공
        else:
            return -1 # 검색 실패
    ```

    * 고지식한 패턴 검색 알고리즘의 시간 복잡도

        * 최악의 경우 시간 복잡도는 텍스트의 모든 위치에서 패턴을 비교해야 하므로 $O(MN)$이 됨

        * 길이가 10000인 문자열에서 길이 80의 패턴을 찾는다고 할 때, 최악의 경우 약 10000 * 80 = 80만 번의 비교가 일어날 것

        * 비교횟수를 줄일 수 있는 방법?

* KMP 알고리즘

    * 불일치가 발생한 text string 앞 부분에 어떤 문자가 있는지를 미리 알고 있으므로, 불일치가 발생한 앞 부분에 대해 다시 비교하지 않고 매칭을 수행

    * 패턴을 전처리하여 배열 next[M]을 구해서 잘못된 시작을 최소화함

    * 시간 복잡도 $\theta(M + N)$

* 보이어-무어 알고리즘

    * (패턴의) 오른쪽에서 왼쪽으로 비교

    * 대부분의 상용 소프트웨어에서 채택하고 있는 알고리즘

    * 패턴에 오른쪽 끝에 있는 문자가 불일치하고 이 문자가 패턴 내에 존재하지 않는 경우, 이동 거리는 패턴의 길이만큼 된다.

    * 시간 복잡도 $O(MN)$

    * Brute-Force, KMP 알고리즘의 공통점으로는, text string의 문자를 적어도 한 번씩은 훑는다는 것이다. 따라서 최선의 경우에도 $\Omega(n)$

    * 보이어-무어 알고리즘은 text 문자를 다 보지 않아도 된다.

      * 발상의 전환 : 패턴의 오른쪽부터 비교

      * 최악의 경우 수행시간 (일반적으로 이보다는 시간이 덜 든다) : $\theta(n)$

### 3. 문자열 암호화

* 시저 암호 (Caesar Cipher)

    * 평문에서 사용되고 있는 알파벳을 일정한 문자 수만큼 평행이동

* 문자 변환표를 이용한 암호화 (단일 치환 암호)

    * 단순한 카이사르 암호화보다 훨씬 강력한 암호화 기법

* bit열의 암호화

    * 배타적 논리합 (exclusive-or) 연산 사용

* Run-length encoding 알고리즘

    * 저장소의 크기를 줄이며 정확한 정보를 저장하는 알고리즘

    * 대표적으로 이미지 파일 포맷 중 BMP 포맷의 압축 방법, 흑백 이미지의 경우 이득을 볼 확률이 높을 것이다.