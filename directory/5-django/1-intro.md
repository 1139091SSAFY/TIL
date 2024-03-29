# Django

<div style="text-align: right"> 24. 03. 12. </div>

## 1. Web Appplication

### 1. Web Application

* Web Application (Web Service) 개발

    * 인터넷을 통해 사용자에게 제공되는 SW 프로그램을 구축하는 과정

    * 다양한 디바이스에서 웹 브라우저를 통해 접근하고 사용할 수 있음

### 2. Client & Server

* Web의 동작 방식

    ![image](image/01.PNG)

    * Client

        * 서비스를 요청하는 주체

        * 웹 사용자의 인터넷이 연결된 장치, 웹 브라우저

    * Server

        * Client의 요청에 응답하는 주체

        * 웹 페이지, 앱을 저장하는 컴퓨터

    * **요청**과 **응답**

* 우리가 웹 페이지를 보게 되는 과정

    | n | Explanation |
    | :---: | :--- |
    | 1 | 웹 브라우저(클라이언트)에서 'google.com' 입력 (REQUEST) |
    | 2 | 브라우저는 인터넷에 연결된 전세계 어딘가에 있는 구글 컴퓨터(서버)에게 'Google 홈페이지.html' 파일을 달라고 요청 |
    | 3 | 요청을 받은 구글 컴퓨터는 DB에서 'Google 홈페이지.html' 파일을 찾아 응답 (RESPONSE)
    | 4 | 전달받은 'Google 홈페이지.html' 파일을 사람이 볼 수 있게 웹 브라우저가 해석해 주면서 사용자는 구글의 메인 페이지를 보게 됨 |
    | |

### 3. Frontend & Backend

* 웹 개발에서의 Frontend & Backend

    | F/B | Explanation |
    | :---: | :--- |
    | Frontend | 사용자 인터페이스(UI)를 구성하고, 사용자가 애플리케이션과 상호작용할 수 있도록 함<br>HTML, CSS, JavaScript, 프론트엔드 프레임워크 등 |
    | Backend | 서버 측에서 동작하며, 클라이언트의 요청에 대한 처리와 DB와의 상호작용 등을 담당<br>서버 언어(Python, Java 등) 및 백엔드 프레임워크, DB, API, 보안 등 |
    | |

    ![F&B](image/02.PNG)

### 4. Framework

* '웹 서비스 개발'에는 무엇이 필요할까?

    * 로그인, 로그아웃, 회원관리, DB, 보안 등, 너무 많은 기술들이 필요

    * 하나부터 열까지 개발자가 모두 작성하는 것은 현실적으로 어려움

    * 잘 만들어진 것들을 가져와(모든 것을 직접 만들 필요가 없음) 좋은 환경에서 내 것으로 잘 사용하는 것도 능력인 시대

* Web Framework

    * 웹 애플리케이션을 빠르게 개발할 수 있도록 도와주는 도구

    * 개발에 필요한 기본 구조, 규칙, 라이브러리 등을 제공

## 2. Django

* Django

    * Python 기반의 대표적인 웹 프레임워크

    | | |
    | :---: | :--- |
    | 다양성 | Python 기반으로 소셜 미디어 및 빅데이터 관리 등 광범위한 서비스 개발에 적합 |
    | 확장성 | 대량의 데이터에 대해 빠르고 유연하게 확장할 수 있는 기능을 제공 |
    | 보안 | 취약점으로부터 보호하는 보안 기능이 기본적으로 내장되어 있음 |
    | 커뮤니티 지원 | 개발자를 위한 지원, 문서 및 업데이트를 제공하는 활성화된 커뮤니티 |
    | |

    * Django를 사용해 **서버를 구현**할 것 (예정)

## 3. 가상 환경

### 1. 가상 환경

* 가상 환경

    * Python 애플리케이션과 그에 따른 패키지들을 격리하여 관리할 수 있는 **독립적인** 실행 환경

