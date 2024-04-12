# Java - OOP

## 1. 객체 지향 프로그래밍

### 1. 객체 지향 프로그래밍 (OOP, Object Oriented Programming)

* 객체 : 사물과 같이 유형적인 것과 개념이나 논리와 같은 무형적인 것들

    * **실제 Java에서 지칭하는 객체**

        * 데이터 (속성)
  
        * 그 데이터와 관련된 알고리즘 (logic) → 데이터의 행위, 기능
  
        * 위 두 가지가 하나로 묶여있는 것

* 지향 : 작정하거나 지정한 방향으로 나아감

* 객체 모델링 : 현실 세계의 객체를 SW 객체로 설계하는 것

    1. 객체 단위로 나누어서 (조직화)

    2. 객체 간 상호작용으로 SW를 설계 / 구현

* **클래스 (class)** : 객체를 만드는 설계도 (blueprint)

* **인스턴스 (instance)** : 클래스를 통해 생성된 (→ 메모리에 올라간) 객체

### 2. 객체 지향 프로그래밍의 특징 (A PIE)

* Abstraction (추상화)
 
    * 객체 지향 프로그래밍 설계 시, 현실의 객체를 기반으로 SW 객체를 만든다.

    * 이 때, 무수히 많은 현실 객체의 속성으로부터 필요한 부분만 추려내는 것을 추상화라고 한다.

    * 사람 하나에 대해
         
        * 병원 - 주민번호, 이름, 혈압, ...
       
        * 학사정보시스템 - 학번, 이름, 전공, ...

* Polymorphism (다형성)

    * 하나의 객체를 다양한 형으로 참조할 수 있다. (그 관점에서 바라볼 수 있다.)
     
    * 하나의 사람(객체)에 대해
     
        * 병원 - 환자

        * 학교 - 학생

* Inheritance (상속)

    * 기존 class를 재활용할 수 있음 → 새로운 클래스를 생성

    * 하나의 사람(객체)에 대해

        * '사람' 속성을 확장하여 '학생'이라는 속성을 덧붙여 만들 수 있다.

* Encapsulation (캡슐화)

    * 데이터와 logic이 한 단위로 묶여 움직임
     
    * 외부에서 객체를 바라볼 때, 객체가 가진 속성과 행위를 공개할 수 있는 것 / 굳이 공개하지 않는 것을 구분할 수 있음

* 객체 지향 프로그래밍의 장점

    * 모듈화된 프로그래밍

        * 모듈화 : 객체 단위로 구성되어 있기 때문에, 불필요하거나 수정해야 하는 부분만 골라 손볼 수 있다.

        * 협업이 쉽고, 대형 프로젝트를 개발할 수 있다.

    * 재사용성이 높다.

        * 설계도가 미리 만들어져 있다. → 그 설계도를 가져다 활용하거나, 필요한 부분을 고쳐 간편히 활용할 수 있다.

    * 디버깅이 용이하다. → 모듈화되어 있기 때문에 해당 부분만 교체하면 된다.

    * 정보 보호 측면에서도 유리하다. → 접근을 제한할 수 있다.

## 2. Class

### 1. Class

* 사람의 정보를 관리하자.

    * Class 생성

        ```Java
        // 배열을 이용한 관리
        String[] names = new String[2];
        names[0] = "Yang";
        names[1] = "Hong";

        int[] ages = new int[2];
        age[0] = 45;
        age[1] = 25;

        String[] hobbies = new String[2];
        hobbies[0] = "유튜브";
        hobbies[1] = "골프";
        ```

        ```Java
        // Class를 이용한 관리
        // name, age, hobby 와 같은, 서로 다른 타입의 데이터를 묶어 하나의 단위로 관리해 보자!

        // 클래스 만들 때는 : 우클릭 > new > class
        // public class 클래스명 {}
        // 클래스명 : 일반적으로 PascalCase로 지정
        // 클래스 : 객체를 생성하기 위한 설계도

        // class 정의
        public class Person {
            // 묶어서 관리할 데이터 → 멤버 변수(field)
            String name;
            int age;
            String hobby;
        }

        // 객체 생성 → 다른 파일
        public class PersonTest {
            public static void main(String[] args) {
                // 방금 만든 설계도로 객체를 생성!
                // 클래스(Person)는 변수(생성될 객체)의 타입으로 사용
                // → 클래스는 사용자 정의 자료형이다!!

                // 객체 생성
                // 클래스명(→ 일종의 사용자 정의 자료형(type)으로 활용) 변수명 = new 클래스명();
                Person yang = new Person();

                // yang : instance!!
                // 객체의 멤버 변수에 접근할 때는 .연산자 사용

                yang.name = "Yang";
                yang.age = 45;
                yang.hobby = "Youtube";

                Person hong = new Person();

                hong.name = "Hong";
                hong.age = 25;
                hong.hobby = "골프";
            }
        }
        ```

    * 함수 : 특정한 작업(→ 기능)을 수행하는 문장들을 한 단위로 묶은 것

        * Java 에서는 method라는 용어를 사용 → class 안에 정의된 함수를 method라고 함.

        ```Java
        // 함수의 정의
        
        // 반환형 함수명 (매개변수1, 매개변수2, ...) {
        //     문장 1; 문장 2;
        //     return 반환값;
        // }
        // 결과값이 없다면 반환형은 void;

        // public : 다른 class에서 접근이 가능하다!!
        // static : 객체 생성 없이 사용 가능하다!!
        // 나중에 정리

        public static void main(String[] args) {
            System.out.println("아침에 일어난다.");
            System.out.println("교육장으로 대중교통을 이용해 이동한다.");
            System.out.println("오전 수업을 듣는다.");
            System.out.println("점심을 먹는다.");
            System.out.println("오후 수업을 듣는다.");
            System.out.println("집으로 대중교통을 이용해 이동한다.");
            System.out.println("과제를 해결한다.");
            System.out.println("잔다.");

            System.out.println("아침에 일어난다.");
            System.out.println("교육장으로 대중교통을 이용해 이동한다.");
            System.out.println("오전 수업을 듣는다.");
            System.out.println("점심을 먹는다.");
            System.out.println("오후 수업을 듣는다.");
            System.out.println("집으로 대중교통을 이용해 이동한다.");
            System.out.println("과제를 해결한다.");
            System.out.println("잔다.");
        }

        // 1.

        // 교육() 이라는 함수(method)를 만들어 활용

        // static method는 static method만 호출 가능

        static void 교육() {
            System.out.println("오전 수업을 듣는다.");
            System.out.println("점심을 먹는다.");
            System.out.println("오후 수업을 듣는다.");
        }

        public static void main(String[] args) {
            System.out.println("아침에 일어난다.");
            System.out.println("교육장으로 대중교통을 이용해 이동한다.");
            교육();
            System.out.println("집으로 대중교통을 이용해 이동한다.");
            System.out.println("과제를 해결한다.");
            System.out.println("잔다.");

            System.out.println("아침에 일어난다.");
            System.out.println("교육장으로 대중교통을 이용해 이동한다.");
            교육();
            System.out.println("집으로 대중교통을 이용해 이동한다.");
            System.out.println("과제를 해결한다.");
            System.out.println("잔다.");
        }

        // 2.

        // 이동() 이라는 함수(method)를 만들어 활용
        // 매개변수를 사용해볼 것
        
        static void 이동(String 장소, String 탈것) {
            System.out.println(장소 + "(으)로 " + 탈것 + "을(를) 이용하여 이동한다.");
        }

        public static void main(String[] args) {
            System.out.println("아침에 일어난다.");
            이동("교육장", "대중교통");
            교육();   // 매개변수가 없으면 없는 대로 호출
            이동("집", "대중교통");   // 함수를 호출할 때는 매개변수를 넣어 호출
            System.out.println("과제를 해결한다.");
            System.out.println("잔다.");

            System.out.println("아침에 일어난다.");
            이동("교육장", "대중교통");
            교육();
            이동("집", "대중교통");
            System.out.println("과제를 해결한다.");
            System.out.println("잔다.");
        }

        // 3. 반환값이 있는 함수를 작성

        static boolean 교육() {
            System.out.println("오전 수업을 듣는다.");
            System.out.println("점심을 먹는다.");
            System.out.println("오후 수업을 듣는다.");

            // 과제를 다 못했다면 → 숙제가 있고 (true)
            // 오후 시간에 과제를 다 했다면 → 숙제가 없다. (false)

            Random random = new Random();
            return random.nextBoolean();  // 랜덤하게 t / f를 반환
        }

        public static void main(String[] args) {
            System.out.println("아침에 일어난다.");
            이동("교육장", "대중교통");
            boolean homework = 교육();
            이동("집", "대중교통");
            if (homework) 
                System.out.println("숙제를 해결한다.");
            else
                System.out.println("숙제가 없습니다.");
            System.out.println("잔다.");

            System.out.println("아침에 일어난다.");
            이동("교육장", "대중교통");
            boolean homework = 교육();
            이동("집", "대중교통");
            if (homework) 
                System.out.println("과제를 해결한다.");
            else
                System.out.println("쉰다.");
            System.out.println("잔다.");
        }
        ```

    * 클래스 특징

        ```Java
        public class Person {
            // 멤버 변수 : 객체가 가지고 있는 변수 (데이터)
            String name;
            int age;
            String hobby;

            // method : class 안에 정의된 함수
            // membor method : 객체가 가지고 있는 method
            void info() {
                // member 변수에 바로 접근할 수 있다!!
                System.out.println("이름은 " + name + "이고, 나이는 " + age + "세, 취미는 " + hobby + "입니다.");
            }
        }

        public class PersonTest {
            public static void main(String[] args) {
                Person p = new Person();
                p.age = 45;
                p.name = "Yang";
                p.hobby = "Youtube";

                p.info();
                // 이름은 Yang이고, 나이는 45세, 취미는 Youtube입니다.

                // 데이터 하나의 모든 속성들이 p라는 객체 단위로 묶여 있다!!
            }
        }
        ```