* 가상 환경이 필요한 시나리오 1

    1. 한 개발자가 2개의 프로젝트(A와 B)를 진행해야 한다.

    2. 프로젝트 A는 requests 패키지 버전 1을 사용해야 한다.

    3. 프로젝트 B는 requests 패키지 버전 2를 사용해야 한다.

    4. 하지만 Python 환경에서 패키지는 1개의 버전만 존재할 수 있다.

    5. A와 B 프로젝트의 다른 패키지 버전 사용을 위한 독립적인 개발 환경이 필요하다.

* 가상 환경이 필요한 시나리오 2

    1. 한 개발자가 2개의 프로젝트(A와 B)를 진행해야 한다.

    2. 프로젝트 A는 water 라는 패키지를 사용해야 한다.

    3. 프로젝트 B는 fire 라는 패키지를 사용해야 한다.

    4. 하지만 Python 환경에서 water 패키지와 fire 패키지를 함께 사용하면 충돌이 발생하기 때문에 설치(공존)할 수 있다.

    5. A와 B 프로젝트의 패키지 충돌을 피하기 위한 독립적인 개발 환경이 필요하다.

![환경 구조 예시](image/03.PNG)

### 2. 가상 환경 구축 실습

1. 가상 환경 venv 생성

* venv : virtual environment

```bash
$ python -m venv venv(이름)
```

2. 가상 환경 활성화

```bash
$ source venv/Scripts/activate
```

* 환경을 On/Off하는 개념 (가상 환경에 들어가는 개념이 아님)

    * 일반적으로 내가 진행하는 프로젝트 안에 위치시킴

    * 생성된 venv 폴더는 절대 건드리지 말 것

    * 다른 가상 환경을 만들고자 한다면 다른 위치에 venv를 만들 것 - 경로가 다르기 때문에 구분할 수 있음

3. 환경에 설치된 패키지 목록 확인

```bash
$ pip list
```

* 패키지 목록이 필요한 이유

    1. 만약 2명(A와 B)의 개발자가 하나의 프로젝트를 함께 개발한다고 하자.

    2. 팀원 A가 먼저 가상 환경을 생성 후 프로젝트를 설정하고 관련된 패키지를 설치하고 개발하다가 협업을 위해 github에 프로젝트를 push한다.

    3. 팀원 B는 해당 프로젝트를 clone받고 실행해보려 하지만 실행되지 않는다.

    4. 팀원 A가 이 프로젝트를 위해 어떤 패키지를 설치했고, 어떤 버전을 설치했는지 A의 가상환경 상황을 알 수 없다.

    5. 가상 환경에 대한 정보 즉 **패키지 목록**이 공유되어야 한다. (txt file)

* 의존성 패키지

    * 한 SW 패키지가 다른 패키지의 기능이나 코드를 사용하기 때문에, 그 패키지가 존재해야만 제대로 작동하는 관계

    * 사용하려는 패키지가 설치되지 않았거나, 호환되는 버전이 아니면 오류가 발생하거나 예상치 못한 동작을 보일 수 있음

4. 의존성 패키지 목록 생성

```bash
$ pip freeze > requirements.txt
```

* requirements : 패키지 목록

    * 파일명을 다른 이름으로 하지 말 것 (Python 개발자들의 암묵적 합의)

* 의존성 패키지 관리의 중요성

    * 개발 환경에서는 각각의 프로젝트가 사용하는 패키지와 그 버전을 정확히 관리하는 것이 중요함

### 3. Django 프로젝트

* 생성 전 루틴 1~4단계

```bash
# 1. 가상환경(venv) 생성
$ python -m venv venv

# 2. 가상환경 활성화
$ source venv/Scripts/activate

# 3. Django 설치
$ pip install django

# 4. 의존성 파일 생성 (패키지 설치 시마다 진행)
$ pip freeze > requirements.txt
```

* Django 시작 - 프로젝트 생성

```bash
# firstpjt 라는 이름의 프로젝트 생성
# project 이름에는 -(hypen)가 들어가면 안 된다
$ django-admin startproject firstpjt .
```

* Django 서버 실행

```bash
# manage.py와 동일한 경로에서 진행
# http://127.0.0.1 : 물리적인 Local Machine(HW) 주소를 가리킴 (=Local Host)
# 8000 : Port 번호 (통신을 하는 모든 프로그램들이 운영체제로부터 부여받게 되는 번호)
$ python manage.py runserver
```