* 클래스 정리

    * 관련 있는 변수와 **함수 (method)**를 묶어 만든 사용자 정의 자료형

    * 모든 객체들의 생산처
     
    * 클래스 == 객체를 생성하는 틀 (설계도)
    
    * 프로그래밍이 쓰이는 목적을 생각하여 어떤 객체를 만들어야 하는지 결정한다. (추상화)

    * 각 객체들이 어떤 특징(속성과 동작)을 가지고 있을지 결정한다.

    * 클래스를 통해 생성된 객체를 **인스턴스**라고 한다.

    * 객체들 사이에서 메시지를 주고 받도록 만들어 준다.

    * 클래스 구성

        | 구성 | 속성 |
        | :---: | :---: |
        | 속성 (Attribute) | 필드 (멤버 변수) |
        | 동작 (Behavior) | 메소드 (멤버 메소드) |
        | 생성자 (Constructor) | |
        | 중첩 클래스<br>(클래스 내부의 클래스) | |
        | |

* 접근제한자

    * public : 다른 package에서 접근 가능

    * default : 같은 패키지에서만 접근 가능 (생략하면 default)

* 활용제한자

    * final : 상속 x

    * abstract : 추상 클래스를 선언 시 사용

    ```Java
    [접근제한자] [활용제한자] class 클래스명 {
        속성 정의 (field)
        기능 정의 (method)
        생성자
    }
    ```

### 2. 변수

* 클래스 변수 (class variable) : 설계도에 들어있는 변수

    * 클래스 영역 선언 (→ method 영역) (static 키워드)
     
    * 생성 시기 : 클래스가 메모리에 올라갔을 때

    * **모든 instance가 공유함**

* 인스턴스 변수 (instance variable)

    * 힙 영역 선언

    * 생성 시기 : instance가 생성될 때마다 (new)

    * instance별로 생성됨

* 지역 변수 (local variable)

    * 클래스 영역 이외 (method, constructor, ... 등)

    * 생성 시기 : 선언되었을 때

### 3. 메서드

* 메서드 (Method)

    * 객체가 할 수 있는 행동을 정의

    * 어떤 작업을 수행하는 명령문의 집합에 이름을 붙여놓은 것

    * method의 이름은 소문자(camelCase)로 시작하는 것이 관례

        ```Java
        [접근제한자] [활용제한자] 반환형 method이름 ([매개변수들]) {
            행위 기술...
            return 반환값
        }

        public static void main(String[] args) {...}
        ```

    * 접근 제한자 - public / protected / default / private

    * 활용 제한자 - static / final / abstract / synchronized

* 메서드 선언 : 선언 시 {} 안에 메서드가 해야 할 일을 정의