### 4. 참고

* Django 프로젝트 생성 루틴 정리 + git

    1. 가상 환경 생성

    2. 가상 환경 활성화

    3. Django 설치

    4. 의존성 파일 생성 (패키지 설치시마다 진행)

    5. .gitignore 파일 생성 (첫 add 전)

    6. git 저장소 생성

    7. Django 프로젝트 생성

* 가상 환경을 사용하는 이유

    1. 의존성 관리

        * 라이브러리 및 패키지를 각 프로젝트마다 독립적으로 사용 가능

    2. 팀 프로젝트 협업

        * 모든 팀원이 동일한 환경과 의존성 위에서 작업하여 버전 간 충돌을 방지

* LTS (Long-Term Support)

    * 프레임워크나 라이브러리 등의 SW에서 장기간 지원되는 안정적인 버전을 의미할 때 사용

    * 기업이나 대규모 프로젝트에서는 SW 업그레이드에 많은 비용과 시간이 필요하기 때문에 안정적이고 장기간 지원되는 버전이 필요

## 4. Django Design Pattern

### 1. 디자인 패턴

* 디자인 패턴

    * SW 설계에서 발생하는 문제를 해결하기 위한 일반적인 해결책 (공통적인 문제를 해결하는 데 쓰이는 형식화된 관행)

    * *애플리케이션 구조는 이렇게 구성하자*라는 관행

* MVC 디자인 패턴 (Model, View, Controller)

    * 애플리케이션을 구조화하는 대표적인 패턴

    * 데이터 & 사용자 인터페이스(사용자와 상호작용하는 부분) & 비즈니스 로직(데이터와 UI 사이의 영역)

    * 시각적 요소와, 뒤에서 실행되는 로직을 서로 영향 없이, 독립적이고 쉽게 유지보수할 수 있는 애플리케이션을 만들기 위해

* MTV 디자인 패턴 (Model, Template, View)

    * **Django에서** 애플리케이션을 구조화하는 패턴

    * 기존 MVC 패턴과 동일하나 단순히 명칭을 다르게 정의한 것 (View → Template, Controller → View)

        * **Pythonic** → 배열(array)이라는 자료구조를 Python에서만 리스트(list)로 부르는 것처럼

### 2. Project & App

* Django의 모든 명령어는

    ```bash
    $ python manage.py
    ```

    로 시작함

![Project & App](image/04.PNG)

* Django Project

    * 애플리케이션의 집합

    * DB 설정, URL 연결, 전체 앱 설정 등을 처리

* Django Application

    * 독립적으로 작동하는 기능 단위 모듈

    * 각자 특정한 기능을 담당하며, 다른 앱들과 함께 하나의 프로젝트를 구성

* 만약 온라인 커뮤니티 카페를 만든다면?

    | | |
    | :---: | :--- |
    | 프로젝트 | 카페 (전체 설정 담당) |
    | 앱 | 게시글, 댓글, 회원 관리 등<br>(DB, 인증, 화면) |
    | |

* 앱을 사용하기 위한 순서

    1. 앱 생성

        * 앱의 이름은 '복수형'으로 지정하는 것을 권장

        ```bash
        $ python manage.py startapp articles
        ```

    2. 앱 등록

        * 반드시 앱을 생성한 후에 등록해야 함
        
            * 순서를 반대로 할 경우 제대로 작동되지 않는다.

        * Project - settings.py 내 INSTALLED_APPS의 맨 앞에 추가해 준다.

* 프로젝트의 구조

    | File | Explanation |
    | :---: | :--- |
    | ***settings.py*** | 프로젝트의 모든 설정을 관리 |
    | ***urls.py*** | 요청이 들어오는 URL에 따라 해당하는 적절한 views를 연결 |
    | \_\_init\_\_.py | 해당 폴더를 패키지로 인식하도록 설정하는 파일<br>수업 과정에서 수정할 일 없음 |
    | asgi.py | 비동기식 웹 서버와의 연결 관련 설정<br>수업 과정에서 수정할 일 없음 |
    | wsgi.py | 웹 서버와의 연결 관련 설정<br>수업 과정에서 수정할 일 없음 |
    | manage.py | Django 프로젝트와 다양한 방법으로 상호작용하는 커맨드라인 유틸리티<br>수업 과정에서 수정할 일 없음 |
    | |