* 메서드 호출
 
    * *객체를 생성한 후* 객체의 멤버 메서드를 호출한다.

    * 클래스 객체.메서드 이름으로 호출

        * 객체 생성 후, 객체를 통해서만 접근 가능!!

        ```Java
        Person p = new Person();
        p.info();
        ```

    * static이 메서드에 선언되어 있을 때는 *클래스 이름*.메서드 이름으로 호출

        * static : 객체 생성 필요없이!! 호출 가능

        ```Java
        public class Person {
            public void info() {
                // 메서드 내용 정의
                System.out.println("...");
            }

            public static void hello() {
                // 메서드 내용 정의
                System.out.println("Hello static!");
            }
        }

        public static void main(String[] args) {
            Person.hello();   // Hello static!
        }
        ```

* 매개변수 (Parameter) : method에서 사용하는 것

* 인자 (Argument) : 호출하는 쪽에서 전달하는 것

    ```Java
    // Parameter time
    public void study(int time) {
        // int time = ?
        // parameter는 해당 위치에 선언한 지역변수
        System.out.println(time + "시간 공부");
    }

    Person p = new Person();
    p.study(10);  // 10시간 공부
    ```

    * 매개변수 생략 가능
     
    * 매개변수 전달 시 묵시적 형변환이 일어남

        ```Java
        // 만약 전달할 인자가 묵시적 형변환이 가능할 경우, 묵시적 형변환이 가능한 method가 호출된다.
        p.study((byte) 10);   // O
        p.study((short) 10);  // O
        p.study(10);          // O

        // X → void study(long time) 으로, 별도로 함수를 만들어줘야 함
        // method overloading : 똑같은 이름의 method를 여러 개 선언할 수 있다.
        p.study(10L);         // 100L → long형

        p.study(10.0f);       // X
        p.study(10.0);        // X
        p.study(10, 10);      // X
        ```

    * method overloading

        * 이름이 같고 **매개변수가 다른** 메소드를 여러 개 정의하는 것

        * 중복 코드에 대한 효율적 관리 가능

        * parameter의 **개수 또는 순서, 타입**이 달라야 할 것

        * 리턴 타입이 다른 것은 의미 없음

            ```Java
            // method 명은 일치
            // parameter 개수, 순서, 타입이 다르면 똑같은 이름으로 method를 여러 개 만들 수 있다.

            // int
            // long
            // String, int

            void study(long time) {
                System.out.println(time + "시간 만큼 공부합니다. (long)");
            }

            void study (String subject, int time) {
                System.out.println(subject + "를 " + time + "시간 공부합니다. (1)");
            }

            void study (int time, String subject) {
                System.out.println(subject + "를 " + time + "시간 공부합니다. (2)")
            }

            void study (int time1, int time2) {
                System.out.println(time1 + ", " + time2);
            }

            //  parameter 이름만 다른 것은? X
            //  void study (int time2, String subject2) {
            //     ...
            //  }

            //  return type이 다른 것은? X
            //  int study (int time1, int time2) {
            //      System.out.println(time1 + ", " + time2);
            //      return 0;
            //  }

            p.study(100L);  // 100시간 만큼 공부합니다.
            p.study(1, 1);  // 1, 1
            p.study("1", 1);  // 1를 1시간 공부합니다. (1)
            p.study(1, "1");  // 1를 1시간 공부합니다. (2)
            ```
         
            ```Java
            // method overloading
            // 위의 함수에서 받은 parameter가 묵시적 형변환으로 받을 수 있다면 위의 함수를 실행
            // 그렇지 않다면 아래의 함수로 실행하게 됨

            void study(int time) {
                System.out.println(time + "시간 (int)");
            }

            void study(long time) {
                System.out.println(time + "시간 (long)");
            }
            ```

* return 타입은 method를 선언 시 지정, 없다면 void (return문 생략 가능)

    * return 타입을 작성했다면 반드시 해당 타입의 값을 리턴

    * 리턴 타입은 하나만 적용 가능

### 4. 생성자

* new 키워드와 함께 호출하여 객체 생성

* *클래스명과 동일*하며, 결과형 *리턴값을 갖지 않음*

* *객체가 생성될 때 반드시 하나의 생성자 호출*

    * *멤버 필드의 초기화에 주로 사용*

* 하나의 클래스 내부에 생성자가 하나도 없으면 자동적으로 **default 생성자**가 있는 것으로 인지

    * default 생성자 : 매개변수도 없고 내용도 없는 생성자