* 앱 구조

    | File | Explanation |
    | :---: | :--- |
    | ***admin.py*** | 관리자용 페이지 설정 |
    | ***models.py*** | DB와 관련된 Model을 정의<br>MTV 패턴의 M |
    | ***views.py*** | HTTP 요청을 처리하고 해당 요청에 대한 응답을 반환(url, model, template과 연계)<br>MTV 패턴의 V |
    | apps.py | 앱의 정보가 작성된 곳<br>수업 과정에서 수정할 일 없음 |
    | tests.py | 프로젝트 테스트 코드를 작성하는 곳<br>수업 과정에서 수정할 일 없음 |
    | |

### 3. Requests & Responses

![Requests & Responses of Django](image/05.PNG)

* 흐름 순서

* views.py 에서 함수를 작성하게 될 것 (→ ***view 함수***)

1. URLs

    ![URLs](image/06.PNG)

    * https://127.0.0.1:8000/index/ 로 요청이 왔을 때, views 모듈의 view 함수 index를 호출

        ```python
        from articles import views
        ```

        * articles 패키지에서 views 모듈을 가져오는 것

        * url 경로는 반드시 '/'(slash)로 끝나야 함

2. View

    ![View](image/07.PNG)

    * 특정 경로에 있는 template과 request 객체를 결합해 응답 객체를 반환하는 index view 함수 정의

        * 모든 view 함수는 첫번째 인자로 request 요청 객체를 필수적으로 받음

        * 매개변수 이름이 request가 아니어도 되지만 그렇게 작성하지 않음

3. Template

    ![Template](image/08.PNG)

    * articles 앱 폴더 안에 templates 폴더 생성 → 폴더명은 반드시 ***templates***여야 하며, 개발자가 직접 생성해야 함

    * templates 폴더 안에 articles 폴더 생성

    * articles 폴더 안에 템플릿 파일(index.html) 생성

    * Django에서 template을 인식하는 경로 규칙

        ![경로 규칙](image/09.PNG)

### 4. 데이터 흐름에 따른 코드 작성

![image](image/10.PNG)

## 5. 참고

### 1. MTV 디자인 패턴 정리

![image](image/11.PNG)

* Model

    * 데이터와 관련된 로직을 관리

    * 응용프로그램의 데이터 구조를 정의하고, 데이터베이스의 기록을 관리

* Template

    * 레이아웃과 화면을 처리

    * 화면상의 사용자 인터페이스 구조와 레이아웃을 정의

* View

    * Model & Template과 관련한 로직을 처리해서 응답을 반환

    * 클라이언트의 요청에 대해 처리를 분기하는 역할

    * View 예시

        * 데이터가 필요하면 Model에 접근해서 데이터를 가져오고, 

        * 가져온 데이터를 template로 보내 화면을 구성하고, 

        * 구성된 화면을 응답으로 만들어 클라이언트에게 반환

### 2. render 함수

* 주어진 템플릿을 주어진 context 데이터와 결합하고 렌더링된 텍스트와 함께 HttpResponse 응답 객체를 반환하는 함수

```python
render(request, template_name, context)

# 1. request : 응답을 생성하는 데 사용되는 요청 객체
# 2. template_name : 템플릿 이름의 경로(html 파일)
# 3. context : 템플릿에서 사용할 데이터 (dict 타입으로 작성)
```

### 3. 지금까지 나온 Django의 규칙

1. urls.py에서 각 url 경로는 반드시 '/'로 끝남

2. views.py에서 모든 view 함수는 ***첫번째 인자로 요청 객체***를 받음

    * 매개변수 이름은 반드시 request로 지정

3. Django는 ***정해진 경로***에 있는 template 파일만 읽어올 수 있음

    * app 폴더/templates/이후