* 매개변수의 개수가 다르거나, 자료형이 다른 여러 개의 생성자가 있을 수 있음 (*생성자 오버로딩*)

* 생성자의 첫번째 라인으로 **this() 생성자**를 사용해 또 다른 생성자를 하나 호출 가능

    ```Java
    public class Dog {
        // 클래스명과 이름이 동일 (대 / 소문자까지)
        // 반환 타입이 없다. (void 작성 X)
        public Dog() {
            System.out.println("기본 생성자!");
            System.out.println("클래스 이름과 동일하고 반환타입 X");
        }
    }
    ```

* 기본 (default) 생성자

    * 클래스 내에 생성자가 하나도 정의되어 있지 않은 경우 JVM이 자동으로 제공하는 생성자

    * 형태 : 매개변수가 없는 형태, class명() {}

    * 특징

        * 만약 우리가 생성자를 하나라도 만들면, default 생성자는 만들어지지 않음

        ```Java
        class Dog {
            // 생성자가 하나도 없는 상태임
            // JVM이 자동으로 제공함
            // Dog() {}; ← 가 생략되어 있다고 보면 된다.
        }

        class Main {
            public static void main(String[] args) {
                // 객체 생성
                Dog d = new Dog();
            }
        }
        ```

* Parameter가 있는 생성자

    * 생성자의 목적이 필드 초기화

    * 생성자 호출 시 값을 넘겨주어야 함

    * **해당 생성자를 작성하면 JVM에서 기본 생성자를 추가하지 않음**

        ```Java
        class Dog {
            String name;
            int age;

            Dog (String n, int a) {
                name = n;
                age = a;
            }
        }

        class Main {
            public static void main(String[] args) {
                Dog d1 = new Dog();
                d1.name = "쫑";
                d1.age = 3;

                Dog d2 = new Dog("메리", 4);
            }
        }
        ```

* 생성자 오버로딩

    ```Java
    // 생성자 오버로딩
    // 매개변수의 타입, 개수, 순서 달라지면 → 오버로딩 가능
    // 매개변수의 이름만 다른 것은 소용없음
    Person (String n, int a, String h) {
        name = n;
        age = a;
        hobby = h;
    }

    Person (String n, int a) {
        name = n;
        age = a;
        hobby = "따로 취미가 없어요..";
    }

    public class PersonTest {
        public static void main(String[] args) {
            Person p = new Person("Hong", 25, "Golf");
            p.info(); // 이름은 Hong이고, 나이는 25세 취미는 Golf입니다.

            Person p2 = new Person("Kim", 40);
            p2.info();  // 이름은 Kim이고, 나이는 40세 취미는 따로 취미가 없어요..입니다.
        }
    }
    ```

* this

    * 참조 변수로써 객체 자신을 가리킴

    * this를 이용해 자신의 멤버 접근 가능

    * 지역변수(매개변수)와 필드의 이름이 동일할 경우 필드임을 식별할 수 있게 함

    * 객체에 대한 참조이므로, static 영역에서는 this 사용 불가

* this의 활용

    * this.멤버변수

    * this ([인자값..]) : 생성자 호출

    * this 생성자 호출 시 제한사항

        * 생성자 내에서만 호출이 가능함

        * 생성자 내에서 첫번째 구문에 위치해야 함

        ```Java
        // this()를 첫줄에 사용하면, 다른 생성자를 호출할 수 있다.

        Person (String n, int a, String h) {
            name = n;
            age = a;
            hobby = h;
        }

        Person (String n, int a) {
            //  name = n;
            //  age = a;
            //  hobby = "따로 취미가 없어요..";
            this(n, a, "따로 취미가 없어요..");
        }

        // this는 멤버 변수와 파라미터를 구분하기 위해 사용
        Person (String name, int age, String hobby) {
            // this. : 객체가 가지고 있는!!
            // 멤버 변수 또는 멤버 메서드 접근에 사용
            // name = name; 으로 쓰는 것보다 더 가독성에 좋다!
            this.name = name;
            this.age = age;
            this.hobby = hobby;
        }
        ```

<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {inlineMath: [['$', '$']]},
    messageStyle: "none",
    "HTML-CSS": { availableFonts: "TeX", preferredFont: "TeX" },
  });
</script>